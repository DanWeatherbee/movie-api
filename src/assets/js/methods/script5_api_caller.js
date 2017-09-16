API.prototype.call = async function(response, responseArray, callType) {
        var txt = $("#calltype option:selected").text();
        console.log(txt);
        var caller;
        // Determine call type.
        switch (txt) {
            case "Latest Movies":
            //Statements executed when the result of expression matches latest.
            // ...method to be performed.
            if(txt == "Latest Movies") {
            caller = API_CALL_LATEST;
            }
            break;
            case "Popular Movies":
            if(txt == "Popular Movies") {
            caller = API_CALL_POPULAR;
            }
            break;
            case "Search by ID":
            if(txt == "Search by ID") {
            caller = API_CALL_ID;
            }
            break;
            case "Latest Tv":
            if (txt == "Latest Tv") {
            caller = API_CALL_LATEST_TV;
            }
            break;

            default:
            //Statements executed when none of the values match the value of the expression.
            alert("option not hooked up.");
            break;
        }
    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);
        // Determine method to call.
        switch (txt) {
            case "Latest Movies":
            this.renderLatest();
            break;
            case "Popular Movies":
            this.renderPopular();
            break;
            case "Search by ID":
            this.renderID();
            break;
            case "Latest Tv":
            this.renderLatestTv();
            break;

            default:
            //Statements executed when none of the values match the value of the expression.
            alert("call back not hooked up.");
            break;
        }
    } catch (err) {
        console.log('fetch failed', err);
    }
};