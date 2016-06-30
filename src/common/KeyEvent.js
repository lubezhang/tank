import _ from 'lodash';

export default class KeyEvent {
    static getDirction(keyBuff){
        if(Array.isArray(keyBuff) && keyBuff.length > 0) {
            return keyBuff[keyBuff.length - 1].split(':')[1];
        }
        return '';
    }
}