//Model

var API = function(
    prefix,
    request,
    q,
    k,
    amp,
    format,
    responseArray,
    callType,
    idArray
) {
    'use strict';
    this.prefix = prefix;
    this.request = request;
    this.q = q;
    this.k = k;
    this.amp = amp;
    this.format = format;
    this.url = this.prefix + this.request + this.q + this.k + this.amp + this.format;
    this.responseArray = [];
    this.callType = callType;
    this.idArray = [];
};