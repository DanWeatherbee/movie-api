API.prototype.callSearch = async function() {
    'use strict';
    var self = this;
    dom.$err.hide();
    dom.$content.html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    console.log(dom.$fdaSearch.val());
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
    console.log(this.callType);
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
};

// Allow enter key vrs btn to call the API.
dom.$fdaSearch.on("keypress", function(e) {
    dom.$goFda.fadeIn();
    if (e.which == 13) {
        dom.$goFda.click();
        dom.$goFda.fadeToggle(300);
    }
});