require("dotenv").config();

var Twitter = require('twitter');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var command = process.argv[2];

if (command === "my-tweets"){
    var params = { screen_name: 'erin_lemler' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                if (i === tweets.length){
                    i = 20;
                }
                else{
                    console.log(tweets[chicken].created_at);
                    console.log(tweets[chicken].text);
                }
            }
        }
    });
}


else if (command === "spotify-this-song");{
    var song = "The Sign";

   if (process.argv.length > 3){
        song = process.argv[3];
   }
    
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}
// else if (command === "movie-this"); {
//     movie-this();
// }
// else if (command === "do-what-it-says"); {
//     do-what-it-says();
// };