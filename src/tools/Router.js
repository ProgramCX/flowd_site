import { createRouter, createWebHashHistory } from "vue-router";

// import App from "@/App.vue";

import NewFeature from "@/components/NewFeature.vue";
import ProductDisplay from "@/components/ProductDisplay.vue";
import ReleaseDownload from "@/components/ReleaseDownload.vue";
import ContributeComp from "@/components/ContributeComp.vue";
import MainPage from "@/MainPage.vue";

const Router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/index',
            alias:'/',
            component:MainPage,
            name:'index',
            meta:{
                metaInfo:{
                    title:"FlowD多线程下载器",
                    description:"一个高效的多线程下载器",
                    keywords:"下载器,免费,开源,快速,多线程,迅雷,IDM,Motrix,FlowD"
                }
            }
        },
       
        {
            path:'/newfeature',
            component:NewFeature,
            name:'newfeature',
            meta:{
                metaInfo:{
                    title:"新特性——FlowD",
                    description:"FlowD的新特性",
                    keywords:"新特性,下载器,免费,开源,快速,多线程,迅雷,IDM,Motrix,FlowD"
                }
            }
        },
        {
            path:'/productdisplay',
            component:ProductDisplay,
            name:'productdisplay',
        },{
            path:'/releasedownload',
            component:ReleaseDownload,
            name:'releasedownload',
            meta:{
                metaInfo:{
                    title:"发行版本下载——FlowD",
                    description:"FlowD下载",
                    keywords:"下载,发行版,下载器,免费,开源,快速,多线程,迅雷,IDM,Motrix,FlowD"
                }
            }
        },{
            path:'/contributecomp',
            component:ContributeComp,
            name:'contributecomp',
            meta:{
                metaInfo:{
                    title:"贡献——FlowD",
                    description:"FlowD的贡献情况",
                    keywords:"贡献,Contributors,贡献者,下载器,免费,开源,快速,多线程,迅雷,IDM,Motrix,FlowD"
                }
            }
            
        }
    ]
})

export default Router;