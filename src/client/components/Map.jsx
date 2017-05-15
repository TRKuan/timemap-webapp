import React from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

import {getAccessToken, getCurrentPosition, setPinPosition, clearWatchPosition} from 'states/map-actions.js';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        try{
            this.initMap();//so the map can find the container
        }catch (err){
            console.error("Can't init map\n" + err);
        }
    }

    componentWillUnmount(){
        this.props.dispatch(clearWatchPosition());
        if(this.map)
            this.map.remove();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.events!==this.props.events){
            this.updateEventPoints(nextProps.events);
            this.removePinPoint();
        }
        if(nextProps.currentPosition!==this.props.currentPosition){
            if(this.map)
                this.updateCurrentPosition(nextProps.currentPosition);
        }
    }

    render() {
        return (
            <div id="map"></div>
        );
    }

    initMap() {
        this.props.dispatch(getAccessToken()).then(() => {
            this.props.dispatch(getCurrentPosition()).
            catch((err) => {
                console.error("get current position faild: " + err.message);
            }).
            then(() => {
                this.createMap(this.props.currentPosition);
            }).
            catch((err) => {
                console.error("creat map faild: " + err.message);
            });
        }).
        catch((err) => console.error("get AccessToken faild: "+ err.message));
    }

    createMap(center) {
        mapboxgl.accessToken = this.props.accessToken;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center,
            zoom: 17
        });
        this.map.on('load', () => {
            this.initEventPoints();
            try{
                this.initCurrentPosition();
            }catch(err){
                console.error("init current position failed in map: " + err.message);
            }
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
            if(!event.geolocation)continue;
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

    updateCurrentPosition(lngLat){
        if(!lngLat)return;
        let data = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [lngLat.lng, lngLat.lat]
            }
        };
        this.map.getSource('current-position').setData(data);
        this.map.flyTo({
            center: [lngLat.lng, lngLat.lat]
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
