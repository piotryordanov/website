import React from 'react'
import {Flex, Box} from 'rebass'
import * as R from 'ramda'

import PostCard from './PostCard'

const renderChapterCards = props =>
	R.pipe(
		R.prop('posts'),
		R.defaultTo([]),
		R.map(post => (
			<Box key={post} mb={20} p={[0, 20]} width={[1, 1, 1 / 2]}>
				<PostCard title={post} />
			</Box>
		))
	)(props)

const BooksPage = props => (
	<Flex mt={3} flexWrap="wrap">
		{renderChapterCards(props)}
	</Flex>
)

export default BooksPage
