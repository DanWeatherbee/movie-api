        Bootstrap V4 Beta Example

                self.formattedHTMLCollapseLink = '<a class=' +
                    '"btn btn-primary" ' +
                    'data-toggle="collapse"' +
                    ' href="#' +
                    'root' + // target div to collapse
                    '" aria-expanded="false" ' + // default closed
                    'aria-controls="root">' + // collapse controler
                    'Collapse' +
                    '</a>';

                    <a class="btn btn-outline-info" id="" data-toggle="collapse" href="#" aria-expanded="false" aria-controls=""></a>

                    $('#artists-list').append(self.formattedHTMLCollapseLink);

                self.formattedHTMLCollapseButton = '<button class=' +
                    '"btn btn-primary" ' +
                    'type="button" ' +
                    'data-toggle="collapse" ' +
                    'data-target="#collapseExample" ' + // target div to collapse
                    'aria-expanded="false" ' + // default closed
                    'aria-controls="collapseExample">' + // collapse controler
                    '</button>'