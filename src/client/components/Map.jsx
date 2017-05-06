import React from 'react';
import {connect} from 'react-redux';

import {initMap} from 'states/map-actions.js';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(initMap());
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default connect((state) => {
    return {
        ...state.map
    };
})(Map);
