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
	useEffect(() => (ro.observe(ref.current), ro.disconnect), [ro])
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
	const gridItems = data.map((child, i) => {
		const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
		const xy = [
			(width / columns) * column,
			(heights[column] += child.height / 2) - child.height / 2
		] // X = container width / number of columns * column index, Y = it's just the height of the current column
		console.log(width)
		console.log(columns)
		console.log(width / columns)
		return {...child, xy, width: width / columns, height: child.height / 2}
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
					key={item.title}
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
