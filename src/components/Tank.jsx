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
        
    }

    render() {
        return (
            <div className="map-tank1" >
                {this.props.children}
            </div> 
        );
    }
}
