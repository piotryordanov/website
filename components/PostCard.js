import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import {Text} from 'rebass'
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
	background-image: ${props =>
		`url(/static/posts/${R.replace(/ /g, '\\ ', props.title)}.jpg)`};
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

const Index = props => (
	<Link href={`/post?name=${props.title}`} as={`/post/${props.title}`}>
		<Card>
			<BackgroundImage {...props} />
			<Info>
				<Text fontSize={['15px', '15px', '17px', '17px']} fontWeight="bold">
					{props.title}
				</Text>
				<Text fontSize="15px">{props.date}</Text>
				<Text fontSize="12px">{props.readTime}</Text>
			</Info>
		</Card>
	</Link>
)
Index.propTypes = {
	title: PropTypes.string
}
Index.defaultProps = {
	title: ''
}

export default Index
