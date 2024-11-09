<template>
  <el-container>
    <div class="content-wraper">
        <el-aside class="aside-layout">
      <el-menu class="aside" @select="selectFunc" :unique-opened="true"
      default-active="0">
          <el-menu-item v-for="(minor, index) in releaseData"
          :key="minor"
          :index="index.toString()"
           @click="versionClicked(index)">
            {{ minor.tag_name }}
          </el-menu-item>
      </el-menu>
        </el-aside>
        <el-main>
            <h1>{{ currentData.name }}</h1>
        </el-main>
    </div>
  </el-container>
  
</template>

<script>
import { ref, onMounted } from "vue";
import { ElNotification } from "element-plus";

export default {
  name: "ReleaseDownload",
  setup() {
    const releaseData = ref([]);
    const currentData = ref(null);

    const getReleaseData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/docmirror/dev-sidecar/releases"
        );
        if (!response.ok) {
          throw new Error(`Get Commit Data Status: ${response.status}`);
        }
        releaseData.value = await response.json();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        ElNotification({
          title: "失败",
          message: "获取数据失败！" + error,
          type: "error",
          duration: 3000,
          position: "top-right",
        });
      }
    };

    const versionClicked = (index) => {
      currentData.value = releaseData.value[index];
    };

    
    const selectFunc = () => {

    };
    onMounted(() => {
      getReleaseData();
    });

    return {
      releaseData,
      currentData,
      versionClicked,
      selectFunc,
    };
  },
};
</script>
<style scoped>
.el-menu-item.is-active {
      background-color: #57b2f8!important;
      color: #fff;
      width: fit-content;
}
.aside-layout{
    width: fit-content;
}
.content-wraper{
    display: flex;
    flex-direction: row
}
</style>
