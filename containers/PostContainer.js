import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as R from 'ramda'

import PostPage from '../components/PostPage'

const getContent = R.pipe(
	R.remove(0, 3),
	R.join('\n')
)
const getSoundtrack = R.pipe(
	R.take(2),
	R.takeLast(1),
	d => {
		const [artist, track, URL] = d[0].split(' - ')
		return {artist, track, URL}
	}
)

const parseMD = (md, setMarkdown, title) =>
	setMarkdown(
		R.pipe(
			R.split('\n'),
			md => ({
				title,
				content: getContent(md),
				date: R.take(1, md)[0],
				soundtrack: getSoundtrack(md)
			})
		)(md)
	)

const Index = props => {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		const URL = decodeURIComponent(
			R.last(R.split('/post/', props.router.asPath))
		)
		axios
			.get(`/static/posts/${URL}.md`)
			.then(response => parseMD(response.data, setMarkdown, URL))
	}, [props.router.asPath])
	return withLoading(markdown)
}

const withLoading = data =>
	R.ifElse(R.isNil, R.always(<>Loading</>), R.always(<PostPage {...data} />))(
		data
	)

export default Index
