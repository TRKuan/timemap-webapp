export function setAccessToken() {
    let token = 'pk.eyJ1IjoidHJrdWFuIiwiYSI6ImNqMXlsYnE1ZjAwdHcyeHJxa3lrYWg2dHcifQ.tBkscd-d-S0Z374VcVw3Qg'; //TODO: get from server side
    return {
        type: '@MAP/SET_ACCESS_TOKEN',
        token
    };
}

export function setCurrentPosition(lngLat) {
    return {
        type: '@MAP/SET_CURRENT_POSITION',
        lngLat
    };
}

export function initMap() {
    return {
        type: '@MAP/INIT_MAP'
    };
}

export function setPinPosition(lngLat) {
    return {
        type: '@MAP/SET_Pin_POSITION',
        lngLat
    };
}
