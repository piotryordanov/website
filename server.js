const express = require('express')
const next = require('next')
// eslint-disable-next-line import/no-unassigned-import
require('./getMeta')

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express()

		server.get('/post/:slug', (req, res) => {
			const actualPage = '/post'
			const queryParams = {slug: req.params.slug}
			app.render(req, res, actualPage, queryParams)
		})
		server.get('/book/:book', (req, res) => {
			const actualPage = '/book'
			const queryParams = {book: req.params.book}
			app.render(req, res, actualPage, queryParams)
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, err => {
			if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch(error => {
		console.log(error)
	})
