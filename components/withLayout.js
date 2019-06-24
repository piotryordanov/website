import React from 'react'
import {Box, Flex} from 'rebass'
import {compose} from 'redux'
import {withRouter} from 'next/router'

import HeaderContainer from '../containers/HeaderContainer'
import Footer from './Footer'

import Fonts from './Fonts'
import GlobalStyles from './GlobalStyles'
import withTheme from './withTheme'
import withMeta from './withMeta'

const withLayout = Page => props => (
	<>
		<Fonts />
		<GlobalStyles />
		<Flex flexWrap="wrap">
			<Box width={1}>
				<HeaderContainer />
			</Box>
			<Box py={0.5} px={2} m="auto" width={[1, 1040]}>
				<Page {...props} />
			</Box>
			<Box m="auto" width={[1, 1040]}>
				<Footer />
			</Box>
		</Flex>
	</>
)
export default compose(
	withRouter,
	withTheme,
	withMeta,
	withLayout
)
