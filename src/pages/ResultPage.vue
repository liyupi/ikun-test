<template>
  <div class="result-page">
    <div class="card" v-if="userScore">
      <div class="margin-bottom-8">
        得分：{{ userScore.score }}，排名：{{ userScore.rank }}，超过了
        {{ userScore.surpass }}% 的人
      </div>
      <div class="margin-bottom-8">鉴定你是：</div>
      <h1 class="text-align-center margin-top-0">
        {{ userScore?.result.name }}
      </h1>
      <img class="result-img" :src="userScore?.result.img" @click="jiMing" />
      <van-button
        class="margin-bottom-8"
        block
        type="primary"
        @click="toRankPage"
        >查看排行
      </van-button>
      <van-button block type="warning" @click="doRestart">重新测试</van-button>
    </div>
    <audio ref="audioRef" :src="userScore?.result.music" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref, toRefs } from "vue";
import myAxios from "../plugins/myAxios";
import { Toast } from "vant";

interface ResultPageProps {
  id: number;
}

const props = withDefaults(defineProps<ResultPageProps>(), {
  id: 0,
});

// 结果 id
const { id } = toRefs(props);
// 用户分数信息
const userScore = ref();
// 控制音频
const audioRef = ref();

onMounted(async () => {
  if (id.value <= 0) {
    return;
  }
  const res: any = await myAxios.post("/user_score/get", {
    id: id.value,
  });
  if (res?.code === 0) {
    userScore.value = res.data;
  } else {
    Toast("获取结果失败，请刷新重试");
  }
});

const router = useRouter();

/**
 * 鸡鸣
 */
const jiMing = () => {
  audioRef.value.play();
};

/**
 * 重新测试
 */
const doRestart = () => {
  router.replace({
    path: "/",
  });
};

/**
 * 跳转排行页
 */
const toRankPage = () => {
  router.push({
    path: "/rank",
  });
};
</script>

<style scoped>
.result-img {
  width: 100%;
  margin-bottom: 16px;
}
</style>
