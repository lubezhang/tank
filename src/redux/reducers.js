import { combineReducers } from 'redux';
import _ from 'lodash';

import * as actions from "./actions";

const initState = {
    tank: {

    }
};

function map(state = initState, action) {
    return state;
}



function tank(state = initState, action){
    switch (action.type) {
        case actions.TANK_MOVE:
            return Object.assign({}, state, {direction: action.direction});
        case actions.TANK_FIRE:
            return Object.assign({}, state, {fire: action.fire});
        default:
            return state; 
    }
}

// export default combineReducers({
//     tank
// })
// 

function play(state = initState, action){
    let params = action.params;
    if(!params) {
        return state;
    }

    state = _.merge({}, state, {
        tank: {
            direction: params.direction || ''
        }
    })

    state = _.merge({}, state, {
        tank: {
            fire: params.fire || ''
        }
    })

    return state;
}

export default play;