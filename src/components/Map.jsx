import React, { Component } from 'react';
import keydown from 'react-keydown';

import Tank from './Tank';
import { keyMap } from '../common/constants'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            direction: ""
        };
    }

    componentDidMount(){

    }
    
    @keydown( 'a', 's', 'd', 'w', 'k' )
    move(event){
        // console.log(event.which);
        this.setState({
            direction: keyMap[event.which]
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