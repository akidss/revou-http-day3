// kalau kita mau pakai module http builtin dari nodejs, kita perlu import terlebih dahulu
const http = require("http");

const data_dummy = [
	{
		nama: "udin chaniago",
		asal: "padang",
		hobi: "mancing",
	},
	{
		nama: "abdul somat",
		asal: "kepo bgt lu",
		hobi: "main motor trek",
	},
];

const server = http.createServer(function (request, response) {
	// console.log(request);
	if (request.url === "/") {
		response.write("ini response dari servezzzz");
		response.end();
	}
	if (request.url === "/hello") {
		response.write("hello world");
		response.end();
	}
	if (request.url === "/data") {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(JSON.stringify(data_dummy));
		response.end();
	}
});

server.listen(3000, () => {
	console.log(`server sedang berjalan pada url dan port http://localhost:3000`);
});

// kalau misal kita cuma mau pake beberapa module aja yang ada dari http kita bisa pake
// const { } -> destructuring object
// const { createServer } = require('http')

// const server2 = createServer()
