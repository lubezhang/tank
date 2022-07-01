import { defineComponent, h } from 'vue';
import { CONST_PIXI_ELEMENT_TYPE } from '@/common/constants';
import { gamer1, enemy1 } from '@/common/conf';
import Tank from '@/components/Tank';

export default defineComponent({
    render () {
        return h(CONST_PIXI_ELEMENT_TYPE.CONTAINER, [
            h(Tank, { tankData: gamer1 }),
            h(Tank, { tankData: enemy1 })
        ]);
    }
});
