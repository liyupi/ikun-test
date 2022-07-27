/**
 * 题目类型
 */
interface QuestionType {
  id: string;
  name: string;
  checkType: QuestionCheckType;
  options: QuestionOptionType[];
  // 标准答案，设置了该属性后，只有答案和标准答案匹配才有得分
  answer?: string[];
  // 标准答案得分
  score?: number;
  // 最大可选项
  max?: number;
}

/**
 * 题目选择类型
 */
type QuestionCheckType = "single" | "multiple";

/**
 * 题目选项类型
 */
interface QuestionOptionType {
  key: string;
  name: string;
  score: number;
}

/**
 * 结果类型
 */
interface ResultType {}
