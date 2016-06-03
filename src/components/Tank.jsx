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
        this.state = {
            direction: ""
        }
        // 接收按键缓存
        this.keyBuff = {};
        // 移动坦克的定时器句柄
        this.tankTimer = 0;
        // 坦克的位置
        this.position = {
            top: 0,
            left: 0
        }
        // 坦克的速度
        this.speed = 1;
        // 坦克的当前状态
        this.tank = {
            direction: "",      //行驶方向
            prevDirection: "",  // 上次的行驶方向
            isMoveing: false,   // 是否正在移动
            isFire: false       // 是否开火
        }
    }

    componentDidMount(){
        window.document.addEventListener('keydown', this.eventKeyDown.bind(this));
        // window.document.addEventListener('keypress', this.eventKeyPress.bind(this));
        window.document.addEventListener('keyup', this.eventKeyUp.bind(this));

        setInterval(this.checkKey.bind(this), 300);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.eventKeyDown);
        // window.document.removeEventListener('keypress', this.eventKeyPress);
        window.document.removeEventListener('keyup', this.eventKeyUp);
    }

    eventKeyDown(e){
        let keyCode = e.keyCode;
        // 已经定义的按键，才放到按键buff中
        if(keyMap[keyCode]) {
            this.keyBuff[keyCode] = true;
        }
    }

    eventKeyUp(e){
        delete this.keyBuff[e.keyCode];
    }

    /**
     * 定时检测用户的操作。如果发现用户按下按键，触发相应操作。移动坦克或发射炮弹
     * @return {[type]} [description]
     */
    checkKey(){
        let fire = false, direction = "";
        if(_.isEmpty(this.keyBuff)) {
            this.tank.direction = "";
            this.tank.isFire = false;
        } else {
            for(var keyCode in this.keyBuff) {
                if(keyCode == "75") {
                    continue;
                }
                this.tank.direction = keyMap[keyCode];
            }

            if("75" in this.keyBuff) {
                this.tank.isFire = true;
            } else {
                this.tank.isFire = false;
            }
        }
        // console.log("");
        // console.log(new Date().getTime(),"checkKey ====  keyBuff:",JSON.stringify(this.keyBuff)," direction:",this.tank.direction,"   isFire:", this.tank.isFire);

        // 移动坦克
        this.ctrlDirection();
        // 发射炮弹
        // fire && this.fire();
    }

    ctrlDirection(){
        // console.log(fire);
        // 1、没有方向按键，清除移动坦克的定时器
        // 2、
        if(_.isEmpty(this.tank.direction) || (this.tank.prevDirection !== this.tank.direction)) {
            clearInterval(this.tankTimer);
            this.tank.isMoveing = false
        } else {
            if(this.tank.isMoveing === false) {
                this.tank.isMoveing = true;
                this.tankTimer = setInterval(function(){
                    this.setState({
                        direction: ""
                    })
                }.bind(this), 20);
            }
        }

        this.tank.prevDirection = this.tank.direction;
    }

    getNextPosition(){
        switch(this.tank.direction) {
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
        // console.log("render ==== direction:",this.tank.direction,"   isFire:", this.tank.isFire);
        let style = this.getNextPosition();
        let bullet = this.tank.isFire ? <Bullet /> : "";

        return (
            <div className="map-tank1" style={style}>
                {this.props.children}
                {bullet}
            </div> 
        );
    }
}
