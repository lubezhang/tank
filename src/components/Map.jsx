import React, { Component } from 'react';

import Tank from './Tank';

class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            direction: ""
        };
    }

    // @keydown( 'a', 's', 'd', 'w', 'k', 'w+k' )
    control(controlKey){
        // console.log(event.which);
        this.setState({
            direction: controlKey
        })
    }

    render() {
        // console.log(this.state.direction);
        let { direction } = this.state;
        return (
            <div className="map-container" ref="mapContainer">

                <div className="map-enemy1">E1</div>
                <div className="map-enemy2">E2</div> 
                <div className="map-enemy3">E3</div> 
                <div className="map-home">H</div> 
                <Tank direction={direction}>T11</Tank> 
                <div className="map-tank2">T2</div> 
            </div>
        );
    }
}

export default Map;