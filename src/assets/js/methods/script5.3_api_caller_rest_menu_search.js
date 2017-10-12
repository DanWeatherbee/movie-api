API.prototype.callSearchRest = async function(
    response,
    responseArray,
    callType,
    searchInput
) {
    'use strict';
    var self = this;
    $('#error-msg').hide();
    $('#content').html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    self.searchInput = $("#rest-menu-search");
    var txt = self.searchInput.val();
    console.log(txt);

    var caller;
    /*
    Determine call type. e.g. caller = API_CALL_MOVIES_THEATERS
    Instantiate new object.
    code goes here;
    */
var KEY = "appId=ffa2c4b5&appKey=b9914a3ffda1ac8218e155c05cb52409";


var API_RESTERAUNT_MENU = new API(
    "https://api.nutritionix.com/v1_1/search/",
    txt,
    "?results=0:50&fields=item_name,brand_name,item_id,nf_calories&",
    KEY,
    "&",
    "format=json"
);

    caller = API_RESTERAUNT_MENU;
    console.log(API_RESTERAUNT_MENU);

    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.
        this.renderNutritionRestMenu();
    } catch (err) {
        console.log('fetch failed', err);

        $('#error-msg').show();
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");
};


// Allow enter key vrs btn to call the API.
$("#rest-menu-search").on("keypress", function(e) {
    $("#go-rest").show();
    if (e.which == 13) {
        $("#go-rest").click();
        $("#go-rest").hide();
    }
});
