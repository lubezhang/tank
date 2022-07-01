import { defineComponent, h } from 'vue';
import { CONST_PIXI_ELEMENT_TYPE } from '@/common/constants';
import Tank from '@/components/Tank';

export default defineComponent({
    render (ctx) {
        return h(CONST_PIXI_ELEMENT_TYPE.CONTAINER, [
            h(Tank)
        ]);
    }
});
