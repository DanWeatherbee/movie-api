API.prototype.renderMovies = function(
    responseArray,
    imgUrl,
    card,
    formattedHTMLName,
    formattedHTMLPoster,
    formattedHTMLOverview,
    formattedHTMLVotes,
    formattedHTMLContainer,
    content
) {
    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    self.formattedHTMLContainer = '<div id="movie-container"></div>';
    self.content = $('#content');
    self.content.html('');
    self.content.append(self.formattedHTMLContainer);
    self.card = $('#movie-container');

    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        $('#error-msg').hide();

        this.responseArray[0].results.forEach(function(item) {
            if (item.title === undefined) {
                self.formattedHTMLName = '<h3 class="green caps">' + item.name + '</h3>';
            } else {
                self.formattedHTMLName = '<h3 class="green caps">' + item.title + '</h3>';
            };
            self.formattedHTMLPoster = '<img id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';
            self.formattedHTMLOverview = '<p id="item-overview">' +
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

            self.card.append(
                '<div class="row overview-padding">' +
                '<div class="col-sm-8 shadow border overview-padding">' +
                self.formattedHTMLName +
                self.formattedHTMLOverview +
                self.formattedHTMLVotes +
                '</div>' +
                '<div class="col-sm-4 center-block">' +
                self.formattedHTMLPoster +
                '</div>' +
                '</div>'
            );
        })
    };
};