import axios from 'axios';
const baseUrl = 'http://localhost:8080/api';//url for server
export function getDirection(coords1, coords2, profile, accessToken){
    const directionURL = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coords1.lng},${coords1.lat};${coords2.lng},${coords2.lat}.json?access_token=${accessToken}`;
    console.log(`Making GET request to: ${directionURL}`);
    return axios.get(directionURL).then((res) => {
        if(res.data.code !== "Ok")throw Error("Mapbox Direaction error");
        return {
            duration: res.data.routes[0].duration,
            distance: res.data.routes[0].distance
        };
    }).
    catch((err) => {
        if (axios.isCancel(err)) {
            console.error(err.message, err);
        } else {
            throw err;
        }
    });
}

export function getAccessToken() {
    let url = `${baseUrl}/accesstoken`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
