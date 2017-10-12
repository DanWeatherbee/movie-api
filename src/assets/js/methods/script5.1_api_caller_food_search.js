API.prototype.callSearch = async function(
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
    self.searchInput = $("#fda-search");
    var txt = self.searchInput.val();
    console.log(txt);

    var caller;
    /*
    Determine call type. e.g. caller = API_CALL_MOVIES_THEATERS
    Instantiate new object.
    code goes here;
    */
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


// Allow enter key vrs btn to call the API.
$("#fda-search").on("keypress", function(e) {
    $("#go").show();
    if (e.which == 13) {
        $("#go").click();
        $("#go").hide();
    }
});