<template>
  <div class="developing">
    <img src="../assets/svg/developing.svg" style="height: 200px" />
    <h3 id="title">正在开发中...</h3>
    <el-tag>你可以加入我们，一起为伟大的开源社区贡献力量！😘</el-tag>
    <el-button
      type="success"
      plain="true"
      style="margin-top: 30px"
      @click="joinDeveloping"
      >加入开发</el-button
    >
  </div>
</template>

<script>
export default {
  name: "NewFeature",
  setup() {
    const joinDeveloping = () => {
      window.open("https://github.com/L-Super/FlowD", "_blank");
    };
    return {
      joinDeveloping,
    };
  },
};
</script>

<style scoped>
.developing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  margin: 10px 20px;
}
</style>
