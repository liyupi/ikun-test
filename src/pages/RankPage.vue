<template>
  <div class="result-page">
    <div class="card margin-bottom-16">
      <h2 class="text-align-center margin-bottom-16 margin-top-0">
        π ikun ζθ‘ π
      </h2>
      <van-list class="margin-bottom-8 rank-list">
        <van-cell
          v-for="(userScoreInfo, index) in userScoreRankList"
          :key="index"
          :title="`${index + 1}. ${userScoreInfo?.username}`"
          :value="userScoreInfo?.score"
        />
      </van-list>
      <img
        src="https://mianshiya-1256524210.cos.ap-shanghai.myqcloud.com/jiwu.gif"
        class="margin-bottom-8"
        style="width: 100%; background-size: 110% 110%"
      />
      <van-button type="primary" block @click="goBack">θΏε</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, Ref, ref } from "vue";
import myAxios from "../plugins/myAxios";
import { Toast } from "vant";

// ζθ‘εθ‘¨
const userScoreRankList: Ref<any[]> = ref([]);

onMounted(async () => {
  // θ―·ζ±ζθ‘ζ¦
  const res: any = await myAxios.post("/user_score/list/rank", {
    size: 50,
  });
  if (res?.code === 0) {
    userScoreRankList.value = res.data;
  } else {
    Toast("θ·εε€±θ΄₯οΌθ―·ε·ζ°ιθ―");
  }
});

const router = useRouter();

/**
 * θΏεδΈδΈι‘΅
 */
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.rank-list {
  max-height: 240px;
  overflow: scroll;
}
</style>
