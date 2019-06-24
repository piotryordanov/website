// Pages/_app.js
import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import ProgressBar from 'react-styled-clickable-progress-bar'
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
		return (
			<Container>
				<Provider store={store}>
					<ProgressBar />
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(MyApp)
