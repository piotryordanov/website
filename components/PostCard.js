import React from 'react'
import styled from 'styled-components'
import {Flex, Text} from 'rebass'
import Link from 'next/link'
import PropTypes from 'prop-types'
import withHoverCursor from './withHoverCursor'

const Card = withHoverCursor(styled.div`
	position: absolute;
	will-change: transform, width, height, opacity;
	margin: 0px;
	text-align: center;
	width: 100%;
	height: 95%;
	overflow: hidden;
`)
const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
	background-position: 50% 50% !important;
	background-size: cover;
	filter: brightness(40%);
	background-image: ${props => `url(/static/posts/${props.cover}.jpg)`};
	border-radius: 5px;
`
const Info = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 30px 5px 30px 20px;
	text-align: left;
	color: white;
`
// Const Text = styled.div`
// 	font-size: 20px;
// 	font-family: 'Open Sans', sans-serif;
// 	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
// 	color: white;
// `
const ImageContainer = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 100px;
	border: 2px solid gray;
`

const Index = props => (
	<Link href={`/post?name=${props.title}`} as={`/post/${props.title}`}>
		<Card>
			<BackgroundImage {...props} />
			<Info>
				<Text mb={2} fontSize="18px" fontWeight="bold">
					{props.title}
				</Text>
				<Flex>
					<ImageContainer src="/static/monk.jpg" />
					<Flex flexWrap="wrap" ml={2}>
						<Text fontSize="14px" fontWeight="bold" width={1}>
							{props.date}
						</Text>
						<Text fontSize="12px" width={1}>
							{props.readTime}
						</Text>
					</Flex>
				</Flex>
			</Info>
		</Card>
	</Link>
)
Index.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	readTime: PropTypes.string
}
Index.defaultProps = {
	title: '',
	date: '',
	readTime: ''
}

export default Index
