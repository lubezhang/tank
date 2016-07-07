import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import { Map } from './components';
import Constants, { KEY_DIRECTION_MAP, KEY_FIRE_MAP } from './common/Constants'
import KeyEvent from './common/KeyEvent'
import * as actions from "./redux/actions";

function mapStateToProps(state) {
    return { 
        tank: state.tank,
        actionType: state.actionType
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
        // this.activeEvent.keyDirection = [];
        // this.activeEvent.keyFire = "";
        this.keyTime = 0;

        this.activeEvent = {
            keyDirection: [],
            keyFire: ''
        };
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

    shouldComponentUpdate(nextProps, nextState) {
        // 如果调用的action不要需要刷新组件，则返回false，阻止react调用render
        if(actions.GAME_PLAY === nextProps.actionType) {
            return true
        } else {
            return false;
        }
    }

    eventKeyDown(e){
        let keyCode = e.keyCode,
            keyValue = keyCode + ':' + KEY_DIRECTION_MAP[keyCode];
        // 已经定义的按键，才放到按键buff中
        if (KEY_DIRECTION_MAP[keyCode] && !this.activeEvent.keyDirection.includes(keyValue)) {
            this.activeEvent.keyDirection.push(keyValue);
        }

        if (KEY_FIRE_MAP[keyCode]) {
            this.activeEvent.keyFire = KEY_FIRE_MAP[keyCode];
        }

        // 测试代码
        // this.checkKey()
    }

    eventKeyUp(e){
        let keyCode = e.keyCode,
            keyValue = keyCode + ':' + KEY_DIRECTION_MAP[keyCode];

        if (KEY_DIRECTION_MAP[keyCode]) {
            this.activeEvent.keyDirection.splice(this.activeEvent.keyDirection.indexOf(keyValue), 1);
        }

        if (KEY_FIRE_MAP[keyCode]) {
            this.activeEvent.keyFire = '';
        }

        // 如果没有任何动作，发送一个停止的指令
        // if(_.isEmpty(this.activeEvent.keyDirection) && _.isEmpty(this.activeEvent.keyFire)) {
        //     this.props.actions.play({});
        // }    

        // if(!KeyEvent.checkActiveEvent(this.activeEvent)) {
        //     console.log('9999999999999999999999999999999999999999');
        //     this.props.actions.play({});
        // }
    }

    checkKey(){
        // console.log('checkKey',this.activeEvent.keyDirection, this.activeEvent.keyFire, new Date().getTime());

        // 处理坦克移动方向
        let params = {}, direction = KeyEvent.getDirction(this.activeEvent.keyDirection);
        if(direction !== '') {
            params.direction = direction;
        }

        // 处理坦克发射炮弹
        if(this.activeEvent.keyFire !== '') {
            params.fire = "fire";
        }

        // let activeObj = KeyEvent.checkActiveEvent(this.activeEvent, this.props);
        // if(activeObj) {
        //     params.direction = activeObj.direction;
        // }

        // 处理炮弹队列
        // debugger;
        if(!_.isEmpty(params)) {
            this.props.actions.play(params);
        } else {
            // console.log('stop');
        }
    }

    render() {
        const { actions, tank } = this.props;

        return (
            <Map tank={tank} actions={actions} />
        );
    }
}
