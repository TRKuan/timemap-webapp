import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

export function addEvent(event) {
    let url = `${baseUrl}/events`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        ...event
    }).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}