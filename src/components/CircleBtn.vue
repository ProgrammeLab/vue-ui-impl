<template>
  <button :style="style"><slot /></button>
</template>
<script setup lang="ts">
defineProps(["style"]);
</script>
<style scoped>
button {
  background-color: transparent;
  border: 1px solid #8f8f8f;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
}
</style>