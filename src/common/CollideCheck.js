import _ from 'lodash';

import * as Constants from '../common/Constants'

/**
 * 物体碰撞检测
 * 1、是否到达地图边缘
 * 2、是否碰到其他物体
 */
export default class CollideCheck {
    /**
     * 检查对象是否碰到底图边界
     * @param  {[type]}  object 游戏元素对象
     *                   {
     *                       position:{    元素的位置
     *                           top: 0,
     *                           left: 10
     *                       },
     *                       type: ''      元素的类型，不同元素有不同的大小，需要调整计算方法
     *                   }       
     * @return {Boolean}   [description]
     */
    static checkCollideMap(object) {
        if(_.isEmpty(object)) {
            throw new Error("被检测对象数据异常"); 
        }

        let isCollision = false,
            objectType = object.type,
            objectPos = object.position,
            objectPreDir = object.preDirection,
            objectDirection = object.direction;

        // 移动方向改变，可以继续移动
        if( objectPreDir !== objectDirection) {
            return false;
        }

        let objWidth, objHeight;
        if (Constants.GAME_ELEMENT_BULLET === objectType) {
            objWidth = Constants.MAP_BASE_WIDTH;
            objHeight = Constants.MAP_BASE_HEIGHT;
        } else {
            objWidth = Constants.MAP_UNIT_WIDTH;
            objHeight = Constants.MAP_UNIT_HEIGHT;
        }
        // 是否碰撞到地图边界
        // 水平方向
        if((objectDirection === 'left' || objectDirection === 'right') && (objectPos.left <= 0 || objectPos.left > (Constants.MAP_WIDTH - objWidth - 1))) {
            isCollision = true;
        }
        // 垂直方向
        if((objectDirection === 'up' || objectDirection === 'down') && (objectPos.top <= 0 || objectPos.top > (Constants.MAP_HEIGHT - objHeight - 1))) {
            isCollision = true;
        }

        return isCollision;
    }

    /**
     * 是否碰到其他物体
     * @return {[type]} [description]
     */
    static checkCollideObject(){

    }
}