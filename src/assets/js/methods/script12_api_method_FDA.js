API.prototype.renderFDA = function(
    card,
    content,
    responseArray,
    imgUrl,
    formattedHTMLHeader,
    formattedHTMLCardContent,
    formattedHTMLConsumer
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].results[0]);
    self.content = $('.content');
    self.content.html('');
    self.content.append('<div class="container" id="movie-container"></div>');
    self.card = $('#movie-container');
    self.card.append('<h2>FDA Food Search</h2>');
    self.card.append('<h4>Beta - Under Consruction.</h4>');
    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        self.formattedHTMLHeader = '<br /><label>Adverse Effects Report -query = bread</label><hr />';
        self.card.append(self.formattedHTMLHeader);

        self.formattedHTMLCardContent = '<div><p class="green">Consumer</p><span>Age: ' +
            this.responseArray[0].results[0].consumer.age + '  ' +
            this.responseArray[0].results[0].consumer.age_unit + ' | ' +
            this.responseArray[0].results[0].consumer.gender +
            '</span></div>';
        self.card.append(self.formattedHTMLCardContent);

        this.responseArray[0].results[0].products.forEach(function(item) {

            self.card.append(
                '<div><p class="green">Product</p><span><em class="yellow">Industry: </em>' +
                item.industry_name + ' | <em class="yellow">Brand: </em>' +
                item.name_brand + ' | <em class="yellow">Role: </em>' +
                item.role +
                '</span></div>'
            );

        });
        self.card.append('<p class="green">Reactions</p>');
        this.responseArray[0].results[0].reactions.forEach(function(item) {
            self.card.append('<span class="red">' + item + ' | </span>');
        });

    };
};