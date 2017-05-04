import React from 'react';
import {connect} from 'react-redux';

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.store = null;
    }

    render() {
        return (
            <div className="main">
              <h1>Hello word</h1>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        ...state
    };
})(Main);
