import React, {useState, useEffect} from 'react'
import {Box, Flex} from 'rebass'
import Headroom from 'react-headroom'
import ProgressBar from 'react-styled-clickable-progress-bar'

import styled from 'styled-components'
import Navbar from './Navbar'
import HeaderLogo from './HeaderLogo'
import HeaderSubscribeButton from './HeaderSubscribeButton'

const Bar = styled(ProgressBar)`
	display: ${props => (props.display === 1 ? '' : 'none')};
	transition: top 200ms ease-in-out;
`

export default props => {
	const [top, updateTop] = useState('0px')
	const [hasProgressBar, showProgressBar] = useState(0)
	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (location.pathname.split('/')[1] === 'post') {
			showProgressBar(1)
		}
	}, [])
	return (
		<>
			<Headroom
				onPin={() => updateTop('36px')}
				onUnpin={() => updateTop('0px')}
			>
				<Navbar>
					<Box py={0.5} px={2} m="auto" width={[1, 1, 1, 1040]}>
						<Flex justifyContent="space-between">
							<HeaderLogo {...props} />
							<HeaderSubscribeButton />
						</Flex>
					</Box>
				</Navbar>
			</Headroom>
			<Bar top={top} display={hasProgressBar} />
		</>
	)
}
