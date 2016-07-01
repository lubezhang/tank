import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import { Map } from './components';
import { keyDirectionMap, keyFireMap } from './common/constants'
import KeyEvent from './common/KeyEvent'
import * as actions from "./redux/actions";

function mapStateToProps(state) {
    return { 
        tank: state.tank
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    constructor(props) {
        super(props);
        this.keyDirection = [];
        this.keyFire = "";
        this.keyTime = 0;
    }

    componentDidMount(){
        window.document.addEventListener('keydown', this.eventKeyDown.bind(this));
        // window.document.addEventListener('keypress', this.eventKeyPress.bind(this));
        window.document.addEventListener('keyup', this.eventKeyUp.bind(this));

        // 事件和动画统一处理定时器
        this.keyTime = setInterval(this.checkKey.bind(this), 30); 
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.eventKeyDown);
        // window.document.removeEventListener('keypress', this.eventKeyPress);
        window.document.removeEventListener('keyup', this.eventKeyUp);
        // 卸载组件时清理定时器。如果不清理，自动刷新页面后会生成多个
        clearInterval(this.keyTime)
    }

    eventKeyDown(e){
        let keyCode = e.keyCode, keyValue = keyCode+':'+keyDirectionMap[keyCode];
        // 已经定义的按键，才放到按键buff中
        if(keyDirectionMap[keyCode] && !this.keyDirection.includes(keyValue)) { 
            this.keyDirection.push(keyValue);
        }

        if(keyFireMap[keyCode]) {
            this.keyFire = keyFireMap[keyCode];
        }
    }

    eventKeyUp(e){
        let keyCode = e.keyCode, keyValue = keyCode+':'+keyDirectionMap[keyCode];
        
        if(keyDirectionMap[keyCode]) {
            this.keyDirection.splice(this.keyDirection.indexOf(keyValue), 1);
        }
        
        if(keyFireMap[keyCode]) {
            this.keyFire = '';
        }

        // 如果没有任何动作，发送一个停止的指令
        if(_.isEmpty(this.keyDirection) && _.isEmpty(this.keyFire)) {
            this.props.actions.play({});
        }    
    }

    checkKey(){
        // console.log('checkKey',this.keyDirection, this.keyFire, new Date().getTime());

        let params = {}, direction = KeyEvent.getDirction(this.keyDirection);
        if(direction !== '') {
            params.direction = direction;
        }

        if(this.keyFire !== '') {
            params.fire = "fire";
        }

        if(!_.isEmpty(params)) {
            this.props.actions.play(params);
        } else {
            // console.log('stop');
        }
    }

    render() {
        const { actions, tank } = this.props;
        // console.log(tank);
        return (
            <Map tank={tank}/>
        );
    }
}
