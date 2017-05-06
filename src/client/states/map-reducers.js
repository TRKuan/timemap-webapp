import mapboxgl from 'mapbox-gl';


const initMapState = {
    accessToken: '',
    currentPosition: {lng:122, lat:25},
    pinPosition: {lng:122, lat:25}
};

export function map(state = initMapState, action) {
    switch (action.type) {
    case '@MAP/SET_ACCESS_TOKEN':
        return{
            ...state,
            accessToken: action.token
        }
    case '@MAP/SET_CURRENT_POSITION':
        return {
            ...state,
            currentPosition: action.lngLat
        };
    case '@MAP/SET_Pin_POSITION':
        return{
            ...state,
            pinPosition: action.lngLat
        }
    default:
        return state;
    }
}
