/* eslint no-undef: 0 */
import React, {useRef, useState, useEffect, useCallback} from 'react'
import {useTransition, a} from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

const useMedia = (queries, values, defaultValue) => {
	const match = useCallback(
		() => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
	)
	const [value, set] = useState(match)
	useEffect(() => {
		const handler = () => set(match)
		window.addEventListener('resize', handler)
		return () => window.removeEventListener('resize', handler)
	}, [match])
	return value
}

const useMeasure = () => {
	const ref = useRef()
	const [bounds, set] = useState({left: 0, top: 0, width: 0, height: 0})
	const [ro] = useState(
		() => new ResizeObserver(([entry]) => set(entry.contentRect))
	)
	useEffect(() => {
		ro.observe(ref.current)
		return () => ro.disconnect
	}, [ro])

	return [{ref}, bounds]
}

const Grid = ({data}) => {
	// Tie media queries to the number of columns
	const columns = useMedia(
		['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
		[3, 2, 1],
		1
	)
	// Measure the width of the container element
	const [bind, {width}] = useMeasure()
	// UseEffect(() => void setInterval(() => set(shuffle), 2000), [])
	// Form a grid of stacked items
	const heights = new Array(columns).fill(0) // Each column gets a height starting with zero
	const breakPoints = []
	for (let i = 0; i < 10; i++) {
		breakPoints.push(4 * i + 1)
		breakPoints.push(4 * i + 2)
	}

	const gridItems = data.map((child, i) => {
		const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
		const currWidth =
			columns === 1
				? width
				: breakPoints.indexOf(i) > -1
				? width * 0.33
				: width * 0.66
		const xy = [
			i % columns === 0 ? 0 : width - currWidth,
			// (width / columns) * column,
			(heights[column] += child.height) - child.height
		] // X = container width / number of columns * column index, Y = it's just the height of the current column
		return {...child, xy, width: currWidth, height: child.height}
		// Return {...child, xy, width: width / columns, height: child.height / 2}
	})
	// Turn the static grid values into animated transitions, any addition, removal or change will be animated
	const transitions = useTransition(gridItems, item => item.title, {
		from: ({xy, width, height}) => ({xy, width, height, opacity: 0}),
		enter: ({xy, width, height}) => ({xy, width, height, opacity: 1}),
		update: ({xy, width, height}) => ({xy, width, height}),
		leave: {height: 0, opacity: 0},
		config: {mass: 5, tension: 1500, friction: 100},
		trail: 25
	})
	// Render the grid
	return (
		<div {...bind} className="list" style={{height: Math.max(...heights)}}>
			{transitions.map(({item, props: {xy, ...rest}, key}) => (
				<a.div
					key={key}
					style={{
						transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
						...rest
					}}
				>
					<PostCard title={item.title} />
				</a.div>
			))}
		</div>
	)
}

Grid.propTypes = {
	data: PropTypes.array
}
Grid.defaultProps = {
	data: []
}

export default Grid
