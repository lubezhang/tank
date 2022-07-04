import { createRenderer } from 'vue';
import { Container, Sprite, Text, Texture } from 'pixi.js';

const renderer = createRenderer({
    createElement (type): any {
        let element;
        switch (type) {
        case 'Container':
            element = new Container();
            break;
        case 'Sprite':
            element = new Sprite();
            // 缩放
            element.scale.x = 0.5;
            element.scale.y = 0.5;

            // 设置锚点
            element.anchor.x = 0.5;
            element.anchor.y = 0.5;
            // element.rotation = 0; // 旋转参数。90=>1.6; 180=>3.2
            break;
        default:
            element = document.createElement('div');
            break;
        }
        return element;
    },

    setElementText (node, text) {
        if (node.addChild) {
            const cText = new Text(text);
            node.addChild(cText);
        } else {
            node.innerText = text;
        }
    },

    createText (text) {
        return new Text(text);
    },

    patchProp (el, key, prevValue, nextValue) {
        switch (key) {
        case 'texture':
            el.texture = Texture.from(nextValue);
            break;
        case 'onClick':
            el.on('pointertap', nextValue);
            break;
        default:
            el[key] = nextValue;
        }
    },

    insert (el, parent) {
        if (parent.addChild) {
            parent.addChild(el);
        }
    },
    createComment (): any {},
    parentNode (): any {},
    nextSibling (node) {
        return node;
    },
    setText () {},
    remove (el) {
        const parent = el.parent;
        if (parent) {
            parent.removeChild(el);
        }
    }
});

export function createPixiApp (rootComponent: any) {
    return renderer.createApp(rootComponent);
}
