import React, {useState} from 'react'
import * as META from '../static/meta.json'
import * as R from 'ramda'

export default Child => props => {
	// eslint-disable-next-line no-unused-vars
	const [meta, updateMeta] = useState(META.default)
	return <Child meta={meta} {...props} />
}
