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

function replaceMaps(callback) {
    // remove the - and vs that can come with the map
    for (var b = 0; b < maps.length; b++) {
        if (maps[b].indexOf("-")) maps[b] = maps[b].substring(0, maps[b].length);
        if (maps[b].indexOf("vs")) maps[b] = maps[b].substring(0, maps[b].length - 2);
    }
    return callback(maps);
}

function replaceTime() {
    for (var a = 0; a < time.length; a++) {
        var hours = parseInt(time[a].substring(0, 2));
        var mins = parseInt(time[a].substring(4, 6));
        time[a] = hours*60 + mins;
    }
}

function printOut() {
    var maxTime = 0;
    replaceMaps(function(retmaps) {
    replaceTime();
        for (var a = 0; a < team1.length; a++) {
            if (time[a] > maxTime){
                maxTime = time[a];
                console.log("Team1: " + team1[a] + " Team 2: " + team2[a] + " Map: " + retmaps[a] + " Time: " + time[a]);   
            }
        }
    });
}

printOut();