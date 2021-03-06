// Pages/_app.js
import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import makeStore from '../data/store'

// eslint-disable-next-line import/no-unassigned-import
import '../static/epub-zen.css'

class MyApp extends App {
	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		}
	}

	render() {
		const {Component, pageProps, store} = this.props
		// eslint-disable-next-line no-undef
		return typeof window === 'object' ? (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		) : (
			<></>
		)
	}
}

export default withRedux(makeStore)(MyApp)
