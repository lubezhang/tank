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

interface TankPosition {
    x: number,
    y: number
}

export interface BaseTank {
    tankType: EnumTankType,
    position: TankPosition,
    direction: EnumGameTankCtrl,
    speed: number
}
