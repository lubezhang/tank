import React, { Component } from 'react';
import _ from 'lodash';

import { Bullet } from "./index";

export default class Tank extends Component {
    constructor(props) {
        super(props);
        this.position = { // 坦克的位置
            top: 0,
            left: 0
        }
        this.speed = 1; // 坦克的速度
        this.cacheBarrel = 'tank-barrel tank-barrel-up';
    }

    componentDidMount() {
        this.init = true;
    }

    // 坦克移动样式
    getNextPosition(direction) {
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

    // 坦克炮管的样式
    getBarrelDirection(direction) {
        let strBarrel = "tank-barrel tank-barrel-";
        if(direction === '') {
            return this.cacheBarrel;
        }
        this.cacheBarrel = strBarrel + direction;
        return strBarrel + direction;
    }

    render() {
        let { direction, fire } = this.props;
        // console.log('^^^^^^^^^^^^^^^^  Tank Renderw', direction, style);

        return (
            <div className="map-tank1" style={this.getNextPosition(direction)}>
                {this.props.children}
                <div>{fire}</div>
                <div className={this.getBarrelDirection(direction)}></div>
            </div> 
        );
    }
}
