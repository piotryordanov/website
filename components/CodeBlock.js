import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import * as styles from 'react-syntax-highlighter/dist/styles/hljs'

const CodeBlock = ({language, value}) => (
	<SyntaxHighlighter language={language} style={styles.docco}>
		{value}
	</SyntaxHighlighter>
)
CodeBlock.propTypes = {
	value: PropTypes.string.isRequired,
	language: PropTypes.string
}
CodeBlock.defaultProps = {
	language: null
}

export default CodeBlock
