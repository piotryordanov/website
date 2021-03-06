import React from 'react'
import {Text, Flex} from 'rebass'
import Link from 'next/link'
import withZoom from './withZoom'
import withHoverCursor from './withHoverCursor'

export default () => (
	<Flex alignItems="center">
		{withHoverCursor(
			withZoom(() => (
				<Link href="/about">
					<Text fontSize="1" fontWeight={700} />
				</Link>
			))
		)()}
	</Flex>
)
