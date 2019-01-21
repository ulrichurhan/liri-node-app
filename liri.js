var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var omdb = require('omdbapi');
const { getMetadata } = require('movie-metadata')

var id = "dcf5bfe4dc7e432a94d17da3cc8959b1";
var secret = "a472354c4aa74716b8bcf4133c10a2b3";
var query = null;

var spotify = new Spotify({
    id,
    secret
});

// Grab search command line argument
var command = process.argv[2]; // Acceptable commands: 'spotify-this-song' or 'movie-this' or 'do-what-it-says'

// Joining term arguments since a song or movie name may contain spaces
var term = process.argv.slice(3).join(" "); //%20

// By default, if no command type is provided, then default command is 'spotify-this-song' and term 'I Want it That Way'
if (!command) {
    command = "spotify-this-song";
    term = "I Want it That Way";
}

// Print whether searching for a song or movie, print the term as well
if (command === "spotify-this-song") {
    console.log("Searching Spotify");
    console.log("Term: " + term);
    
    query = "https://api.spotify.com/v1/search?q=" + term + "&type=track&limit=1";
    // I CAN MAKE A CALL TO SPOTIFY AND GET DATA RETURNED BUT COULD NOT FIGURE OUT THE RESPONSE DATA. THERE IS NO CLEAR DOCUMENTATION ON HOW TO USE node-spotify-api
    spotify
        .request(query)
        .then(function(data) {
        console.log("+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+");
        console.log(data.tracks.items[0]); 
    })
        .catch(function(err) {
        console.error('Error occurred: ' + err); 
    });
}

if (command === "movie-this") {
    console.log("Searching Open Movie Database (OMDB)");
    console.log("Term: " + term);
    console.log("+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+");
    // omdb.search('pulp fiction', function(results) {
    //     console.log(results);
    // I TRIED USING OMDBAPI PACKAGE BUT UNFORTUNATELY IT IS NOT WORKING. TRIED SEARCHING FOR OTHER NPM PACKAGES WITHOUT ANY LUCK.
    console.log(metadata)
    }
}

if (command === "do-what-it-says") {
    console.log("Accessing random.txt to call a LIRI command");
    console.log("+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+");
    // NOT SURE HOW THIS WORKS
}
