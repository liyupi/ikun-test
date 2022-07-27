<template>
  <div class="question-board card">
    <div>
      {{ currentNum }}、{{ question.name }}
      <span v-if="question.checkType === 'multiple' && question.max">（最多选 {{ question.max }} 项）</span>
      <span v-if="question.checkType === 'single'">（单选）</span>
    </div>
    <van-divider />
    <template v-if="question.checkType === 'single'">
      <van-radio-group v-model="answers[currentNum - 1][0]">
        <van-radio
          v-for="(option, idx) in question.options"
          :key="idx"
          class="margin-bottom-8"
          :name="option.key"
        >
          {{ `${option.key}. ${option.name}` }}
        </van-radio>
      </van-radio-group>
    </template>
    <template v-else>
      <van-checkbox-group v-model="answers[currentNum - 1]" :max="question.max">
        <van-checkbox
          v-for="(option, idx) in question.options"
          :key="idx"
          class="margin-bottom-8"
          :name="option.key"
          shape="square"
        >
          {{ `${option.key}. ${option.name}` }}
        </van-checkbox>
      </van-checkbox-group>
    </template>
    <div class="margin-bottom-24" />
    <van-button
      v-if="currentNum >= questions.length"
      class="margin-bottom-8"
      type="success"
      block
      :disabled="answers[currentNum - 1].length < 1"
      @click="doSubmit"
    >
      提交
    </van-button>
    <van-button
      v-if="currentNum < questions.length"
      type="primary"
      class="margin-bottom-8"
      :disabled="answers[currentNum - 1].length < 1"
      block
      @click="toNextQuestion"
    >
      下一题
    </van-button>
    <van-button
      v-if="currentNum > 1"
      class="margin-bottom-8"
      block
      @click="toPrevQuestion"
    >
      上一题
    </van-button>
    <!-- 露出鸡脚 -->
    <img
      alt="小黑子露出鸡脚了吧"
      v-if="currentScore > 15 && currentScore <= 30"
      style="width: 100%; margin: 8px 0"
      src="../assets/jijiao.jpeg"
    />
    <img
        alt="小黑子开庭别哭"
        v-if="currentScore > 30"
        style="width: 100%; margin: 8px 0"
        src="../assets/kaiting.png"
    />
    <!-- 进度 -->
    <van-progress :percentage="currentNum * 100 / questions.length" :show-pivot="false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import _ from "lodash";

interface QuestionBoardProps {
  questions: QuestionType[];
  onQuestionChange?: (
    currentNum: number,
    currentScore: number,
    answers: string[][]
  ) => void;
  onSubmit?: (currentScore: number, answers: string[][]) => void;
}

const props = withDefaults(defineProps<QuestionBoardProps>(), {
  questions: () => [],
});

const { questions, onQuestionChange, onSubmit } = toRefs(props);

// 初始化答案数组
const initAnswers: string[][] = questions.value.map(() => {
  return [];
});

// 当前题号
const currentNum = ref(1);
// 用户答案
const answers = ref(initAnswers);
// 当前题目
const question = computed(() => {
  return questions.value[currentNum.value - 1];
});
// 当前得分
const currentScore = computed(() => {
  let score = 0;
  questions.value.forEach((question, index) => {
    const userAnswer = answers.value[index];
    // 设置了标准答案，答对才得分
    if (question.answer && question.answer.length > 0) {
      if (
        userAnswer.length === question.answer.length &&
        userAnswer.length === _.union(userAnswer, question.answer).length
      ) {
        score += question.score ?? 0;
      }
    } else {
      // 无标准答案，根据选项给分
      question.options.forEach((option) => {
        // 选中了改答案
        if (userAnswer.includes(option.key)) {
          score += option.score ?? 0;
        }
      });
    }
  });
  return score;
});

/**
 * 下一题
 */
const toNextQuestion = () => {
  if (currentNum.value < questions.value.length) {
    currentNum.value++;
  }
};

/**
 * 上一题
 */
const toPrevQuestion = () => {
  if (currentNum.value > 1) {
    currentNum.value--;
  }
};

// 监听题目改变
watch(currentNum, () => {
  onQuestionChange?.value?.(
    currentNum.value,
    currentScore.value,
    answers.value
  );
});

/**
 * 提交题目
 */
const doSubmit = () => {
  onSubmit?.value?.(currentScore.value, answers.value);
};
</script>

<style scoped>
.question-board {
}
</style>
