<template>
  <el-container>
    <div class="content-wraper">
      <el-aside class="aside-layout">
        <el-menu
          class="aside"
          @select="selectFunc"
          :unique-opened="true"
          default-active="0"
        >
          <el-menu-item
            v-for="(minor, index) in releaseData"
            :key="minor"
            :index="index.toString()"
            @click="versionClicked(index)"
          >
            {{ minor.tag_name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <h1>{{ currentData.name }}</h1>
        <!-- <div class="update-details">
          <p>{{ currentData.body }}</p>
        </div> -->
        <el-table :data="currentData.assets" class="table">
          <el-table-column prop="name" label="文件名称"></el-table-column>
          <el-table-column prop="download_count" label="下载次数"></el-table-column>
          <el-table-column label="操作">
            <template  #default="{ }">
              <el-button
                @click="openUrl(currentData.assets[0].browser_download_url)"
                type="primary"
                size="small"
              >
                下载
              </el-button>
            </template>
          </el-table-column>
        </el-table>
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
    const currentData = ref([]);

    const getReleaseData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/agalwood/Motrix/releases"
        );
        if (!response.ok) {
          throw new Error(`Get Commit Data Status: ${response.status}`);
        }
        releaseData.value = await response.json();
        currentData.value=releaseData.value[0];
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

    const selectFunc = (index) => {
        currentData.value = releaseData.value[index];
    };

    const openUrl=(url)=>{
        window.open(url,'_blank');
    }
    onMounted(() => {
      getReleaseData();
    });

    return {
      releaseData,
      currentData,
      versionClicked,
      selectFunc,
      openUrl
    };
  },
};
</script>
<style scoped>
.aside{
    border-radius: 10px;
}
.el-menu-item:first-child{
    border-top-left-radius: 10px;
    border-top-right-radius:10px;
}
.el-menu-item:last-child{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius:10px;
}
.el-menu-item.is-active {
  background-color: #57b2f8 !important;
  color: #fff;
  width: fit-content;
}
.aside-layout {
  width: fit-content;
}
.content-wraper {
  display: flex;
  flex-direction: row;
}
.update-details {
    overflow-y: scroll;
    overflow-x:hidden;
    word-wrap:break-word;  
    word-break:break-all;
  border-radius: 10px;
  
  width: calc(100vw - 50px - 80px);
    height: 30vh;
  background-color: white;
  box-shadow: 0 3px 18px #00000020;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.table{
    margin-top: 15px;
    width: calc(100vw - 140px);
    
}
</style>
