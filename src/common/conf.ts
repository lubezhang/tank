import { EnumTankType, EnumGameTankCtrl, BaseTank } from '@/common/types';
import * as constants from './constants';

export const gamer1: BaseTank = {
    tankType: EnumTankType.Gamer1,
    position: { x: constants.CONST_MAP_BASE_ELEMENT_COUNT - 1, y: constants.CONST_MAP_BASE_ELEMENT_COUNT / 2 - 1 },
    direction: EnumGameTankCtrl.Up,
    speed: 1
};

export const enemy1: BaseTank = {
    tankType: EnumTankType.Enemy1,
    position: { x: 1, y: 2 },
    direction: EnumGameTankCtrl.Down,
    speed: 1
};
