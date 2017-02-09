var cheerio = require('cheerio');
var fs = require('fs');

$ = cheerio.load(fs.readFileSync("output.txt"));

var team1 = [];
var team2 = [];
var maps = [];
var time = [];

$('.matchTeam1Cell').each(function() {
    var text = $(this).text().replace(/\s/g,'');
    team1.push(text);
});

$('.matchTeam2Cell').each(function() {
    var text = $(this).text().replace(/\s/g,'');
    team2.push(text);
});

$('.matchScoreCell').each(function() {
    var text = $(this).text().replace(/\s/g,'');
    maps.push(text);
});

$('.matchTimeCell').each(function() {
    var text = $(this).text().replace(/\s/g,'');
    time.push(text);
});

for (var a = 0; a < team1.length; a++) {
    console.log("Team 1: " + team1[a] + " Team 2: " + team2[a] + " Map: " + maps[a] + " Time: " + time[a]);
}