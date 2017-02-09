var http = require("http");
var fs = require("fs");

http.get("http://www.hltv.org/matches", function(res) {
	res.on('data', function (chunk) {
	    fs.appendFile("output.txt", chunk);
	});
}).on('error', function(e) {
  	console.log("Got error: " + e.message);
});