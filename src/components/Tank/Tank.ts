import { defineComponent, h, PropType, toRefs, computed } from 'vue';
import { CONST_PIXI_ELEMENT_TYPE } from '@/common/constants';
import { BaseTank, EnumTankType } from '@/common/types';
import { computeElementCoordinates } from '@/utils';
import img1 from '@/assets/p1tankU.gif';
import img2 from '@/assets/enemy1U.gif';

export default defineComponent({
    props: {
        tankData: {
            type: Object as PropType<BaseTank>,
            require: true
        }
    },
    setup (props) {
        const { tankData } = toRefs(props);

        // if (tankData.value?.tankType === EnumTankType.Gamer1) {
        //     tankData.value.sdf = img1;
        // }

        const tankImg = computed((): string => {
            const img = img1;
            if (tankData.value?.tankType === EnumTankType.Enemy) {
                return img2;
            }
            return img;
        });

        return {
            tank: tankData,
            tankImg
        };
    },
    render (ctx: any) {
        console.log('====', computeElementCoordinates(ctx.tank.position));
        return h(CONST_PIXI_ELEMENT_TYPE.CONTAINER, [
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: ctx.tankImg,
                ...computeElementCoordinates(ctx.tank.position),
                interactive: true
            })
        ]);
    }
});
