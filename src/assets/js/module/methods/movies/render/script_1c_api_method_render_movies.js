API.prototype.renderMovies = function(
    imgUrl,
    formattedHTMLName,
    formattedHTMLPoster,
    formattedHTMLOverview,
    formattedHTMLVotes,
    formattedHTMLContent,
    formattedHTMLCollapseLink,
    role,
    roleLowerCase
) {
    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    dom.$content.html('');
    $('#section-aside-menu').fadeOut();
    if (this.responseArray[0].results === undefined) {
        alert('this.responseArray[0].results === undefined');
        return;
    } else {
        dom.$err.hide();
        this.responseArray[0].results.forEach(function(item) {
            if (item.title === undefined) {
                self.formattedHTMLName = '<h3 class="green caps">' +
                    item.name.replace(/\s/g, "-") +
                    '</h3>';
                self.role = item.name.replace(/\s/g, "-");
                self.roleLowerCase = self.role.toLowerCase();
            } else {
                self.formattedHTMLName = '<h3 class="green caps">' +
                    item.title.replace(/\s/g, "-") +
                    '</h3>';
                self.role = item.title.replace(/\s/g, "-");
                self.roleLowerCase = self.role.toLowerCase();
            };
            self.formattedHTMLCollapseLink = '<a class=' +
                '"btn btn-outline-info" ' +
                'id="btn-toggle-overview-' +
                self.roleLowerCase + '" ' +
                'data-toggle="collapse"' +
                ' href="#' +
                'item-overview-' +
                self.roleLowerCase + // target div to collapse
                '" aria-expanded="false" ' + // default closed
                'aria-controls="btn-toggle-overview-' +
                self.roleLowerCase + '">' + // collapse controler
                'Description' +
                '</a>';
            self.formattedHTMLPoster = '<img class="img-fluid img-thumbnail" id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';

            self.formattedHTMLOverview = '<p class="collapse" id="item-overview-' + self.roleLowerCase + '">' +
                item.overview +
                '</p>';
            if (item.release_date === undefined) {
                self.formattedHTMLVotes = '<span class="blue">Votes: ' +
                    item.vote_count + ' | Vote Average: ' +
                    item.vote_average +
                    '% | Air Date: ' +
                    item.first_air_date +
                    '</span>';
            } else {
                self.formattedHTMLVotes = '<span class="blue">Votes: ' +
                    item.vote_count + ' | Vote Average: ' +
                    item.vote_average +
                    '% | Air Date: ' +
                    item.release_date +
                    '</span>';
            };
            self.formattedHTMLContent = '<div class="row overview-padding">' +
                '<div class="col col-sm-10 shadow border overview-padding">' +
                self.formattedHTMLName +
                self.formattedHTMLCollapseLink + '<br />' +
                self.formattedHTMLOverview +
                self.formattedHTMLVotes +
                '</div>' +
                '<div class="col col-sm-2 center-block">' +
                self.formattedHTMLPoster +
                '</div>' +
                '</div>';
            dom.$content.append(self.formattedHTMLContent);
        })
    };
};