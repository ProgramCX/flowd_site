import { createApp } from 'vue'
import App from './App.vue'

//import ElementPlus module
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 

//import ElementPlusIconVue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//import Router
import Router from './tools/Router'
const app= createApp(App)

//mount ElementPlus module
app.use(ElementPlus)

//mount Router module
app.use(Router)
//regist all icons in ElementPlusVue
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.mount('#app')