import React, { Component } from 'react';

import Tank from './Tank';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    moveHandle(){
        let { actions } = this.props;
        actions.tankMove('up')
    }

    tankFireHandle(){
        let { actions } = this.props;
        actions.tankFire()
    }

    render() {
        console.log('*************** map render');
        let { actions, direction } = this.props;
        return (
            <div className="map-container" ref="mapContainer">

                <div className="map-enemy1" onClick={this.tankFireHandle.bind(this)}>E1</div>
                <div className="map-enemy2">E2</div> 
                <div className="map-enemy3">E3</div> 
                <Tank actions={actions} direction={direction}>T1</Tank> 
                <div className="map-home">H</div> 
                <div className="map-tank2" onClick={this.moveHandle.bind(this)}>T2</div> 
            </div>
        );
    }
}

export default Map;