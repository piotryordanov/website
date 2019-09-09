import React from 'react'
import styled from 'styled-components'
import {Flex} from 'rebass'

const Index = styled.hr`
	border: none;
	height: 20px;
	::after {
		content: '...';
		display: inline-block;
		margin-left: 25px;
		position: relative;
		font-size: 20px;
		letter-spacing: 1em;
		color: rgb(104, 104, 104);
	}
`
export default () => (
	<Flex alignItems="center">
		<Index />
	</Flex>
)
