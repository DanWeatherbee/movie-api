
/*
What are the highest rated movies rated R?

URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1

*/

var API_CALL_TV_POPULAR = new API(
    "https://api.themoviedb.org/3/tv/",
    "top_rated",
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3&language=en-US&page=1",
    "&",
    "format=json"
);
