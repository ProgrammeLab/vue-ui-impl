<template>
  <div class="avatar">
    <img src="../assets/logo.png" alt="" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.avatar {
  width: 48px;
  height: 48px;
  clip-path: circle(100%);
}
.avatar > img {
  width: 100%;
  height: 100%;
}
</style>
