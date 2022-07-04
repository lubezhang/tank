import { CONST_MAP_ELEMENT, CONST_MAP_BASE_SIZE } from '@/common/constants';
import { TankPosition, Coordinates } from '@/common/types';

/** */
export const computeElementCoordinates = (position: TankPosition): Coordinates => {
    return {
        x: CONST_MAP_ELEMENT.WIDTH * position.y + (position.y === 0 ? 0 : CONST_MAP_BASE_SIZE),
        y: CONST_MAP_ELEMENT.WIDTH * position.x + (position.x === 0 ? 0 : CONST_MAP_BASE_SIZE)
    };
};

export * from './hooks';
