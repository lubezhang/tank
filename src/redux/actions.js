const TANK_MOVE = "TANK_MOVE";
const TANK_FIRE = 'TANK_FIRE';

export function tankMove(direction){
    // console.log('tankMove');
    return {
        type: TANK_MOVE,
        direction: direction
    }
}

export function tankFire(){
    // console.log('tankFire');
    return {
        type: TANK_FIRE,
        fire: true
    }
}

export function play(params){
    return {
        type: 'play',
        params: params
    }
}

export {
    TANK_MOVE,
    TANK_FIRE
}