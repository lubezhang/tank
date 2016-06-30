import React, { Component } from 'react';

import Tank from './Tank';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {
                // <div className="map-tank2">T2</div> 
        let { actions, tank } = this.props;
        // console.log('**************** Map render', direction);
        return (
            <div className="map-container" ref="mapContainer">
                <div className="map-enemy1">E1</div>
                <div className="map-enemy2">E2</div> 
                <div className="map-enemy3">E3</div> 
                <Tank actions={actions} direction={tank.direction} fire={tank.fire}>T1</Tank> 
                <div className="map-home">H</div> 
            </div>
        );
    }
}

export default Map;