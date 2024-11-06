<template>
  <div class="statics">
    <div class="overview">
      <p>总贡献次数：{{ commits }}</p>
      <el-button icon="refresh" :loading="isRefreshing" @click="refreshData(true)">刷新</el-button>
    </div>
    <!-- 第二个div没有类名和内容，可能是个占位符，可以移除或保留根据需要 -->
    <div class=""></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "ContributeComp",
  setup() {
    const commits = ref(0);
    const isRefreshing = ref(false);

    const refreshData = async (isRefresh) => {
      try {
        isRefreshing.value = isRefresh; 
        const response = await fetch(
          "https://api.github.com/repos/L-super/FlowD/contributors?per_page=1&anon=true"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
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

    onMounted(() => {
      refreshData(false);
    });

    return {
      refreshData,
      commits,
      isRefreshing, 
    };
  },
};
</script>

<style scoped>
.statics {
  margin: 30px 40px;
}
</style>