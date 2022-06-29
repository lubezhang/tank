import { EnumTankType, EnumGameTankCtrl } from './constants';

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
