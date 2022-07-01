import { EnumTankType, EnumGameTankCtrl, BaseTank } from '@/common/types';
// import * as constants from './constants';

export const gamer1: BaseTank = {
    tankType: EnumTankType.Gamer1,
    position: { x: 1, y: 1 },
    direction: EnumGameTankCtrl.Down,
    speed: 1
};

export const enemy1: BaseTank = {
    tankType: EnumTankType.Enemy,
    position: { x: 2, y: 1 },
    direction: EnumGameTankCtrl.Down,
    speed: 1
};
