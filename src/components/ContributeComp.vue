<template>
  <div class="statics">
    <div class="overview">
      <p>总贡献次数：{{ commits }}</p>
      <el-button icon="refresh" 
      :loading="isRefreshing" 
      @click="getData(true)">刷新</el-button>
    </div>
    <h2 style="margin-top: 30px">贡献者:</h2>
    <p>感谢所有的贡献者！</p>
    <div class="contributors">
      
      <div class="contributor" v-for="(aContributor,index) in contributors" :key="aContributor" @click="contributorClicked(index)">
        <h3 style="color:white">{{aContributor.login}}</h3>
        <p style="color:white">贡献次数：{{ aContributor.contributions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "ContributeComp",
  setup() {
    const commits = ref(0);
    const isRefreshing = ref(false);
    let contributors=ref([]);

    //Get Commit data
    const GetCommitData = async (isRefresh) => {
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
        if (isRefresh) {
          setTimeout(() => {
            commits.value = data[0].contributions;
            isRefreshing.value = false;
          }, 1000);
        } else {
          commits.value = data[0].contributions;
          isRefreshing.value = false;
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        isRefreshing.value = false;
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
        contributors.value=await response.json();
        console.log(contributors.value);
        isRefreshing.value=false;

      } catch(error){
        console.error("There was a problem with the fetch operation:", error);
        isRefreshing.value = false;
      }
    };

    function getData(isRefresh){
      GetCommitData(isRefresh);
      GetContributorsData(isRefresh);
    }
    //set contributor url
    function contributorClicked(index){
      window.open(contributors.value[index].html_url,'_blank');
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
      contributors
    };
  },
};
</script>

<style scoped>
.statics {
  margin: 20px 40px;
}
.contributors{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.contributor{
  cursor: pointer;
  padding:10px;
  border-radius: 10px;
  background-image:linear-gradient(120deg,#e0c3fc ,#8ec5fc 100%);
  margin:20px 10px;
  min-width: 100px;
}
</style>
