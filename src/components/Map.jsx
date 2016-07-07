import React, { Component } from 'react';

import { Tank, Bullet } from "./index";


class Map extends Component {
    constructor(props) {
        super(props);
        this.cacheMapState = {};
    }

    /**
     * 生成玩家的炮弹
     * @return {[type]} [description]
     */
    genaretorGamerBullet(){
        let { actions, tank } = this.props, cacheMapState = this.cacheMapState;
        // console.log(tank);
        return tank.bullets && tank.bullets.map((bullet, index) => {

            return (
                <Bullet key={index} index={index} 
                    initPosition={cacheMapState.position} 
                    direction={tank.direction} 
                    owner={bullet.owner} />
            )
        });
    }

    reportState(params) {
        this.cacheMapState = params;
    }

    render() {
                // <div className="map-tank2">T2</div> 
        let { actions, tank } = this.props;
        // console.log('**************** Map render', tank);
        return (
            <div className="map-container" ref="mapContainer">
                <div className="map-enemy1">E1</div>
                <div className="map-enemy2">E2</div> 
                <div className="map-enemy3">E3</div> 
                <Tank direction={tank.direction} fire={tank.fire} reportState={this.reportState.bind(this)}></Tank> 
                <div className="map-home">H</div> 

                { this.genaretorGamerBullet() }
            </div>
        );
    }
}

export default Map;