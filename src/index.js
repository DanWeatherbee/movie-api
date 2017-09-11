// Movie reducer using async functions:

//Model

var API = function(prefix, request, q, k, amp, format) {
    this.prefix = prefix;
    this.request = request;
    this.q = q;
    this.k = k;
    this.amp = amp;
    this.format = format;
    this.url = this.prefix + this.request + this.q + this.k + this.amp + this.format;
}

var API_CALL_POPULAR = new API(
    "https://api.themoviedb.org/3/movie/",
    "popular",
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3",
    "&",
    "format=json"
);

API.prototype.call = async function(response, responseArray) {
    this.responseArray = [];
    try {
        const response = await fetch(API_CALL_POPULAR.url);
        const text = await response.json()
        this.responseArray.push(text);
        console.log(this.responseArray[0].results);
        this.renderPopular();

    } catch (err) {
        console.log('fetch failed', err);
    }
};

API.prototype.renderPopular = function(responseArray) {
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h3>Popular Movies</h3>');
    this.responseArray[0].results.forEach(function(item) {
        $(card).append('<p>' + item.title + '</p>');
    })

    $(card).append('<hr>');
};