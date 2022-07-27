const questions = [
  {
    id: "1",
    name: "以下哪个不是坤坤的经典语录？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "阿巴阿巴",
      },
      {
        key: "B",
        name: "你干嘛~哎哟~",
      },
      {
        key: "C",
        name: "厉不厉害你坤哥",
      },
      {
        key: "D",
        name: "喜欢唱、跳、RAP、🏀",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "2",
    name: "怎么鉴别评论区的小黑子？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "错别字",
        score: 1,
      },
      {
        key: "B",
        name: "愤怒发言",
        score: 0,
      },
      {
        key: "C",
        name: "看头像",
        score: 2,
      },
      {
        key: "D",
        name: "藏头诗",
        score: 2,
      },
    ],
    max: 3,
  },
  {
    id: "3",
    name: "坤坤相关视频最多的弹幕是？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "鸡你太美",
        score: 3,
      },
      {
        key: "B",
        name: "你干嘛~哎哟~",
        score: 5,
      },
      {
        key: "C",
        name: "小黑子",
        score: 2,
      },
      {
        key: "D",
        name: "帅气",
        score: 0,
      },
    ],
  },
  {
    id: "4",
    name: "坤坤封神作品发布于哪一年？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "2018",
      },
      {
        key: "B",
        name: "2019",
      },
      {
        key: "C",
        name: "2020",
      },
      {
        key: "D",
        name: "2021",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "5",
    name: "《咏坤》坤，坤，坤，偶像练习生。练习两年半，_______",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "铁山靠吃遍鲜",
        score: 3,
      },
      {
        key: "B",
        name: "背带配中分",
        score: 5,
      },
      {
        key: "C",
        name: "会打篮球会唱跳",
        score: 2,
      },
      {
        key: "D",
        name: "只因你太美",
        score: 0,
      },
    ],
  },
  {
    id: "6",
    name: "肉鸡一般几年出栏？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "两年半",
      },
      {
        key: "B",
        name: "半年",
      },
      {
        key: "C",
        name: "一年",
      },
      {
        key: "D",
        name: "一年半",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "7",
    name: "坤坤最可能被什么组合选中？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "TFBoys",
        score: 0,
      },
      {
        key: "B",
        name: "火箭少女202",
        score: 3,
      },
      {
        key: "C",
        name: "中国说唱巅峰联盟",
        score: 5,
      },
      {
        key: "D",
        name: "ESO男团",
        score: 2,
      },
    ],
  },
  {
    id: "8",
    name: "悠悠球琛总是？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "职业悠悠球选手",
        score: 1,
      },
      {
        key: "B",
        name: "团长！",
        score: 5,
      },
      {
        key: "C",
        name: "开公司的",
        score: 0,
      },
      {
        key: "D",
        name: "歪果仁",
        score: 3,
      },
    ],
  },
  {
    id: "9",
    name: "以下哪句不是坤坤的歌词？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "哎呦 everybody 在你头上爆扣！",
      },
      {
        key: "B",
        name: "cause i got a crush on you who you",
      },
      {
        key: "C",
        name: "Baby just hug me hug me",
      },
      {
        key: "D",
        name: "你轻轻一个吻，我疯狂体会",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "10",
    name: "坤坤有什么爱好？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "养鸡",
        score: 1,
      },
      {
        key: "B",
        name: "唱",
        score: 1,
      },
      {
        key: "C",
        name: "RAP",
        score: 1,
      },
      {
        key: "D",
        name: "学习",
        score: 1,
      },
      {
        key: "E",
        name: "钢琴",
        score: 0,
      },
      {
        key: "F",
        name: "律师函警告",
        score: 1,
      },
      {
        key: "G",
        name: "画饼",
        score: 0,
      },
    ],
    max: 5,
  },
  {
    id: "11",
    name: "键盘上的哪个按键是为坤坤专门定制的？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "Ctrl",
      },
      {
        key: "B",
        name: "Shift",
      },
      {
        key: "C",
        name: "Tab",
      },
      {
        key: "D",
        name: "Esc",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "12",
    name: "众所周知，铁粉是__的，钾粉是__的？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "黑色 白色",
      },
      {
        key: "B",
        name: "红色 黑色",
      },
      {
        key: "C",
        name: "红色 黄色",
      },
      {
        key: "D",
        name: "黑色 绿色",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "13",
    name: "以下哪些是坤坤的招牌动作？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "铁山靠",
        score: 2,
      },
      {
        key: "B",
        name: "捂裆功",
        score: 2,
      },
      {
        key: "C",
        name: "投篮",
        score: 0,
      },
      {
        key: "D",
        name: "甩头",
        score: 1,
      },
    ],
    max: 3,
  },
  {
    id: "14",
    name: "化学老师在黑板上写下 1S2 2S2 2P6 3S2，是什么意思？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "氢氧化钠",
        score: 0,
      },
      {
        key: "B",
        name: "基阙实钛镁",
        score: 2,
      },
      {
        key: "C",
        name: "基态镁",
        score: 5,
      },
      {
        key: "D",
        name: "基妮钛镁",
        score: 3,
      },
    ],
  },
  {
    id: "15",
    name: "如何有力回击小黑子？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "凭什么酸我们家坤坤？",
      },
      {
        key: "B",
        name: "哥哥下蛋你别吃",
      },
      {
        key: "C",
        name: "承认别人优秀很难么？",
      },
      {
        key: "D",
        name: "一个梗玩几年了有意思吗？",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "16",
    name: "你们有没有爱心啊，坤坤知道你们黑他真的会难过的，这几天气的都不__了？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "下蛋",
        score: 5,
      },
      {
        key: "B",
        name: "打篮球",
        score: 0,
      },
      {
        key: "C",
        name: "打鸣",
        score: 5,
      },
      {
        key: "D",
        name: "发新歌",
        score: 0,
      },
    ],
  },
  {
    id: "17",
    name: "你们别再黑坤坤了，他真的很好，昨天要不是他__，我上班就差点迟到了",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "做饭",
        score: 5,
      },
      {
        key: "B",
        name: "唱Rap",
        score: 2,
      },
      {
        key: "C",
        name: "打篮球",
        score: 1,
      },
      {
        key: "D",
        name: "打鸣",
        score: 5,
      },
    ],
  },
  {
    id: "18",
    name: "春风又绿江南岸，_____________",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "明月何时照我还",
        score: 0,
      },
      {
        key: "B",
        name: "练习时长两年半",
        score: 5,
      },
      {
        key: "C",
        name: "钟山只隔数重山",
        score: 0,
      },
      {
        key: "D",
        name: "最爱中分背带裤",
        score: 2,
      },
    ],
  },
  {
    id: "19",
    name: "清明时节雨纷纷，_____________",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "路上行人欲断魂",
      },
      {
        key: "B",
        name: "牧童遥指杏花村",
      },
      {
        key: "C",
        name: "路上行人梳中分",
      },
      {
        key: "D",
        name: "借问酒家何处有",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "20",
    name: "狗熊岭的小动物们想吃烧烤，大家都来帮忙。但吉吉国王一直在摸鱼，于是熊大很生气，一下就把手里搬的煤气罐放在地上，说: _______",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "吉你抬煤",
      },
      {
        key: "B",
        name: "你去抬煤",
      },
      {
        key: "C",
        name: "我不干了",
      },
      {
        key: "D",
        name: "吉吉是狗",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "21",
    name: "为了证明你是真ikun，你干嘛～ 后面应该接什么?",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "哈哈～哎呦～你好烦～",
        score: 5,
      },
      {
        key: "B",
        name: "哎呦～你好烦～",
        score: 3,
      },
      {
        key: "C",
        name: "哎呦～好烦～",
        score: 0,
      },
      {
        key: "D",
        name: "你好烦～哎呦～",
        score: 2,
      },
    ],
  },
  {
    id: "22",
    name: "以下哪些是坤坤的优秀二创？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "电竞维塔斯",
        score: 0,
      },
      {
        key: "B",
        name: "我是养鸡的",
        score: 2,
      },
      {
        key: "C",
        name: "放荡不羁电音之舞",
        score: 2,
      },
      {
        key: "D",
        name: "仙剑鸡侠传",
        score: 1,
      },
      {
        key: "E",
        name: "巴黎剩母",
        score: 0,
      },
    ],
    max: 3,
  },
  {
    id: "23",
    name: "通过纣王的不懈努力妲己终于怀孕了，不幸的是，有一天妲己散步的时候被一块石头绊倒了，栽了下去，流产了，纣王看到崩溃地大喊：___！____！！！",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "我的妲己",
        score: 0,
      },
      {
        key: "B",
        name: "己你胎没",
        score: 2,
      },
      {
        key: "C",
        name: "己你石栽使胎没",
        score: 3,
      },
      {
        key: "D",
        name: "己你这么不小心",
        score: 0,
      },
    ],
    max: 2,
  },
  {
    id: "24",
    name: "等他老了，容颜消失了，你们这些 ikun 肯定不会再去喜欢他，但我们这些小黑子依旧会尊称他一声鸡哥，_______，________",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "基尼实在是太美",
        score: 0,
      },
      {
        key: "B",
        name: "巅峰产生虚伪的拥护",
        score: 3,
      },
      {
        key: "C",
        name: "哥哥下蛋你别吃",
        score: 0,
      },
      {
        key: "D",
        name: "黄昏见证虔诚的信徒",
        score: 2,
      },
    ],
    max: 2,
  },
  {
    id: "25",
    name: "怎么做才是真爱坤？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "到处爆破，怼小黑子",
        score: 0,
      },
      {
        key: "B",
        name: "买坤坤专辑，追星",
        score: 0,
      },
      {
        key: "C",
        name: "专注于做坤坤的鬼畜视频，快乐大家",
        score: 2,
      },
      {
        key: "D",
        name: "适度玩梗，提高爱豆人气和知名度",
        score: 3,
      },
    ],
    max: 2,
  },
  {
    id: "26",
    name: "别再黑鲲鲲了，他很宠粉的，昨天我过生日他给我______",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "杀了一只鸡",
        score: 3,
      },
      {
        key: "B",
        name: "下了一个蛋",
        score: 5,
      },
      {
        key: "C",
        name: "唱了一首Rap",
        score: 1,
      },
      {
        key: "D",
        name: "一张签名照",
        score: 0,
      },
    ],
  },
  {
    id: "27",
    name: "真正的 ikun 看到以下哪个球，会最兴奋？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "悠悠球",
        score: 5,
      },
      {
        key: "B",
        name: "篮球",
        score: 3,
      },
      {
        key: "C",
        name: "乒乓球",
        score: 0,
      },
      {
        key: "D",
        name: "羽毛球",
        score: 0,
      },
    ],
  },
  {
    id: "28",
    name: "坤坤最有可能代言什么游戏？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "全民养鸡",
        score: 3,
      },
      {
        key: "B",
        name: "NBA2K",
        score: 0,
      },
      {
        key: "C",
        name: "我的世界",
        score: 0,
      },
      {
        key: "D",
        name: "水果忍者",
        score: 5,
      },
    ],
  },
  {
    id: "29",
    name: "以下篮球场规则你会选择什么？",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "本篮球场禁止穿背带裤，禁止梳灰色中分",
        score: 1,
      },
      {
        key: "B",
        name: "当你听到音乐并感到想要跳舞时，请迅速离开篮球场",
        score: 1,
      },
      {
        key: "C",
        name: "如果发现有人不受控制地喊“你干嘛、你好烦”，请远离此人并呼叫工作人员",
        score: 1,
      },
      {
        key: "D",
        name: "如果有人举止怪异并且称自己练习了两年半，想和你切磋一下，请远离ta",
        score: 2,
      },
    ],
  },
  {
    id: "30",
    name: "某农民在家摘菜的时候发现菜的须根上有个不认识的昆虫，于是去问昆虫学家，结果他也不认识。后来昆虫学家说：既然这只昆虫喜欢呆在菜的须根上，就叫它_____吧",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "甄地菜",
        score: 0,
      },
      {
        key: "B",
        name: "菜须昆",
        score: 5,
      },
      {
        key: "C",
        name: "昆昆菜",
        score: 3,
      },
      {
        key: "D",
        name: "根须菜",
        score: 0,
      },
    ],
  },
];

const questionMap = {};

questions.forEach((question) => {
  questionMap[question.id] = question;
});

module.exports = {
  questions,
  questionMap,
};
