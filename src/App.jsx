import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Map } from './components';
import { keyMap } from './common/constants'
import * as actions from "./redux/actions";

function mapStateToProps(state) {
    console.log(state);
    return { 
        direction: state.tankMove
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
        this.keyBuff = [];
    }

     componentDidMount(){
        window.document.addEventListener('keydown', this.eventKeyDown.bind(this));
        // window.document.addEventListener('keypress', this.eventKeyPress.bind(this));
        window.document.addEventListener('keyup', this.eventKeyUp.bind(this));

        // setInterval(this.checkKey.bind(this), 500);
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
        console.log('eventKeyDown', this.keyBuff);
    }

    eventKeyUp(e){
        delete this.keyBuff[e.keyCode];
        console.log('eventKeyUp', this.keyBuff);
    }

    checkKey(){
        // console.log('checkKey', new Date().getTime());
    }

    render() {
        console.log('&&&&&&&&&&&& App renderw');
        const { actions } = this.props;

        return (
            <Map actions={actions} />
        );
    }
}
