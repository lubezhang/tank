import React, { Component } from 'react';

import CollideCheck from '../common/CollideCheck';
import * as Constants from '../common/Constants';

export default class Bullet extends Component {
    constructor(props) {
        super(props);
        this.position = { // 坦克的位置
            top: -600,
            left: -600
        }
        this.direction = 'up';
        this.speed = 4; // 坦克的速度
    }

    componentDidMount(){
        debugger;
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&this.props.initPosition', this.props.direction);
        this.position = this.props.initPosition;
        this.direction = this.props.direction || 'up';
    }

    // 坦克移动样式
    getNextPosition(direction) {
        // console.log(this.direction);
        if(CollideCheck.checkCollideMap({
            type: Constants.GAME_ELEMENT_BULLET,
            position:this.position
        })) {
            // console.log('======================================= 你别想出去');
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
        // console.log(this.position);
        return {
            transform: 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'
        }
    }

    render() {
        let { direction } = this.props;
        // console.log('Bullet render', direction);
        
        return (
            <div className="tank-bullet" style={this.getNextPosition(this.direction)}>
                *
            </div> 
        );
    }
}
