import { EnumGameTankCtrl } from './types';
/** 地图区域内的元素的基础尺寸 */
export const CONST_MAP_BASE_SIZE = 15;
export const CONST_MAP_BASE_ELEMENT_COUNT = 18;

/** 一个游戏单元的尺寸 */
export const CONST_MAP_ELEMENT = {
    WIDTH: CONST_MAP_BASE_SIZE * 2,
    HEIGHT: CONST_MAP_BASE_SIZE * 2
};

/** 地图区域 */
export const CONST_MAP = {
    WIDTH: CONST_MAP_ELEMENT.WIDTH * CONST_MAP_BASE_ELEMENT_COUNT,
    HEIGHT: CONST_MAP_ELEMENT.HEIGHT * CONST_MAP_BASE_ELEMENT_COUNT
};

/** pixi 组件类型 */
export const CONST_PIXI_ELEMENT_TYPE = {
    CONTAINER: 'Container',
    SPRITE: 'Sprite'
};

/**
 * 键盘按键控制定义
 * w、a、s、d
 */
export const CONST_GAME_KEY_MAP = {
    65: EnumGameTankCtrl.Left, // 坦克向左移动
    68: EnumGameTankCtrl.Right, // 坦克向右移动
    87: EnumGameTankCtrl.Up, // 坦克向上移动
    83: EnumGameTankCtrl.Down, // 坦克向下移动
    75: EnumGameTankCtrl.Fire // 坦克开炮
};
