API.prototype.callSearchYouTube = async function() {
    'use strict';
    var self = this;
    dom.$loader.fadeIn();
    dom.$err.hide();
    dom.$content.html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    var artistName = $("#video-search").val();
    var KEY = "&key=AIzaSyBTi0oe7u39BGm7WSXc45MJ99p06hO5Sng";
    var API_YOU_TUBE_SEARCH = new API(
        "https://www.googleapis.com/youtube/v3/search?",
        "part=snippet&q=",
        artistName,
        KEY,
        "&",
        "format=json"
    );
    this.responseArray = [];
    this.callType = API_YOU_TUBE_SEARCH;
    // Determine call type. e.g.  self.callType = API_CALL_MOVIES_THEATERS
    // code here
    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call. e.g. renderFDA();
        // code here.
        this.renderYouTube();
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
