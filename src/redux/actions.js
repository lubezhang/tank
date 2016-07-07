export const GAME_PLAY = "GAME_PLAY";
export const BULLET_STOP = 'BULLET_STOP';
export const TANK_UPDATE_STATE = 'TANK_UPDATE_STATE';

export function play(params){
    return {
        type: GAME_PLAY,
        params: params
    }
}

/**
 * 更新坦克状态
 * 
 * @param  {[type]} params [description]
 * {
 *     tankId:'gamer1',
 *     position: {top:1, left:1},
 *     direction: 'up'
 * }
 * @return {[type]}        [description]
 */
export function updateTankState(params){
    return {
        type: TANK_UPDATE_STATE,
        params: params
    }
}

/**
 * 停止炮弹的飞行
 * @param  {[type]} tankId   
 *         炮弹所属坦克的的标示。玩家使用固定字符串gamer1; 敌军坦克使用数组下标
 *         
 * @param  {[type]} bulletId 
 *         炮弹在一个炮弹对列里的位置，方便删除
 * 
 * @return {[type]}          [description]
 */
export function stopBullet(params) {
    return {
        type: BULLET_STOP,
        params: params
    }
}

// export default{
//     GAME_PLAY,
//     BULLET_STOP
// }