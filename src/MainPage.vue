<template>
    <div class="title-wrap">
        <img src="./assets/logo.png" height="50px" id="product-logo"/>
        <h1 id="title">FlowD</h1>
        <p id="info">An efficient multi-threaded download manager</p>
        <div>
            <img class="badge" src="https://img.shields.io/github/stars/L-Super/FlowD?logo=github&style=round-square"/>
            <img class="badge" src="https://img.shields.io/github/license/L-Super/FlowD?style=round-square&logo=github"/>
            <img class="badge" src="https://github.com/L-Super/FlowD/actions/workflows/build.yml/badge.svg"/>
        </div>
        
        <el-button type="primary" id="contribute-button" size="large" @click="openUrl('https://github.com/L-Super/FlowD')">仓库地址</el-button>
    </div>
</template>
<script>


export default({
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
.badge{
    margin-top: 3px;
    margin-right: 20px;
    margin-bottom: 15px
}
</style>