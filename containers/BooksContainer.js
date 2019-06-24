import React from 'react'
import * as R from 'ramda'

import PropTypes from 'prop-types'
import BooksPage from '../components/BooksPage'
import withLoading from '../components/withLoading'

const Index = props => {
	const d = R.ifElse(
		R.hasPath(['router', 'asPath']),
		() =>
			R.pipe(
				R.find(
					R.propEq(
						'title',
						decodeURIComponent(R.last(R.split('/book/', props.router.asPath)))
					)
				),
				R.pick(['posts'])
			)(props.meta),
		R.always([])
	)(props)
	return <BooksPage {...d} />
}

Index.propTypes = {
	router: PropTypes.object,
	meta: PropTypes.object
}

Index.defaultProps = {
	router: {},
	meta: {}
}

export default withLoading(Index, ['posts'])
