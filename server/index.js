const http = require('http');
let port = 8080;

let requestHandler = (request, response) => {
	console.log(request.url)
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'
})
response.write(`Server started at port ${port}!`)
response.end()
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
	if(err) {
		return console.log('Error:',err)
	}
	console.log(`Server started at port ${port}`)

 //   console.log(`Запрошенный адрес: ${requestHandler.url}`);


})