var rawjs = require('raw.js');
var reddit = new rawjs("csgobettingbot");
var config = require("config");
reddit.setupOAuth2("RxO5CAM77N5pKg", "SWjK2mRfCIb8TEapepaW0oCLNTU", "http://google.com");

reddit.auth({"username": config.get("reddituser"), "password": config.get("redditpass")}, function(err, response) {
    if(err) {
        console.log("Unable to authenticate user: " + err);
    } else {
        // The user is now authenticated. If you want the temporary bearer token, it's available as response.access_token
        // and will be valid for response.expires_in seconds.
        // raw.js will automatically refresh the bearer token as it expires. Unlike web apps, no refresh tokens are available.
        reddit.submit(
            {
                save: true,
                inboxReplies: true,
                r: 'r/csgobetting',
                text: "TEST",
                title: "TESTTITLE",
            }, function(err, id) {
                if (err) console.log(err);
            }
        );
    }
});
