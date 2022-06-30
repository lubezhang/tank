import { defineComponent, h } from 'vue';
import { CONST_PIXI_ELEMENT_TYPE } from '@/common/constants';
import { computeElementCoordinates } from '@/utils';
import img1 from '@/assets/p1tankU.gif';

export default defineComponent({
    render (ctx) {
        return h(CONST_PIXI_ELEMENT_TYPE.CONTAINER, [
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(0, 0),
                interactive: true
            }),
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(0, 1),
                interactive: true
            }),
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(0, 2),
                interactive: true
            }),
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(0, 3),
                interactive: true
            }),
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(1, 3),
                interactive: true
            }),
            h(CONST_PIXI_ELEMENT_TYPE.SPRITE, {
                texture: img1,
                ...computeElementCoordinates(1, 2),
                interactive: true
            })
        ]);
    }
});
