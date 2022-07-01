/* eslint-disable no-unused-vars */
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

export enum EnumTankType {
    /** 玩家1 */
    Gamer1,
    /** 玩家2 */
    Gamer2,
    /** 敌人 */
    Enemy
}

/** 坦克位置 */
export interface TankPosition {
    x: number,
    y: number
}

export interface BaseTank {
    /** 坦克类型 */
    tankType: EnumTankType,
    /** 坦克位置 */
    position: TankPosition,
    /** 坦克移动方向 */
    direction: EnumGameTankCtrl,
    /** 移动速度 */
    speed: number
}
