import React from 'react'
import {Flex} from 'rebass'

import BookCard from './BookCard'

const renderBooks = props =>
	props.meta.map(book => <BookCard key={book.title} {...book} />)

const Index = props => (
	<Flex mt={3} flexWrap="wrap" justifyContent="center">
		{renderBooks(props)}
		hello world
	</Flex>
)

export default Index
