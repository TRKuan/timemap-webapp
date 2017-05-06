import mapboxgl from 'mapbox-gl';

function setAccessToken() {
    let token = 'pk.eyJ1IjoidHJrdWFuIiwiYSI6ImNqMXlsYnE1ZjAwdHcyeHJxa3lrYWg2dHcifQ.tBkscd-d-S0Z374VcVw3Qg'; //TODO: get from server side
    mapboxgl.accessToken = token;
    return {
        type: '@MAP/SET_ACCESS_TOKEN',
        token
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

function setPinPosition(lngLat) {
    return {
        type: '@MAP/SET_Pin_POSITION',
        lngLat
    };
}

function setMap(map){
    return {
        type: '@MAP/SET_MAP',
        map
    };
}

export function initMap(){
    return (dispatch, getState) => {
        dispatch(setAccessToken());
        dispatch(getCurrentPositionStart());
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            dispatch(getCurrentPositionEnd({lng, lat}));
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: getState().map.currentPosition,
                zoom: 17
            });
            map.on('load', () => {
                //event points
                map.addSource('event-point', {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": []
                    }
                });
                map.addLayer({
                    "id": "event-point",
                    "source": "event-point",
                    "type": "circle",
                    "paint": {
                        "circle-radius": 10,
                        "circle-color": "#ee4a2d"
                    }
                });
                //current position
                map.addSource('current-position', {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [getState().map.currentPosition.lng, getState().map.currentPosition.lat]
                        }
                    }
                });
                map.addLayer({
                    "id": "current-position",
                    "source": "current-position",
                    "type": "circle",
                    "paint": {
                        "circle-radius": 10,
                        "circle-color": "rgb(63, 83, 217)"
                    }
                });
                //pin point
                map.addSource('pin-point', {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": []
                        }
                    }
                });
                map.addLayer({
                    "id": "pin-point",
                    "source": "pin-point",
                    "type": "circle",
                    "paint": {
                        "circle-radius": 10,
                        "circle-color": "rgb(6, 150, 64)"
                    }
                });

                map.on('click', (e) => {
                    dispatch(setPinPosition(e.lngLat));
                    let data = {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [e.lngLat.lng, e.lngLat.lat]
                        }
                    };
                    map.getSource('pin-point').setData(data);
                });
            });
            
            dispatch(setMap(map));
        });

    };
}
