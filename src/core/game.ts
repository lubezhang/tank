import { Application, Container } from 'pixi.js';
import { CONST_MAP } from '@/common/constants';

const game = new Application({
    width: CONST_MAP.WIDTH,
    height: CONST_MAP.HEIGHT,
    // backgroundColor: 0x1099bb,
    antialias: true, // default: false 反锯齿
    // transparent: false // default: false 透明度
    resolution: 1 // default: 1 分辨率
});

document.body.appendChild(game.view);

export const getRootContainer = (): Container => {
    return game.stage;
};
