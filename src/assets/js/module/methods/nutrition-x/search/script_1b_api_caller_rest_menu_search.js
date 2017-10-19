API.prototype.callSearchRest = async function(
) {
    'use strict';
    var self = this;
    $('#error-msg').hide();
    dom.$content.html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");

    var KEY = "appId=ffa2c4b5&appKey=b9914a3ffda1ac8218e155c05cb52409";
    var API_RESTERAUNT_MENU = new API(
        "https://api.nutritionix.com/v1_1/search/",
        dom.$restMenuSearch.val(),
        "?results=0:50&fields=item_name,brand_name,item_id,nf_calories&",
        KEY,
        "&",
        "format=json"
    );
    this.responseArray = [];
    this.callType = API_RESTERAUNT_MENU;
    console.log(this.callType);
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
dom.$restMenuSearch.on("keypress", function(e) {
    dom.$goRest.show();
    if (e.which == 13) {
        dom.$goRest.click();
        dom.$goRest.hide();
    }
});