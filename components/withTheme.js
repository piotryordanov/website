import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './theme'

export default Child => {
	return props => (
		<ThemeProvider theme={theme}>
			<Child {...props} />
		</ThemeProvider>
	)
}
