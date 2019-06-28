import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import withZoom from './withZoom'
import CodeBlock from './CodeBlock'

const Index = props => (
	<>
		<div className="post__content__container">
			<div className="zen">
				<h1>{props.title}</h1>
				<ReactMarkdown source={props.content} renderers={{code: CodeBlock}} />
			</div>
		</div>
	</>
)
Index.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
}
Index.defaultProps = {
	title: '',
	content: ''
}

export default withZoom(Index)
