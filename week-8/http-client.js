//Title: http-client.js
//Author: Kayla McDanel
//Date: 7/15/22
//Description: JS file that contains the http client

export class HttpClient {
    async get(url, params = '') {
        let url = new URL(url);

        let params = new URLSearchParams(params);
        url.search = params

        const res = await fetch(url.toString(), {
            method: "GET",
        })

        return res.json();
    }
}

