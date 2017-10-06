API.prototype.callSearch = async function(
    response,
    responseArray,
    callType
) {
    'use strict';
    $('#error-msg').hide();
    $('.content').html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    var txt = $("#fda-search").val();
    console.log(txt);
    var caller;
    // Determine call type. e.g. caller = API_CALL_MOVIES_THEATERS
    // code here

    var API_FOOD_SEARCH = new API(
        "https://api.fda.gov/",
        "food/event.json?",
        "api_key=",
        KEY,
        "&search=",
        txt
    );

    caller = API_FOOD_SEARCH;
    console.log(API_FOOD_SEARCH);

    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.
        this.renderFDA();
    } catch (err) {
        console.log('fetch failed', err);

        $('#error-msg').show();
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");
};