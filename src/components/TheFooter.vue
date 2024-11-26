<template>
    <el-footer class="footer">
        <p style="font-size:13px">© 2024 程旭 版权所有</p>
        <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2024067408号</a>
        <span id="regist"><img src="../assets/img/regist.png" height="13px" style="margin-right: 5px;vertical-align:middle"/><a href="https://beian.mps.gov.cn/#/query/webSearch?code=34118102000926" rel="noreferrer" target="_blank">皖公网安备34118102000926</a></span>
    </el-footer>
</template>

<script>
    export default {
        name:'TheFooter',
        setup(){

        }
    }
</script>
<style scoped>
.footer{
    padding:20px 40px;
    background-color: #222;
    height: fit-content;
    color: #ecf0f1;
    position: relative;
    bottom:0;
    /* text-align: center; */
}
.footer a{
    color: #dbdbdb;
    text-decoration: none;
    font-size: 13px;
    line-height: 30px;
}
.footer a:hover{
    color: white;
    transition: color,1s;
}
#regist{
    margin-left: 30px;
}
</style>