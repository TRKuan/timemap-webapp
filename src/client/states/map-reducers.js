import mapboxgl from 'mapbox-gl';
const initMapState = {
    map: null,
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
    case '@MAP/GET_CURRENT_POSITION_START':
        return{
            ...state
        }
    case '@MAP/GET_CURRENT_POSITION_END':
        return {
            ...state,
            currentPosition: action.lngLat
        };
    case '@MAP/SET_Pin_POSITION':
        return{
            ...state,
            pinPosition: action.lngLat
        }
    case '@MAP/SET_MAP':
        return{
            ...state,
            map: action.map
        }
    default:
        return state;
    }
}
