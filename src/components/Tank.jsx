import React, { Component } from 'react';

import { Bullet } from "./index";
/** 
 * direction: 坦克的运动方向。up, down, left, right
 */
export default class Tank extends Component {
    constructor(props) {
        super(props);
        this.top = 0;
        this.left = 0;
        this.speed = 1;
    }

    getNextPosition(direction){
        switch(direction) {
            case "up":
                this.top = this.top - this.speed;
                break;
            case "down":
                this.top = this.top + this.speed;
                break;
            case "left":
                this.left = this.left - this.speed;
                break;
            case "right":
                this.left = this.left + this.speed;
                break;

        }

        return {
            transform: 'translate(' + this.left + 'px, ' + this.top + 'px)'
        }
    }

    render() {
        let { direction } = this.props;
        let style = this.getNextPosition(direction);

        return (
            <div className="map-tank1" style={style}>
                {this.props.children}
                <Bullet />
            </div> 
        );
    }
}
