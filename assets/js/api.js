'use strict';

const api_key = 'a58829bee1dfcfbcb3d0a27d11ebd44e'
const imageBaseURL = 'https://image.tmdb.org/t/p/'

// fetch data from a server using 'url' and passes the result in json data to a 'callback' function along with an optimal parameter if has 'optional param'

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer};