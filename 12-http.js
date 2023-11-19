const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end("Hello world")
	}
	if (req.url === '/about') {
		res.end('heres about')
	}
	if (req.url !== '/' && req.url !== '/about') {
		res.end(`
        <a href="/">back</a>
        `)
	}
})

server.listen(8080)