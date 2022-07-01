import { CONST_MAP_ELEMENT } from '@/common/constants';
export const computeElementCoordinates = (positionX: number, positionY: number) => {
    return {
        x: CONST_MAP_ELEMENT.WIDTH * positionY,
        y: CONST_MAP_ELEMENT.WIDTH * positionX
    };
};
