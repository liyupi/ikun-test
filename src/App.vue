<template>
  <div class="app">
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <a
        href="https://github.com/liyupi/ikun-test"
        target="_blank"
        style="font-size: 14px"
      >
        by 程序员鱼皮（工作两年半）代码已开源
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  padding: 20px 20px 50px;
  box-sizing: border-box;
  min-height: 100vh;
  background: url("./assets/0.jpeg");
  background-size: 100% 100%;
}

.main {
  max-width: 720px;
  margin: 0 auto;
}

.footer {
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer a {
  color: white;
}
</style>
