<template>
    <div>
    </div>
  <div class="gif-div">
    <div class="gif-pic">
     <img class="gif" v-show="display[0]" src="../assets/img/test.png" />
    <img class="gif" v-show="display[1]" src="../assets/img/test_1.png" />
    <img class="gif" v-show="display[2]" src="../assets/img/test.png" />
    <img class="gif" v-show="display[3]" src="../assets/img/test_1.png" />
    </div>
    <div>
      <el-radio-group v-model="selectedItem" @change="updateDisplay" style="margin-bottom:20px">
        <el-radio-button label="0">精美UI</el-radio-button>
        <el-radio-button label="1">极速下载</el-radio-button>
        <el-radio-button label="2">方便管理</el-radio-button>
        <el-radio-button label="3">支持BT种子</el-radio-button>
    </el-radio-group>
    </div>
    
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "ProductDisplay",
  setup() {
    let display = ref([true,false,false,false]);
    let selectedItem=ref("0");
    changeGifInterval();


    function updateDisplay(){
      display.value.fill(false); 
      display.value[Number(selectedItem.value)] = true; 
    }
    function changeGifInterval(){
      setInterval(()=>{
        if(selectedItem.value=="3"){
          selectedItem.value="0";
        }
        else {
          let numSelectedItem=Number(selectedItem.value);
          numSelectedItem++;
          selectedItem.value=String(numSelectedItem);
        }
        display.value.fill(false);
        display.value[Number(selectedItem.value)] = true;
      },3000);
    }
    return {
      display,
      selectedItem,
      updateDisplay,
      changeGifInterval
    };
   
  },
};
</script>
<style scoped>
.gif-div{
    text-align: center;
}
.gif{
    width: 60vw;
}
.gif-pic{
  border-radius: 50px;
  margin-bottom: 50px
}
</style>
