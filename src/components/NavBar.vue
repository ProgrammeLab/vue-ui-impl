<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "vue";

const INTERVAL = 200;
const header = ref<any>();
const isOpen = ref<boolean>(true);
const statusIcon = computed(() => {
  return isOpen.value ? "i-carbon:arrow-up" : "i-carbon:arrow-down";
});
const headerAnimationClass = computed(() => {
  return isOpen.value ? "open-anim" : "close-anim";
});
const config = ref({
  isMouseDown: false,
  previousTime: 0,
  startX: 0,
  startY: 0,
  scrollLeft: 0,
  scrollTop: 0,
});
onMounted(() => {
  header.value.scrollLeft = 0;
  // header.value.scrollLeft = 40;
});
function handleMouseDown(e: MouseEvent) {
  config.value.isMouseDown = true;
}
function handleMouseMove(e: MouseEvent) {
  // throttle
  if (
    Date.now() - config.value.previousTime > INTERVAL &&
    config.value.isMouseDown
  ) {
    console.log(e.movementX);
    header.value.scrollLeft -= e.movementX;
  }
}
function handleMouseUp(e: MouseEvent) {
  config.value.isMouseDown = false;
  config.value.previousTime = new Date().getTime();
}
function previewClick() {
  console.log("hello world");
}
// header的开关
function handleMenuStatusClick() {
  isOpen.value = !isOpen.value;
  console.log(headerAnimationClass, statusIcon);
}
</script>
<template>
  <header
    @mousedown.capture.stop="handleMouseDown"
    @mousemove.capture.stop.prevent="handleMouseMove"
    @mouseup.capture.stop="handleMouseUp"
    class="nav"
    :class="headerAnimationClass"
  >
    <div ref="header" class="inner-wrapper">
      <div @click="previewClick" class="box">
        <img src="../assets/demo-ui/demo1.png" alt="" />
      </div>
      <div @click="previewClick" class="box">
        <img src="../assets/demo-ui/demo1.png" alt="" />
      </div>
    </div>

    <!-- <div class="scroll-bar">
      <div class="scroll-bar-thumb"></div>
    </div> -->
  </header>
  <div @click="handleMenuStatusClick" class="drag-btn">
    <span :class="statusIcon" style="position: absolute"></span>
  </div>
</template>
<style scoped>
.nav {
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  z-index: 998;
  width: 100%;
  height: 250px;
  padding: 2rem 4rem;
  background-color: #eee;
  overflow-x: hidden;
  /* transition: opacity 0.5s; */
}
.inner-wrapper {
  display: flex;
  /* justify-content: center; */
  /* overflow-x: hidden; */
  height: 100%;
  width: 100%;
}
.drag-btn {
  width: 40px;
  height: 20px;
  position: absolute;
  z-index: 999;
  left: 50%;
  cursor: pointer;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
  display: flex;
  box-shadow: 0px 0px 15px #afafaf;
  justify-content: center;
  transform: translateX(-50%);
  transition: all 0.5s;
}
.drag-btn:hover {
  transform: translateX(-50%) scale(1.2);
}
.scroll-bar {
  width: 100%;
  height: 15px;
  margin: 4px 0;
  position: absolute;
  display: none;
  background-color: #f1f1f1;
}
.scroll-bar > .scroll-bar-thumb {
  width: 20%;
  height: 100%;
  border-radius: 10px;
  background-color: #a8a8a8;
}
.box {
  width: 300px;
  height: inherit;
  margin: 0 10px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s;
}
.box > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box:nth-child(1) {
  margin-left: 0;
}
.box:nth-child(1) {
  margin-left: 0;
}
.box:hover {
  transform: scale(1.05);
}
.nav:hover .scroll-bar {
  display: block;
}

.open-anim {
  animation: showMenu 0.6s linear forwards;
  animation-iteration-count: 1;
}
.close-anim {
  animation: closeMenu 0.8s linear forwards;
  animation-iteration-count: 1;
}

@keyframes showMenu {
  0% {
    top: -80%;
    opacity: 0.2;
  }
  70% {
    top: -30%;
    opacity: 0.7;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes closeMenu {
  0% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: -100%;
    opacity: 0;
  }
}
</style>