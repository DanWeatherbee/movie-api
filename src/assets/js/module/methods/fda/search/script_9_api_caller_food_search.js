API.prototype.callSearch = async function() {
    'use strict';

    var self = this;
    dom.$loader.fadeIn();
    dom.$err.hide();
    dom.$content.html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    var API_FOOD_SEARCH = new API(
        "https://api.fda.gov/",
        "food/event.json?",
        "api_key=",
        KEY,
        "&search=",
        dom.$fdaSearch.val()
    );
    this.responseArray = [];
    this.callType = API_FOOD_SEARCH;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.
        this.renderFDA();
    } catch (err) {
        console.log('fetch failed', err);
        dom.$err.show();
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");
    dom.$loader.fadeOut();
};