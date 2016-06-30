import React, { Component } from 'react';
import _ from 'lodash';

import { Bullet } from "./index";
import { keyMap } from '../common/constants'
/** 
 * direction: 坦克的运动方向。up, down, left, right
 */
export default class Tank extends Component {
    constructor(props) {
        super(props);
        this.position = {   // 坦克的位置
            top: 0,
            left: 0
        }
        this.speed = 1;     // 坦克的速度
    }

    getNextPosition(direction){
        switch(direction) {
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

    render() {
        let { direction, fire } = this.props, style = this.getNextPosition(direction);
        // console.log('^^^^^^^^^^^^^^^^  Tank Renderw', direction, style);

        return (
            <div className="map-tank1" style={style}>
                {this.props.children}
                <div>{fire}</div>
            </div> 
        );
    }
}
