import React from 'react'
import {Box, Flex} from 'rebass'

import HomepageIntro from './HomepageIntro'
import Divider from './Divider'
import BookCard from './BookCard'

const renderBooks = props =>
	props.meta.map(book => <BookCard key={book.title} {...book} />)

const Index = props => (
	<Flex mt={3} flexWrap="wrap" justifyContent="center">
		<Flex mt={3} flexWrap="wrap" width={1}>
			<Box mt={10} width={1}>
				<HomepageIntro />
				<Divider />
			</Box>
		</Flex>
		{renderBooks(props)}
	</Flex>
)

export default Index
