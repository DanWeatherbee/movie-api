// Movie reducer using async functions:

const responseArray = [];

// https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
async function logFetch(url, prefix, request, query, KEY, ampersign, format) {

        prefix = "https://api.themoviedb.org/3/movie/";
        /*
        request value below can be connected to an imput feild to query. Valid formats;
         latest, popular, id#.
        */
        request = "popular";
        query = "?";
        KEY = "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3";
        ampersign = "&";
        format = "format=json";
        url = prefix + request + query + KEY + ampersign + format;
    try {
        const response = await fetch(url);
        const text = await response.json()
        responseArray.push(text);
        console.log(responseArray[0]);
       // logFetch.query();
       logFetch.queryPopular();
       // logFetch.queryLatest();
    } catch (err) {
        console.log('fetch failed', err);
    }
}

logFetch.query = function() {
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');
    $(card).append('<h3>Movie Title</h3>');
    $(card).append('<p>' + responseArray[0].original_title + '</p>');
    $(card).append('<h3>Overview</h3>');
    $(card).append('<p>"' + responseArray[0].overview + '"</p>');
    $(card).append('<h3>Budget</h3>');
    $(card).append('<p>$' + responseArray[0].budget + '</p>');
    $(card).append('<h3>Production Companies</h3>');
    responseArray[0].production_companies.forEach(function(item) {
        $(card).append('<p>' + item.name + '</p>');
    })
    $(card).append('<h3>Production Countries</h3>');
    responseArray[0].production_countries.forEach(function(item) {
        $(card).append('<p>' + item.name + '</p>');
    })
    $(card).append('<hr>');
}

logFetch.queryPopular = function() {
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');
    $(card).append('<h3>Popular Movies</h3>');
    responseArray[0].results.forEach(function(item) {
        $(card).append('<p>' + item.title + '</p>');
    })
    /*
    $(card).append('<h3>Overview</h3>');

    $(card).append('<h3>Budget</h3>');

    $(card).append('<h3>Production Companies</h3>');

    */

    $(card).append('<hr>');
}

logFetch.queryLatest = function() {
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h3>Latest Movies</h3>');
/*
    $(card).append('<h3>Overview</h3>');

    $(card).append('<h3>Budget</h3>');

    $(card).append('<h3>Production Companies</h3>');
    responseArray[0].production_companies.forEach(function(item) {
        $(card).append('<p>' + item.name + '</p>');
    })
*/
    $(card).append('<hr>');
}