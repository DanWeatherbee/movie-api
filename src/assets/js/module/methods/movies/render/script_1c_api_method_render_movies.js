API.prototype.renderMovies = function(
    responseArray,
    imgUrl,
    card,
    formattedHTMLName,
    formattedHTMLPoster,
    formattedHTMLOverview,
    formattedHTMLVotes,
    formattedHTMLContainer,
    content,
    formattedHTMLContent,
    formattedHTMLCollapseLink,
    role
) {
    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    self.formattedHTMLContainer = '<div id="movie-container"></div>';
    self.content = $('#content');
    self.content.html('');
    $('#menu-list').remove();
    self.content.append(self.formattedHTMLContainer);
    self.card = $('#movie-container');


    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        $('#error-msg').hide();

        this.responseArray[0].results.forEach(function(item) {
            if (item.title === undefined) {
                self.formattedHTMLName = '<h3 class="green caps">' +
                    item.name.replace(/\s/g, "-") +
                    '</h3>';
                    self.role = item.name.replace(/\s/g, "-");
            } else {
                self.formattedHTMLName = '<h3 class="green caps">' +
                    item.title.replace(/\s/g, "-") +
                    '</h3>';
                    self.role = item.title.replace(/\s/g, "-");
            };
            self.formattedHTMLCollapseLink = '<a class=' +
                '"btn btn-outline-info" ' +
                'id="btn-toggle-overview-' + self.role + '" ' +
                'data-toggle="collapse"' +
                ' href="#' +
                'item-overview-' + self.role + // target div to collapse
                '" aria-expanded="false" ' + // default closed
                'aria-controls="btn-toggle-overview-' + self.role + '">' + // collapse controler
                'Description' +
                '</a>';
            self.formattedHTMLPoster = '<img class="img-fluid img-thumbnail" id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';

            self.formattedHTMLOverview = '<p class="collapse" id="item-overview-' + self.role + '">' +
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
            self.card.append(self.formattedHTMLContent);
        })
    };
};