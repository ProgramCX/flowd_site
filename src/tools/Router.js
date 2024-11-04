import { createRouter, createWebHashHistory } from "vue-router";

import App from "@/App.vue";


import NewFeature from "@/components/NewFeature.vue";
import ProductDisplay from "@/components/ProductDisplay.vue";
import ReleaseDownload from "@/components/ReleaseDownload.vue";
import ContributeComp from "@/components/ContributeComp.vue";

const Router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/index',
            component:App,
            name:'index'
        },
        {
            path:'/newfeature',
            component:NewFeature,
            name:'newfeature'
        },
        {
            path:'/productdisplay',
            component:ProductDisplay,
            name:'productdisplay'
        },{
            path:'releasedownload',
            component:ReleaseDownload,
            name:'releasedownload'
        },{
            path:'contributecomp',
            component:ContributeComp,
            name:'contributecomp'
        }
    ]
})

export default Router;