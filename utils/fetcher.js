import axios from 'axios';
var fetcher = function (url) {
    return axios
        .get(url, {
        withCredentials: true,
    })
        .then(function (response) { return response.data; });
};
export default fetcher;
//# sourceMappingURL=fetcher.js.map