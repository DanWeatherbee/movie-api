API.prototype.callSearchYouTube = async function(
    response,
    responseArray,
    callType
) {
    'use strict';
    var self = this;

    $('#error-msg').hide();
    $('.content').html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    // var txt = $("#fda-search").val();
    // console.log(txt);
    var caller;
    // Determine call type. e.g. caller = API_CALL_MOVIES_THEATERS
    // code here

    var KEY = "&key=AIzaSyBTi0oe7u39BGm7WSXc45MJ99p06hO5Sng";
    var artistName = "Cold Play";

    var API_YOU_TUBE_SEARCH = new API(
        "https://www.googleapis.com/youtube/v3/search?",
        "part=snippet&q=",
        artistName,
        KEY,
        "&",
        "format=json"
    );

    caller = API_YOU_TUBE_SEARCH;
    console.log(API_YOU_TUBE_SEARCH);

    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.
        this.renderYouTube();
    } catch (err) {
        console.log('fetch failed', err);

        $('#error-msg').show();
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");

};

// Test
API_CALL_POPULAR.callSearchYouTube();