API.prototype.renderFDA = function(
    responseArray,
    imgUrl
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].results[0]);
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');
    $(card).append('<h2>FDA Drug Search</h2>');
    $(card).append('<h4>Beta - Under Consruction.</h4>');
    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        $(card).append('<br /><label>Company Number:</label><p>' +
            this.responseArray[0].results[0].companynumb +
            '</p>');
        $(card).append('<br /><label>Active Substance:</label><p>' +
            this.responseArray[0].results[0].patient.drug[0].activesubstance.activesubstancename +
            '</p>');
    };
};