import React from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

import {getAccessToken, getCurrentPosition, setPinPosition} from 'states/map-actions.js';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        this.initMap();//so the map can find the container
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.events!==this.props.events){
            this.updateEventPoints(nextProps.events);
            this.removePinPoint();
        }
    }

    render() {
        return (
            <div id="map"></div>
        );
    }

    initMap() {
        this.props.dispatch(getCurrentPosition()).then(() => {
            this.props.dispatch(getAccessToken()).then(() => {
                this.createMap();
            });
        });
    }

    createMap() {
        mapboxgl.accessToken = this.props.accessToken;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: this.props.currentPosition,
            zoom: 17
        });
        this.map.on('load', () => {
            this.initEventPoints();
            this.initCurrentPosition();
            this.initPinPoint();
            this.map.on('click', (e) => {
                this.setPinPosition(e.lngLat);
            });
        });
    }

    initEventPoints(){
        //event points
        this.map.addSource('event-points', {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": []
            }
        });
        this.map.addLayer({
            "id": "event-points",
            "source": "event-points",
            "type": "circle",
            "paint": {
                "circle-radius": 10,
                "circle-color": "#ee4a2d"
            }
        });
    }

    updateEventPoints(events){
        let features = [];
        for(const event of events){
            let feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [event.geolocation.lng, event.geolocation.lat]
                }
            };
            features.push(feature);
        }
        let data = this.map.getSource('event-points')._data;
        data.features = features;
        this.map.getSource('event-points').setData(data);
    }


    initCurrentPosition(){
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
    }

    initPinPoint(){
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
    }
    setPinPosition(lngLat){
        this.props.dispatch(setPinPosition(lngLat));
        let data = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [lngLat.lng, lngLat.lat]
            }
        };
        this.map.getSource('pin-point').setData(data);
    }

    removePinPoint(){
        let data = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": []
            }
        };
        this.map.getSource('pin-point').setData(data);
    }

}

export default connect((state) => {
    return {
        ...state.calendar,
        ...state.map
    };
})(Map);
