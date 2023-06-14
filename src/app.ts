import { createApp } from "vue";
import { createPinia } from "pinia";
import { createUI } from "taro-ui-vue3";

// 引用全部组件样式
import "taro-ui-vue3/dist/style/index.scss";

const App = createApp({
    onShow(options) {},
    onHide() {},
    onError(msg) {},
});

App.use(createPinia());
// 引用全部组件
const tuv3 = createUI();

App.use(tuv3);

export default App;
