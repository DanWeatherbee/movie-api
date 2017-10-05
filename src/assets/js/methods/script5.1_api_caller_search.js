API.prototype.callSearch = async function(
    response,
    responseArray,
    callType
) {
    'use strict';
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    var txt = $("#calltype option:selected").text();
    console.log(txt);
    var caller;
    // Determine call type. e.g. caller = API_CALL_MOVIES_THEATERS
                // code here
    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.

    } catch (err) {
        console.log('fetch failed', err);
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");
};