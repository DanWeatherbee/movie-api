// Movie reducer using async functions:

const responseArray = [];


async function logFetch(url, urlStr1, urlStr2_ID, urlStr3, urlStr4) {

        urlStr1 = "https://api.themoviedb.org/3/movie/";
        urlStr2_ID = "550";
        urlStr3 = "?api_key=06f6d11f6cf9b366cb459ecbdfdc75a3";
        urlStr4 = "&format=json";
        url = urlStr1 + urlStr2_ID + urlStr3 + urlStr4;
    try {
        const response = await fetch(url);
        const text = await response.json()
        responseArray.push(text);
        console.log(responseArray[0]);
        logFetch.doSomething();
    } catch (err) {
        console.log('fetch failed', err);
    }
}

logFetch.doSomething = function() {
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