<template>
  <div class="index-page">
    <div class="card">
      <h2 class="text-align-center margin-bottom-16 margin-top-0">
        🐔 ikun 测试 🏀
      </h2>
      <div class="text-align-center margin-bottom-8 margin-top-0">
        测试你是真爱坤还是小黑子？
      </div>
      <div class="text-align-center" style="color: #888">
        *声明：作者系纯路人，仅提供技术支持
      </div>
    </div>
    <div class="margin-bottom-16" />
    <div class="card" v-if="!start">
      <div class="margin-bottom-16">请先输入昵称：</div>
      <van-field
        v-model="username"
        class="margin-bottom-16"
        autofocus
        placeholder="好名有机会得到更多的分数（暗号）"
      />
      <van-button
        block
        type="primary"
        class="margin-bottom-16"
        :disabled="username.length < 1"
        @click="doStart"
      >
        开始答题
      </van-button>
      <img src="../assets/kaichang.gif" style="width: 100%" />
    </div>
    <template v-if="start && currentQuestions.length > 0">
      <QuestionBoard
        :questions="currentQuestions"
        :onQuestionChange="doQuestionChange"
        :onSubmit="doSubmit"
      />
    </template>
    <audio ref="audioRef" src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/ikun-audio/niganma.aac" />
  </div>
</template>

<script setup lang="ts">
import QuestionBoard from "../components/QuestionBoard.vue";
import { onMounted, Ref, ref } from "vue";
import myAxios from "../plugins/myAxios";
import { Toast } from "vant";
import { useRouter } from "vue-router";

// 本轮题目
const currentQuestions: Ref<QuestionType[]> = ref([]);
// 输入用户名
const username = ref("");
// 是否开始
const start = ref(false);
// 控制音频
const audioRef = ref();

onMounted(async () => {
  const res: any = await myAxios.post("/question/list");
  if (res?.code === 0) {
    currentQuestions.value = res.data;
  } else {
    Toast("获取题目失败，请刷新重试");
  }
});

const router = useRouter();

/**
 * 开始答题
 */
const doStart = () => {
  start.value = true;
  audioRef.value.play();
};

/**
 * 提交结果
 * @param score
 * @param answers
 */
const doSubmit = async (score: number, answers: string[][]) => {
  const res: any = await myAxios.post("/user_score/add", {
    username: username.value,
    answers,
    questionIds: currentQuestions.value.map((question) => question.id),
  });
  if (res?.code === 0) {
    const newAddScore = res.data;
    if (newAddScore) {
      router.replace({
        path: `/result/${newAddScore.id}`,
      });
    }
  } else {
    Toast("提交失败");
  }
};

const doQuestionChange = (
  currentNum: number,
  score: number,
  answers: string[][]
) => {};
</script>

<style scoped>
.index-page {
}
</style>
