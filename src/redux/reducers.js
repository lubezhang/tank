import { combineReducers } from 'redux';

import actions from './actions';

const initState = {
    // tankMove: '',
    // tankFire: false,
    // map: []
};

function tankMove(state = initState, action){
    console.log('tankMove reducers', state);
    switch(action.type) {
        case action.TANK_MOVE:
            return Object.assign({}, state, {tankMove: action.direction});
            break;
        default:
            return state;
    }
}

function tankFire(state = initState, action){
    console.log('tankFire reducers', state);
    switch(action.type) {
        case action.TANK_FIRE:
            return Object.assign({}, state, { tankFire:action.fire});
            break;
        default:
            return state;
    }
}

export default combineReducers({
    tankMove,
    tankFire
})