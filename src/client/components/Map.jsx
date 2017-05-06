import React from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

import {setAccessToken, setCurrentPosition, setPinPosition} from 'states/map-actions.js';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount(){
        //get current position
        navigator.geolocation.getCurrentPosition((position) => {
            // called back asynchronously
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            this.props.dispatch(setCurrentPosition({lng, lat}));
            this.props.dispatch(setAccessToken());
            this.initMap();
        });
    }

    componentWillReceiveProps(nextProps){
        //currentPosition changed
        if(nextProps.currentPosition !== this.props.currentPosition){
            if(this.map)
                this.map.flyTo({
                    center: nextProps.currentPosition
                });
        }
    }

    render() {
        return (
            <div id="map"></div>
        );
    }

    initMap(){
        mapboxgl.accessToken = this.props.accessToken;
        console.log(this.props.currentPosition);
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: this.props.currentPosition,
            zoom: 17
        });
        this.map.on('load', () => {
            //event points
            this.map.addSource('event-point', {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": []
                }
            });
            this.map.addLayer({
                "id": "event-point",
                "source": "event-point",
                "type": "circle",
                "paint": {
                    "circle-radius": 10,
                    "circle-color": "#ee4a2d"
                }
            });
            //current position
            this.map.addSource('current-position', {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [this.props.currentPosition.lng, this.props.currentPosition.lat]
                    }
                }
            });
            this.map.addLayer({
                "id": "current-position",
                "source": "current-position",
                "type": "circle",
                "paint": {
                    "circle-radius": 10,
                    "circle-color": "rgb(63, 83, 217)"
                }
            });
            //pin point
            this.map.addSource('pin-point', {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": []
                    }
                }
            });
            this.map.addLayer({
                "id": "pin-point",
                "source": "pin-point",
                "type": "circle",
                "paint": {
                    "circle-radius": 10,
                    "circle-color": "rgb(6, 150, 64)"
                }
            });

            this.map.on('click', (e) => {
                this.props.dispatch(setPinPosition(e.lngLat));
                let data = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [e.lngLat.lng, e.lngLat.lat]
                    }
                };
                this.map.getSource('pin-point').setData(data);
            });
        });
    }
}

export default connect((state) => {
    return {
        ...state.map,
        ...state.calendar
    };
})(Map);
