
// 地图区域内的最小元素的尺寸
export const CONST_MAP_BASE_WIDTH = 15;
export const CONST_MAP_BASE_HEIGHT = 15;

// 一个游戏单元的尺寸
export const CONST_MAP_UNIT_WIDTH = CONST_MAP_BASE_WIDTH * 2;
export const CONST_MAP_UNIT_HEIGHT = CONST_MAP_BASE_HEIGHT * 2;

// 地图区域
export const CONST_MAP_WIDTH = CONST_MAP_UNIT_WIDTH * 24;
export const CONST_MAP_HEIGHT = CONST_MAP_UNIT_HEIGHT * 24;

/* 游戏元素类型 */
export enum EnumGameElement {
    /** 炮弹 */
    BULLET,
    /** 坦克 */
    TANK,
    /** 场景内的建筑物 */
    BUILDING
};

/** 坦克控制 */
export enum EnumGameTankCtrl {
    Left,
    Right,
    Up,
    Down,
    Fire
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

export enum EnumTankType {
    /** 玩家1 */
    Gamer1,
    /** 玩家2 */
    Gamer2,
    /** 敌人 */
    Enemy
}
