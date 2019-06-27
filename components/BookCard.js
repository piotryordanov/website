import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import Link from 'next/link'
import withZoom from './withZoom'
import withHoverCursor from './withHoverCursor'

const Card = withHoverCursor(styled.div`
	width: 200px;
	height: 300px;
	margin: 20px;
	position: relative;
	transition: all 300ms ease-in-out;
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
	filter: brightness(70%);
	background-image: ${props =>
		`url(/static/covers/${R.replace(' ', '\\ ', props.title)}.jpg)`};
	border-radius: 5px;
`
const Text = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 30px 5px 30px 20px;
	font-size: 25px;
	font-family: 'Open Sans', sans-serif;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	color: white;
`

export default withZoom(props => (
	<Link href={`/book?name=${props.title}`} as={`/book/${props.title}`}>
		<Card>
			<BackgroundImage {...props} />
			<Text>{props.title}</Text>
		</Card>
	</Link>
))
