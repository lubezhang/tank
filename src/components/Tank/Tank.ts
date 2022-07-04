import { defineComponent, h, PropType, toRefs } from 'vue';
import { CONST_PIXI_ELEMENT_TYPE } from '@/common/constants';
import { BaseTank, InstanceTank } from '@/common/types';
import { computeElementCoordinates, useTankData } from '@/utils';

export default defineComponent({
    props: {
        tankData: {
            type: Object as PropType<BaseTank>,
            require: true
        }
    },
    setup (props) {
        const { tankData } = toRefs(props);
        const tank = useTankData(tankData.value);

        return tank;
    },
    render (ctx: InstanceTank) {
        // console.log('====', computeElementCoordinates(ctx.tank.position));
        return h(CONST_PIXI_ELEMENT_TYPE.CONTAINER, [
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: ctx.tankImg,
                rotation: ctx.rotation, // 旋转
                ...computeElementCoordinates(ctx.position),
                interactive: true
            })
        ]);
    }
});
