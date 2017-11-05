API.prototype.renderMovieVideos = function(

) {
    var self = this;
    console.log(this.callType);
    console.log(this.responseArray);

    var callerId = new API();
    this.responseArray[0].results.forEach(function(item) {
        callerId.idArray.push(item.id);
    });
    console.log(callerId.idArray);

    dom.$content.html('');
    dom.$sectionAsideMenu.fadeOut();
    if (this.responseArray[0].results === undefined) {
        alert('this.responseArray[0].results === undefined');
        return;
    } else {
        dom.$err.hide();

        // dom.$sectionAsideMenu.fadeIn();
        // dom.$asideControler.fadeIn();
        // dom.$asideMenu.html('');

        this.responseArray[0].results.forEach(function(item) {
            console.log(item);
        });
    };

};
