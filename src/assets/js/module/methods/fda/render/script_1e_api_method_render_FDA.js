API.prototype.renderFDA = function(
    imgUrl,
    formattedHTMLHeader,
    formattedHTMLCardContent,
    formattedHTMLConsumer,
    formattedHTMLProduct,
    header
) {
dom.$loader.fadeIn();
    const self = this;
    dom.$content.html('');
    dom.$sectionAsideMenu.fadeOut();
    self.header = '<h2>FDA Food Search</h2><h4>Beta - Under Consruction.</h4>'
    dom.$content.append(self.header);

    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        dom.$err.hide();
        self.formattedHTMLHeader = '<br /><h4>Adverse Effects Report</h4><hr />';
        self.formattedHTMLCardContent = '<div><p>Consumer</p><span>Age: ' +
            this.responseArray[0].results[0].consumer.age + '  ' +
            this.responseArray[0].results[0].consumer.age_unit + ' | ' +
            this.responseArray[0].results[0].consumer.gender +
            '</span></div>';
        this.responseArray[0].results[0].products.forEach(function(item) {
            self.formattedHTMLProduct = '<div><p>Product</p><span><em class="yellow">Industry: </em>' +
                item.industry_name + ' | <em>Brand: </em>' +
                item.name_brand + ' | <em>Role: </em>' +
                item.role +
                '</span></div>';
        });
        self.formmatedHTMLReactions = '<p>Reactions</p>';
        dom.$content.append(
            self.formattedHTMLHeader +
            self.formattedHTMLCardContent +
            self.formattedHTMLProduct +
            self.formmatedHTMLReactions
        );
        this.responseArray[0].results[0].reactions.forEach(function(item) {
            dom.$content.append('<span>' + item + ' | </span>');
        });
    };
};

// Allow enter key vrs btn to call the API.
dom.$fdaSearch.on("keypress", function(e) {
    dom.$goFda.fadeIn();
});
dom.$loader.fadeOut();
