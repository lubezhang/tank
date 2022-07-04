import { reactive } from 'vue';
import { BaseTank, InstanceTank } from '@/common/types';
import { CONST_GAME_IMG, CONST_ELEMENT_ROTATION_MAP, CONST_GAME_KEY_MAP, CONST_GAME_IMG_MAP } from '@/common/constants';
import { computeElementCoordinates } from '@/utils';

export const useTankData = (baseTank: BaseTank): InstanceTank => {
    if (typeof baseTank === 'undefined') {
        throw new Error('没有坦克数据');
    }

    const tank: InstanceTank = reactive({
        coordinates: computeElementCoordinates(baseTank.position),
        rotation: CONST_ELEMENT_ROTATION_MAP.get(baseTank.direction) || 0, // 设置坦克方向
        tankImg: CONST_GAME_IMG_MAP.get(baseTank.tankType) || CONST_GAME_IMG.TANK_PLAY1, // 设置坦克贴图
        tankType: baseTank.tankType,
        position: baseTank.position,
        direction: baseTank.direction,
        speed: baseTank.speed
    });

    window.addEventListener('keydown', e => {
        const direction = CONST_GAME_KEY_MAP.get(e.code);
        if (typeof direction !== 'undefined') {
            const rotation = CONST_ELEMENT_ROTATION_MAP.get(direction);
            (typeof rotation !== 'undefined') && (tank.rotation = rotation);
        }
    });

    return tank;
};
