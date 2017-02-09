var request = require("request");
var fs = require("fs");

request({
  uri: "http://hltv.org/matches",
}, function(error, response, body) {
  fs.writeFile("output.txt", body);
});