/**
 * 方向控制按键定义 
 * w、a、s、d
 */
export const KEY_DIRECTION_MAP = {
    65: "left", 
    68: "right",
    87: "up",
    83: "down"
} 

/*
 * 发射炮弹按键定义 
 * k:发射
 */
export const KEY_FIRE_MAP = {
    75: "fire"
}

/* 地图区域内的最小元素的尺寸 */
export const MAP_BASE_WIDTH = 10;
export const MAP_BASE_HEIGHT = 10;

/* 一个游戏单元的尺寸 */
export const MAP_UNIT_WIDTH = MAP_BASE_WIDTH * 4;
export const MAP_UNIT_HEIGHT = MAP_BASE_HEIGHT * 4;

/* 地图区域 */
export const MAP_WIDTH = MAP_UNIT_WIDTH * 20;
export const MAP_HEIGHT = MAP_UNIT_HEIGHT * 20;

/** 游戏元素类型 */
export const GAME_ELEMENT_BULLET = 'bullet';
export const GAME_ELEMENT_TANK = 'tank';

export default {
    KEY_DIRECTION_MAP,
    KEY_FIRE_MAP,
    MAP_BASE_WIDTH,
    MAP_BASE_HEIGHT,
    MAP_UNIT_WIDTH,
    MAP_UNIT_HEIGHT,
    MAP_WIDTH,
    MAP_HEIGHT
}