import React, {useState} from 'react'
import * as META from '../static/meta.json'

export default Child => props => {
	// eslint-disable-next-line no-unused-vars
	const [meta, updateMeta] = useState(META.default)
	return <Child meta={meta} {...props} />
}
