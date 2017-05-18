import React from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

import {setPinPosition} from 'states/map-actions.js';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        while(!this.props.accessToken){

        }
        this.initMap();
    }

    componentWillUnmount(){
        if(this.map)
            this.map.remove();
    }

    componentWillReceiveProps(nextProps){
        //if(nextProps.events!==this.props.events){
        //    this.updateEventPoints(nextProps.events);
        //    this.removePinPoint();
        //}
        if(nextProps.currentPosition!==this.props.currentPosition){
            if(this.map)
                this.updateCurrentPosition(nextProps.currentPosition);
        }
        if(nextProps.nextEvent!==this.props.nextEvent){
            try{
                this.direction.setDestination([this.props.nextEvent.lng, this.props.nextEvent.lat]);
            }catch(error){
                console.error(error);
            }
        }
    }

    render() {
        return (
            <div id={this.props.id} style={{height: "100%", width: "100%"}}></div>
        );
    }

    initMap() {

        if(this.props.currentPosition)
            this.createMap(this.props.currentPosition);
        else
            this.createMap({lng: 120.9917471227813, lat: 24.79567369463787});

    }

    createMap(center) {
        mapboxgl.accessToken = this.props.accessToken;
        this.map = new mapboxgl.Map({
            container: this.props.id,
            style: 'mapbox://styles/mapbox/streets-v9',
            center,
            zoom: 17
        });
        this.geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken
        });
        this.map.addControl(this.geocoder);
        try{
            this.direction = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                interactive: false,
                profile: this.props.nextEvent.trans,
                unit: "metric",
                controls: {
                    inputs: false,
                    instructions: false
                }
            });
            if(this.props.showRoute)
                this.map.addControl(this.direction, 'top-left');
        }catch(error){
            console.error(error);
        }

        this.map.on('load', () => {
            try{
                this.direction.setOrigin([this.props.currentPosition.lng, this.props.currentPosition.lat]);
                if(this.props.nextEvent.lat)this.direction.setDestination([this.props.nextEvent.lng, this.props.nextEvent.lat]);
            }catch(error){
                console.error(error);
            }
            //this.initEventPoints();
            try{
                this.initCurrentPosition();
            }catch(err){
                console.error("init current position failed in map: " + err.message);
            }
            if(this.props.pinnable){
                this.initPinPoint();
                this.map.on('click', (e) => {
                    this.setPinPosition(e.lngLat);
                });
            }

            //this.updateEventPoints(this.props.events);
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
        if(!this.map)return;
        let features = [];
        for(const event of events){
            if(!event.lng||!event.lat)continue;
            let feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [event.lng, event.lat]
                }
            };
            features.push(feature);
        }
        let data = this.map.getSource('event-points')._data;
        data.features = features;
        this.map.getSource('event-points').setData(data);
    }


    initCurrentPosition(){
        let coordinates = [];
        if(this.props.currentPosition)coordinates = [this.props.currentPosition.lng, this.props.currentPosition.lat];
        //current position
        this.map.addSource('current-position', {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    coordinates
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

    updateCurrentPosition(lngLat){
        if(!lngLat||!this.map)return;
        if(!this.map)return;
        let data = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [lngLat.lng, lngLat.lat]
            }
        };
        try{
            this.map.getSource('current-position').setData(data);
        }catch(err){

        }
        //this.map.panTo(lngLat);
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
        if(!lngLat)return;
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
