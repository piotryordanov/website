import React from 'react'
import {Text, Flex, Box} from 'rebass'
import styled from 'styled-components'
import withZoom from './withZoom'

const ImageContainer = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100px;
`

const Container = styled(Flex)`
	max-width: 500px;
	margin: auto;
`

export default withZoom(() => (
	<Container justifyContent="center">
		<Box>
			<ImageContainer src="static/monk.jpg" />
		</Box>
		<Box mx={2}>
			<Flex flexWrap="wrap">
				<Text textAlign="center" fontSize={22} fontWeight="bold" width={1}>
					Hi, I&apos;m Piotr Yordanov
				</Text>
				<Text textAlign="center" fontSize={15} width={1}>
					Developper, Trader, Entrepreneur, Writer, & Musician.
				</Text>
			</Flex>
		</Box>
	</Container>
))
