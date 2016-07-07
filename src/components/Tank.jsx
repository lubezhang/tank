import React, { Component } from 'react';
import _ from 'lodash';

import { Bullet } from "./index";
import CollideCheck from '../common/CollideCheck';
import * as Constants from '../common/Constants'

export default class Tank extends Component {
    constructor(props) {
        super(props);
        this.position = { // 坦克的位置
            top: Constants.MAP_HEIGHT - Constants.MAP_UNIT_HEIGHT,
            left: (Constants.MAP_WIDTH / 2) - (Constants.MAP_UNIT_WIDTH * 2)
        }

        // console.log(this.position);
        this.speed = 1; // 坦克的速度
        this.initBarrel = 'up';
    }

    componentDidMount() {
        this.init = true;
    }

    // 坦克移动样式
    getNextPosition(direction) {
        if(CollideCheck.checkCollideMap({
            type: Constants.GAME_ELEMENT_TANK,
            preDirection: this.initBarrel,
            direction: direction,
            position: this.position
        })) {
            // console.log('======================================= 你别想 出去');
            return {
                transform: 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'
            }
        }

        switch (direction) {
            case "up":
                this.position.top = this.position.top - this.speed;
                break;
            case "down":
                this.position.top = this.position.top + this.speed;
                break;
            case "left":
                this.position.left = this.position.left - this.speed;
                break;
            case "right":
                this.position.left = this.position.left + this.speed;
                break;
        }

        return {
            transform: 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'
        }
    }

    // 坦克炮管的指向
    getBarrelDirection(direction) {
        let strBarrel = "tank-barrel tank-barrel-";
        if(direction === '') {
            return strBarrel + this.initBarrel;
        }
        this.initBarrel = direction;
        return strBarrel + direction;
    }

    getBullet(){
        // let { direction, fire } = this.props;
        return (<Bullet initPosition={Object.assign({}, this.position)} />);
    }

    render() {
        let { reportState, direction, fire } = this.props;
        // console.log('^^^^^^^^^^^^^^^^  Tank Renderw', direction, style);
        reportState({tankId:'gamer1', direction: direction, position:Object.assign({},this.position)})
        // debugger
        
        return (
            <div className="map-tank1" style={this.getNextPosition(direction)}>
                
                <div className={this.getBarrelDirection(direction)}></div>

            </div> 
        );
    }
}
