import axios from 'axios';

const Api = axios.create({
    baseURL: "http://www.giantbomb.com", headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, X-Requested-With, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
    }, params: {
        api_key: "74a14e64972c784c9e0427eb4bd8d5831a357911", format: "json", limit: 12
    }, responseType: "json",
    insecureHTTPParser: true
});

export default Api;
