
/*
http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json
*/
var KEY = "&api_key=16cd9cf83f2037a4941ca1c74686a557";
var query = "chart.gettopartists";
var API_FM = new API(
    "http://ws.audioscrobbler.com/2.0/?",
    "method=",
    query,
    KEY,
    "&",
    "format=json"
);
