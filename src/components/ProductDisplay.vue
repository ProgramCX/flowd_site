<template>
    <div>
    </div>
  <div class="gif-div">
    <div class="gif-pic">
     <img class="gif" v-show="display[0]" src="../assets/gif/test.gif" />
    <img class="gif" v-show="display[1]" src="../assets/gif/test_2.gif" />
    <img class="gif" v-show="display[2]" src="../assets/gif/test_3.gif" />
    <img class="gif" v-show="display[3]" src="../assets/gif/test_4.gif" />
    </div>
    <div>
      <el-radio-group v-model="selectedItem" @change="updateDisplay">
        <el-radio-button label="0">精美的的UI</el-radio-button>
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
    function updateDisplay(){
      display.value.fill(false); 
      display.value[Number(selectedItem.value)] = true; 
    }
    return {
      display,
      selectedItem,
      updateDisplay
    };
  },
};
</script>
<style scoped>
.gif-div{
    text-align: center;
}
.gif{
    width: 85vw;
}
.gif-pic{
  border-radius: 50px;
  margin-bottom: 50px
}
</style>
