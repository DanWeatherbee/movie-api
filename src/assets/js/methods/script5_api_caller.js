API.prototype.call = async function(response, responseArray, callType) {
        var txt = $("#calltype option:selected").text();
        console.log(txt);
        var caller;
        // Determine call type.
        switch (txt) {
            case "latest":
            //Statements executed when the result of expression matches latest.
            // ...method to be performed.
            if(txt == "latest") {
            caller = API_CALL_LATEST;
            }
            break;
            case "popular":
            if(txt == "popular") {
            caller = API_CALL_POPULAR;
            }
            break;
            case "id":
            if(txt == "id") {
            caller = API_CALL_ID;
            }
            break;

            default:
            //Statements executed when none of the values match the value of the expression.
            alert("not hooked up.");
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
            case "latest":
            this.renderLatest();
            break;
            case "popular":
            this.renderPopular();
            break;
            case "id":
            this.renderID();
            break;

            default:
            //Statements executed when none of the values match the value of the expression.
            alert("not hooked up.");
            break;
        }
    } catch (err) {
        console.log('fetch failed', err);
    }
};