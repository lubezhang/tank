import { EnumGameTankCtrl, EnumTankType } from './types';
import play1 from '@/assets/p1tankU.gif';
import enemy1 from '@/assets/enemy1U.gif';

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
 * w:
 * a:
 * s:
 * d:
 * 空格:
 */
export const CONST_GAME_KEY_MAP = new Map<string, EnumGameTankCtrl>([
    ['KeyA', EnumGameTankCtrl.Left],
    ['KeyD', EnumGameTankCtrl.Right],
    ['KeyW', EnumGameTankCtrl.Up],
    ['KeyS', EnumGameTankCtrl.Down],
    ['Space', EnumGameTankCtrl.Fire]
]);

export const CONST_GAME_IMG = {
    /** 玩家1 */
    TANK_PLAY1: play1,
    /** 普通坦克 */
    TANK_ENEMY1: enemy1
};

export const CONST_GAME_IMG_MAP = new Map<EnumTankType, string>([
    [EnumTankType.Gamer1, play1],
    [EnumTankType.Enemy1, enemy1]
]);

export const CONST_ELEMENT_ROTATION_MAP = new Map<number, number>([
    [EnumGameTankCtrl.Up, 0],
    [EnumGameTankCtrl.Right, 1.6],
    [EnumGameTankCtrl.Down, 3.2],
    [EnumGameTankCtrl.Left, 4.7]
]);
