API.prototype.call = async function() {
    'use strict';
    var StartTimeMs = Date.now();
    // TODO add this new spinner to dom  model and other caller methods.
    dom.$loader.fadeIn();
    console.log("Start Execution Time Caller Method - " + StartTimeMs + " Milliseconds");
    var txt = $("#calltype option:selected").text();
    switch (txt) {
        //Statements executed when the result of expression matches latest.
        // ...method to be performed.
        case "Choose Call Type":
            if (txt === "Choose Call Type") {
                return;
            }
            break;
        case "Movies in Theaters":
            if (txt === "Movies in Theaters") {
                this.callType = API_CALL_MOVIES_THEATERS;
            }
            break;
        case "Popular Tv":
            if (txt === "Popular Tv") {
                this.callType = API_CALL_TV_POPULAR;
            }
            break;
        case "Top Artists":
            if (txt === "Top Artists") {
                this.callType = API_FM;
            }
            break;

        default:
            //Statements executed when none of the values match the value of the expression.
            alert("option not hooked up.");
            break;
    }
    this.responseArray = [];
    console.log(this.callType);
    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call.
        switch (txt) {
            case "Movies in Theaters":
                this.renderMovies();
                break;
            case "Popular Tv":
                this.renderMovies();
                break;
            case "Top Artists":
                this.renderFM();
                break;

            default:
                //Statements executed when none of the values match the value of the expression.
                alert("call back not hooked up.");
                break;
        }
    } catch (err) {
        console.log('fetch failed', err);
        dom.$loader.fadeOut();
        dom.$err.show();
    }
    var EndTimeMs = Date.now();
    console.log("End Execution Time Caller Method - " + EndTimeMs + " Milliseconds");
    var TotalTime = EndTimeMs - StartTimeMs;
    console.log("Total Execution Time Caller Method - " + TotalTime + " Milliseconds");
    dom.$loader.fadeOut();
};
