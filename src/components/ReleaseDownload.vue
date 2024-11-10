<template>
  <el-container>
    <div class="content-wraper" v-if="currentData">
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
    <div v-else class="empty">
      <el-empty>
      <template v-slot:description>
        项目正在开发中，暂无发行版本。
      </template>
      <el-button @click="showMotrix" plain="true" type="primary">查看重构之前的SecondDownloader的发行版本</el-button>
      </el-empty>
    </div>
   
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import { ElNotification,ElLoading } from "element-plus";


export default {
  name: "ReleaseDownload",
 
  setup() {
    const releaseData = ref([]);
    const currentData = ref([]);
    let loading;
    let fetchUrl="https://api.github.com/repos/L-Super/FlowD/releases";
    const option={
      lock: true,
      text: '正在加载中...',
      background: 'white'

    }
    let getReleaseData = async () => {
      loading=ElLoading.service(option);
      try {
        let response = await fetch(
          fetchUrl
        );
        if (!response.ok) {
          throw new Error(`Get Commit Data Status: ${response.status}`);
        }
        let data=await response.json();
        if(data==[]){
          return;
        }
        releaseData.value =data;
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
      loading.close();
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

    const showMotrix=()=>{
        fetchUrl="https://api.github.com/repos/pinsoftstudio/SecondDownloader/releases";
        getReleaseData();
    }
    onMounted(() => {
      getReleaseData();
    });

    return {
      releaseData,
      currentData,
      versionClicked,
      selectFunc,
      openUrl,
      showMotrix,
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
  background-color: rgba(29, 143, 237, 0.642) !important;
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
.empty{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
