import React from 'react'
import {Flex} from 'rebass'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Grid from './Grid'

// Const renderChapterCards = props =>
// 	R.pipe(
// 		R.prop('posts'),
// 		R.defaultTo([]),
// 		R.map(post => (
// 			<Box key={post} mb={20} p={[0, 20]} width={[1, 1, 1 / 2]}>
// 				<PostCard title={post} />
// 			</Box>
// 		))
// 	)(props)
// Const BooksPage = props => (
// 	<Flex mt={3} flexWrap="wrap">
// 		{renderChapterCards(props)}
// 	</Flex>
// )
const BooksPage = ({posts}) => {
	const d = R.reduce(
		(acc, item) => R.append({title: item, height: 300}, acc),
		[],
		posts
	)

	return (
		<Flex mt={3} flexWrap="wrap">
			<Grid data={d} />
		</Flex>
	)
}

BooksPage.propTypes = {
	posts: PropTypes.array
}
BooksPage.defaultProps = {
	posts: []
}

export default BooksPage
