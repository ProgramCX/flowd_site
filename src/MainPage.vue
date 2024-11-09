<template>
    <div class="title-wrap">
        <img src="./assets/logo.png" height="100px" id="product-logo"/>
        <h1 id="title">FlowD</h1>
        <p id="info">一款高效的多线程下载工具</p>
        <div>
            <img class="badge" src="https://img.shields.io/github/stars/L-Super/FlowD?logo=github&style=round-square"/>
            <img class="badge" src="https://img.shields.io/github/license/L-Super/FlowD?style=round-square&logo=github"/>
            <img class="badge" src="https://github.com/L-Super/FlowD/actions/workflows/build.yml/badge.svg"/>
        </div>
        <el-button type="primary" id="contribute-button" size="large" @click="openUrl('https://github.com/L-Super/FlowD')">项目地址</el-button>
        <div class="tag">
        <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="20" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default"><path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path></svg>
        <p id="tag-content">该软件免费并且开源，欢迎PR！</p>
    </div>  
    </div>
    
    <ProductDisplay></ProductDisplay>
</template>
<script>
import ProductDisplay from './components/ProductDisplay.vue'
export default({
    components:{
        ProductDisplay,
    },
    setup() {
        let openUrl=(url)=>{
            window.open(url,'_blank')
        }
        return{
            openUrl
        }
    }
})
</script>
<style scoped>
.title-wrap{
    margin:70px 80px;
}
.title-wrap .badge{
    margin-top: 3px;
    margin-right: 20px;
}
.title-wrap>#contribute-button{
    margin-top: 20px;
}
.tag{
    display: flex;
    align-items: center;
}
.tag>#tag-content{
    margin-left: 10px;
}
</style>