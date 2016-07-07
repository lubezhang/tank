import _ from 'lodash';

import Constants, { MAP_WIDTH, MAP_HEIGHT, MAP_UNIT_WIDTH, MAP_UNIT_HEIGHT } from '../common/Constants'

export default class KeyEvent {
    /**
     * 从按键缓存中，获取坦克的移动方向。 取最后一个按下的方向
     * @param  {Array} keyBuff 按键缓存
     * @return {[type]}  
     *         如果有按键按下，返回最后一个按下的按键。如果没有，返回空字符串
     */
    static getDirction(keyBuff){
        if(Array.isArray(keyBuff) && keyBuff.length > 0) {
            return keyBuff[keyBuff.length - 1].split(':')[1];
        }
        return '';
    }

    /**
     * 检查是否还有活动的事件
     * 1、检查是否有按键已经按下
     * 2、检查是否有正在飞行的炮弹
     * 3、检查是否有活动的敌军坦克
     * 以上条件只要满足一条，任务需要继续页面刷新任务
     *
     * @param activeEvent
     * @param props 
     * @return {[type]} [description]
     */
    static checkActiveEvent(activeEvent, props){
        let activeObj = {};

        // 检查是否有按下的按键
        let direction = KeyEvent.getDirction(activeEvent.keyDirection);
        if(direction !== '') {
            activeObj.direction = direction;
        }

        return activeObj;
    }

    
}