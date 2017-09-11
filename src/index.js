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

var ID = "550";
var API_CALL_ID = new API(
    "https://api.themoviedb.org/3/movie/",
    ID,
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3",
    "&",
    "format=json"
);

API.prototype.call = async function(response, responseArray, callType) {
    this.responseArray = [];
    this.callType = API_CALL_POPULAR;
    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        console.log(this.responseArray[0].results);
        this.renderPopular();


    } catch (err) {
        console.log('fetch failed', err);
    }
};

API.prototype.renderPopular = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    console.log(self.imgUrl);

    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Popular Movies</h2>');

    this.responseArray[0].results.forEach(function(item) {

        $(card).append('<h3>' + item.title + '</h3>');
        $(card).append('<label>Votes:</label><p>' + item.vote_count + '</p>');
        $(card).append('<label>Vote average:</label><p>' + item.vote_average + '</p>');
        $(card).append('<label>Overview:</label><p>' + item.overview + '</p>');
        $(card).append('<label>Popularity:</label><p>' + item.popularity + '</p>');
        $(card).append('<label>Release Date:</label><p>' + item.release_date + '</p>');
        $(card).append('<img src="' + self.imgUrl + item.backdrop_path + '">');
        console.log(self.imgUrl);
    })

    $(card).append('<hr>');
};
