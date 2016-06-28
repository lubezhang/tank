export const TANK_MOVE = "TANK_MOVE";
export const TANK_FIRE = 'TANK_FIRE';

export function tankMove(direction){
    // console.log('tankMove action');
    return {
        type: TANK_MOVE,
        direction: direction
    }
}

export function tankFire(){
    return {
        type: TANK_FIRE,
        fire: true
    }
}