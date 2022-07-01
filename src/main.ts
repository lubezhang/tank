// import { createApp } from 'vue';
import { createPixiApp } from './core';
import App from './App';
import { getRootContainer } from './game';
import '@/assets/styles/main.less';

createPixiApp(App).mount(getRootContainer());
