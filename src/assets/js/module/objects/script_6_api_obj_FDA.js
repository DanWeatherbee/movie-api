
/*

Using your API key
Your API key should be passed to the API as the value of the api_key parameter. Include it before other parameters, such as the search parameter. For example:

https://api.fda.gov/drug/event.json?api_key=yourAPIKeyHere&search=...
https://api.fda.gov/food/event.json
*/
var KEY = "QkObiIV92ifvZIbtHFevB6QULgkmp9RW7oUljfe6";
var API_FDA = new API(
    "https://api.fda.gov/",
    "food/event.json?",
    "api_key=",
    KEY,
    "&search=",
    "cereal"
);
