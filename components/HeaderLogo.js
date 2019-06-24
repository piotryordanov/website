import React from 'react'
import Link from 'next/link'
import {Image, Flex, Text} from 'rebass'

import withZoom from './withZoom'
import withHoverCursor from './withHoverCursor'
import Uppercase from './Uppercase'

const Index = withHoverCursor(props => (
	<Link href="/">
		<Flex>
      <Image mr={2} width="32px" src={props.logo}/>
			<Flex flexWrap="wrap">
				<Uppercase fontSize={2} fontWeight={1} color="#333" mb={-0.5} width={1}>
					{props.text.author}
				</Uppercase>
				<Text fontSize={1} fontWeight={0} color="#4c4c4c" width={1}>
					{props.text.subtitle}
				</Text>
			</Flex>
		</Flex>
	</Link>
))

export default withZoom(Index)
