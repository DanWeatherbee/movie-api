
/*

https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=APPID&appKey=APPKEY


https://trackapi.nutritionix.com/v2/locations?api_key=KEY

*/
var KEY = "appId=ffa2c4b5&appKey=b9914a3ffda1ac8218e155c05cb52409";
var API_RESAURANT_LOCATIONS = new API(
    "https://api.nutritionix.com/v1_1/search/",
    "tim hortons",
    "?results=0:50&fields=item_name,brand_name,item_id,nf_calories&",
    KEY,
    "&",
    "format=json"
);
