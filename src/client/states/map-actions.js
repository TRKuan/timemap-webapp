function getAccessTokenStart(){
    return {
        type: '@MAP/GET_ACCESS_TOKEN_START'
    };
}

function getAccessTokenEnd(token){
    return {
        type: '@MAP/GET_ACCESS_TOKEN_END',
        token
    };
}

export function getAccessToken() {
    return (dispatch) => {
        dispatch(getAccessTokenStart());
        return new Promise((resolve, reject) => {
            let token = 'pk.eyJ1IjoidHJrdWFuIiwiYSI6ImNqMXlsYnE1ZjAwdHcyeHJxa3lrYWg2dHcifQ.tBkscd-d-S0Z374VcVw3Qg'; //TODO: get from server side
            dispatch(getAccessTokenEnd(token));
            resolve();
        });
    };
}

function getCurrentPositionStart(){
    return {
        type: '@MAP/GET_CURRENT_POSITION_START',
    };
}

function getCurrentPositionEnd(lngLat) {
    return {
        type: '@MAP/GET_CURRENT_POSITION_END',
        lngLat
    };
}

export function getCurrentPosition(){
    return (dispatch) => {
        dispatch(getCurrentPositionStart());
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                dispatch(getCurrentPositionEnd({lng, lat}));
                resolve();
            });
        });
    };
}

export function setPinPosition(lngLat) {
    return {
        type: '@MAP/SET_PIN_POSITION',
        lngLat
    };
}
