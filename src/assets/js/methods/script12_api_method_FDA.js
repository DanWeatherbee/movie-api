API.prototype.renderFDA = function(
    card,
    responseArray,
    imgUrl
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].results[0]);
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    this.card = $('#movie-container');
    this.card.append('<h2>FDA Food Search</h2>');
    this.card.append('<h4>Beta - Under Consruction.</h4>');
    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        this.card.append('<br /><label>Adverse Effects Report -query = milk</label><hr />');
        this.card.append('<span>' +
            this.responseArray[0].results[0].consumer.age + '  ' +
            this.responseArray[0].results[0].consumer.age_unit + ' | ' +
            this.responseArray[0].results[0].consumer.gender + ' | ' +
            this.responseArray[0].results[0].products[0].industry_name + ' | ' +
            this.responseArray[0].results[0].products[0].name_brand + ' | ' +
            this.responseArray[0].results[0].products[0].role + ' | ' +
            this.responseArray[0].results[0].reactions[0] + ' | ' +
            this.responseArray[0].results[0].reactions[1] + ' | ' +
            '</span>');
    };
};