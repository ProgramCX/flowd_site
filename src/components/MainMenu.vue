<template>
    <el-menu mode="horizontal" class="menu-bar"
    default-active="/index"
    @select="handleSelect">
    <div class="meta" @click="metaClicked">
        <img src="../assets/logo.png" id="logo"/>
      <span id="title">FlowD</span>
    </div>
      <el-menu-item index="/index">主页</el-menu-item>
      <el-menu-item index="/newfeature">新特性</el-menu-item>
      <el-menu-item index="/releasedownload">发行版本</el-menu-item>
      <el-menu-item index="/contributecomp">贡献</el-menu-item>
    </el-menu>
</template>

<script>
    // import {onMounted} from 'vue'
    import {  useRouter } from 'vue-router';
    export default {
        name:'MainMenu',
        setup(){
            const router=useRouter();
            const currentPath = router.path; 
           
            function handleSelect(key){
                router.push(key);
            }
            function metaClicked(){
                router.push('/index');
            }
            return {
                handleSelect,
                currentPath,
                metaClicked
            }
        }
    }
</script>
<style scoped>
.menu-bar{
    display: flex;
    align-items: center;
    height: 45px;
}
.meta{
    display: inherit;
    align-items: inherit;
    cursor: pointer;
}
#logo{
    height: 30px;
}
#title{
    margin-left: 10px;
    margin-right: 10px;
}

</style>