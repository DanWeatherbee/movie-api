API.prototype.callSearchMovieVideos = async function() {
    'use strict';
    var self = this;
    var dom = new DOM_OBJ_ELEM();
    dom.$loader.fadeIn();
    dom.$err.hide();
    dom.$content.html('');
    var StartTimeMs = Date.now();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    this.responseArray = [];
    // this.callType = API_CALL_MOVIE_VIDEOS;
    console.log(this.callType);
    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        console.log('this.responseArray line 32 video search.');
        console.log(this.responseArray[0]['videos'].results[0].id);
        // Determine method to call. e.g. renderFDA();
        // code here.
        // this.callSearchMovieVideos();
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