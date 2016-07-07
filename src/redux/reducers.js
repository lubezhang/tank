import { combineReducers } from 'redux';
import _ from 'lodash';

import * as actions from "./actions";

const initState = {
    tank: {

    }
};

function tankDirection(state, params) {
    return _.merge({}, state, {
        tank: {
            direction: params.direction || ''
        }
    });
}

function tankFire(state, params) {
    return _.merge({}, state, {
        tank: {
            fire: params.fire || ''
        }
    })
}

function tankState(state, params) {
    state = _.merge({}, state, {
        tank: {
            direction: params.direction || '',
            fire: params.fire || '',
            tankId: params.tankId || '',
            position: params.position || {}
        }
    })

    return state;
}

function tankBullet(state, params) {
    let arrayBullet = [];
    if(_.isEmpty(params.fire)) {
        // return state;
    }

    if(_.isEmpty(state.tank.bullets)) {
        arrayBullet.push({
            direction: params.direction || 'left',
            createTime: new Date().getTime(),
            owner: "gamer1"
        })
    } else {
        // 炮弹最多发射3枚
        // 两个炮弹间隔2秒
    }

    return _.merge({}, state, {
        tank: {
            bullets: arrayBullet
        }
    })
}

function setAction(state, action){
    return _.merge({}, state, {
        actionType: action.type
    })
}

function play(state = initState, action) {
    let params = action.params, nextState = Object.assign({}, state);
    if (!params) {
        return state;
    }

    nextState = tankState(nextState, params);
    nextState = tankBullet(nextState, params);
    nextState = setAction(nextState, action);

    return nextState;
}

export default play;