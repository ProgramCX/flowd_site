<template>
  <div class="statics">
    <div class="overview">
      <b>总贡献次数：{{ commits }}</b>
    </div>
    <h2 style="margin-top: 30px">贡献者:</h2>
    <p>感谢所有的贡献者！</p>
    <div class="contributors">
      <div
        class="contributor"
        v-for="(aContributor, index) in contributors"
        :key="aContributor"
        @click="contributorClicked(index)"
      >
        <h3 style="color: white">{{ aContributor.login }}</h3>
        <p style="color: white">贡献次数：{{ aContributor.contributions }}</p>
      </div>
    </div>
    <el-button icon="refresh" :loading="isRefreshing" @click="getData(true)"
      >刷新</el-button
    >
    <div class="license">
      <h2>MIT License</h2>
      <p>Copyright (c) 2024 L-Super</p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of
        this software and associated documentation files (the "Software"), to deal in the
        Software without restriction, including without limitation the rights to use,
        copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
        Software, and to permit persons to whom the Software is furnished to do so,
        subject to the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
      </p>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
        COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
        AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
        WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

import { ElLoading, ElNotification } from "element-plus";

export default {
  name: "ContributeComp",
  setup() {
    const commits = ref(0);
    const isRefreshing = ref(false);
    let contributors = ref([]);
    let loading;
    const option={
      lock: true,
      text: '正在加载中...',
      background: 'white'
    }
    //Get Commit data
    const GetCommitData = async (isRefresh) => {
      loading=ElLoading.service(option);
      try {
        //control button loading status
        isRefreshing.value = isRefresh;
        const response = await fetch(
          "https://api.github.com/repos/L-super/FlowD/contributors?per_page=1&anon=true"
        );
        if (!response.ok) {
          throw new Error(`Get Commit Data Status: ${response.status}`);
        }
        const data = await response.json();
        loading.close();
        if (isRefresh) {
          setTimeout(() => {
            commits.value = data[0].contributions;
            isRefreshing.value = false;
            ElNotification({
              title: "成功",
              message: "刷新数据成功！",
              type: "success",
              duration: 3000,
              position: "top-right",
            });
          }, 1000);
        } else {
          commits.value = data[0].contributions;
          isRefreshing.value = false;
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        isRefreshing.value = false;
        loading.close();
        ElNotification({
          title: "失败",
          message: "刷新数据失败！" + error,
          type: "error",
          duration: 3000,
          position: "top-right",
        });
        //https://api.github.com/repos/L-Super/FlowD/contributors
      }
    };

    //Get comtributors data
    const GetContributorsData = async (isRefresh) => {
      try {
        isRefreshing.value = isRefresh;
        const response = await fetch(
          "https://api.github.com/repos/L-Super/FlowD/contributors"
        );
        if (!response.ok) {
          throw new Error(`Get Commit Data Status: ${response.status}`);
        }
        contributors.value = await response.json();
        isRefreshing.value = false;
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        isRefreshing.value = false;
      }
    };

    function getData(isRefresh) {
      GetCommitData(isRefresh);
      GetContributorsData(isRefresh);
    }
    //set contributor url
    function contributorClicked(index) {
      window.open(contributors.value[index].html_url, "_blank");
    }
    onMounted(() => {
      getData(false);
    });

    return {
      //methods
      GetCommitData,
      GetContributorsData,
      contributorClicked,
      getData,
      //data
      commits,
      isRefreshing,
      contributors,
    };
  },
};
</script>

<style scoped>
.statics {
  margin: 20px 40px;
}
.contributors {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.contributor {
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-image: linear-gradient(120deg, #e0c3fc, #8ec5fc 100%);
  margin: 20px 10px;
  min-width: 100px;
}
.license {
  margin-top: 20px;
}
</style>
