API.prototype.renderFDA = function(
    card,
    content,
    responseArray,
    imgUrl,
    formattedHTMLHeader,
    formattedHTMLCardContent,
    formattedHTMLConsumer,
    formattedHTMLProduct,
    header
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].results[0]);
    self.content = $('#content');
    self.content.html('');
    self.content.append('<div id="movie-container"></div>');
    self.card = $('#movie-container');
    self.header = '<h2>FDA Food Search</h2><h4>Beta - Under Consruction.</h4>'
    self.card.append(self.header);

    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        self.formattedHTMLHeader = '<br /><h4>Adverse Effects Report</h4><hr />';
        self.card.append(self.formattedHTMLHeader);

        self.formattedHTMLCardContent = '<div><p>Consumer</p><span>Age: ' +
            this.responseArray[0].results[0].consumer.age + '  ' +
            this.responseArray[0].results[0].consumer.age_unit + ' | ' +
            this.responseArray[0].results[0].consumer.gender +
            '</span></div>';
        self.card.append(self.formattedHTMLCardContent);

        this.responseArray[0].results[0].products.forEach(function(item) {
            self.formattedHTMLProduct = '<div><p>Product</p><span><em class="yellow">Industry: </em>' +
                item.industry_name + ' | <em>Brand: </em>' +
                item.name_brand + ' | <em>Role: </em>' +
                item.role +
                '</span></div>';

            self.card.append(self.formattedHTMLProduct);

        });
        self.card.append('<p>Reactions</p>');
        this.responseArray[0].results[0].reactions.forEach(function(item) {
            self.card.append('<span>' + item + ' | </span>');
        });

    };
};