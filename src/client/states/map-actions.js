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

function updateCurrentPosition(lngLat){
    return {
        type: '@MAP/UPDATE_CURRENT_POSITION',
        lngLat
    };
}

function watchCurrentPositionStart(watchID){
    return {
        type: '@MAP/WATCH_CURRENT_POSITION_START',
        watchID
    };
}

function watchCurrentPosition(){
    return (dispatch, getState) => {
        navigator.geolocation.clearWatch(getState().map.watchID);
        let watchID = navigator.geolocation.watchPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            dispatch(updateCurrentPosition({lng, lat}));
        }, () => {
            console.error("watchPosition error");
        });
        dispatch(watchCurrentPositionStart(watchID));
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
                dispatch(watchCurrentPosition());
                resolve({lng, lat});
            }, (error) => reject(error));
        });
    };
}

export function setPinPosition(lngLat) {
    return {
        type: '@MAP/SET_PIN_POSITION',
        lngLat
    };
}
