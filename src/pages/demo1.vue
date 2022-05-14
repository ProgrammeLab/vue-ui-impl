<script setup lang="ts">
import { ref, VNode } from "vue";
import AvatarVue from "../components/Avatar.vue";
import CircleBtn from "../components/CircleBtn.vue";
const active = ref(1);

function mouseClick(e: any) {
  let vnode = e.currentTarget.__vnode;
  if (vnode.type !== "li") return;
  else {
    active.value = Number(vnode.key);
  }
}
</script>
<template>
  <div class="main-layout">
    <aside>
      <div class="i-ic-round-apps" style="height: 2.5em; width: 2.5em"></div>
      <ul>
        <li
          @click.stop="mouseClick"
          :class="active === 1 ? 'menu-active' : ''"
          key="1"
        >
          <div v-if="active === 1" class="i-mdi:lightning-bolt"></div>
          <div v-else class="i-ri:flashlight-line"></div>
        </li>
        <li
          @click="mouseClick"
          :class="active === 2 ? 'menu-active' : ''"
          key="2"
        >
          <div v-if="active === 2" class="i-mdi:tshirt-crew"></div>
          <div v-else class="i-mdi:tshirt-crew-outline"></div>
        </li>
        <li
          @click="mouseClick"
          :class="active === 3 ? 'menu-active' : ''"
          key="3"
        >
          <div v-if="active === 3" class="i-mdi:shoe-sneaker"></div>
          <div v-else class="i-tabler:shoe"></div>
        </li>
        <li
          @click="mouseClick"
          :class="active === 4 ? 'menu-active' : ''"
          key="4"
        >
          <div v-if="active === 4" class="i-mdi:heart"></div>
          <div v-else class="i-mdi:heart-outline"></div>
        </li>
        <li
          @click="mouseClick"
          :class="active === 5 ? 'menu-active' : ''"
          key="5"
        >
          <div v-if="active === 5" class="i-ic:round-settings"></div>
          <div v-else class="i-ph:gear-six"></div>
        </li>
      </ul>
      <avatar-vue></avatar-vue>
    </aside>
    <main>
      <header>
        <div class="header-title">ShopList</div>
        <div class="header-meta">
          <div
            class="i-ic-round-search"
            style="height: 1.5em; width: 1.5em"
          ></div>
          <input type="text" placeholder="Search Something..." />
          <circle-btn>
            <div class="i-ic-round-logout"></div>
          </circle-btn>
          <circle-btn style="background: #333; color: #fff">
            <div class="i-ri-shopping-bag-3-line"></div>
          </circle-btn>
        </div>
      </header>
      <section class="content">
        <div class="main-item">
          <div class="item-folder">
            <div class="indicators">
              <div class="dot" style="background: #0094ff"></div>
              <div class="dot" style="background: #333"></div>
              <div class="dot" style="background: #fff"></div>
            </div>
            <div class="item-cover">
              <img src="../assets/coat.png" alt="" />
              <div class="item-description">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    margin: 16px 0;
                  "
                >
                  <span class="header-title"> Satin Shirt Dress </span>
                  <span class="price"> $59</span>
                </div>
                <div class="item-comment">
                  Midi design. Flared design. Flowy
                </div>
                <div class="item-comment">
                  fabric. Shirt-style. Satin finish.
                </div>
              </div>
            </div>
            <div class="item-cover"></div>
            <div class="item-cover"></div>
            <div class="collect">
              <i
                class="i-mdi:heart"
                style="color: #fff; width: 1.5rem; height: 1.5rem"
              ></i>
            </div>
          </div>
          <div class="bottom-btn-group">
            <div class="choose-size">
              <span>SIZE:</span>
              <span class="size"
                >S
                <div
                  style="display: inline-block"
                  class="i-ri-arrow-down-s-line"
                ></div
              ></span>
            </div>
            <button class="add-to-cart">Add to cart</button>
          </div>
        </div>
        <div class="shopping-list">
          <div class="item-comment">YOU MAY ALSO LIKE:</div>
          <div class="recommend-container">
            <div class="rcm-item">
              <img src="../assets/dress.png" alt="" />
              <div class="detail">
                <div class="detail-desc">
                  <span class="item-name">Night Business Dress</span>
                  <span class="price">$ 230</span>
                </div>
                <div class="detail-det">
                  <span class="sort-name">Pleated Shirt</span>
                  <span class="collect-btn">
                    <div class="i-mdi:heart"></div>
                  </span>
                </div>
              </div>
            </div>
            <div class="rcm-item">
              <img src="../assets/dress1.png" alt="" />
              <div class="detail">
                <div class="detail-desc">
                  <span class="item-name">Night Business Dress</span>
                  <span class="price">$ 230</span>
                </div>
                <div class="detail-det">
                  <span class="sort-name">Pleated Shirt</span>
                  <span class="collect-btn">
                    <div class="i-mdi:heart"></div>
                  </span>
                </div>
              </div>
            </div>
            <div class="rcm-item">
              <img src="../assets/logo.png" alt="" />
              <div class="detail">
                <div class="detail-desc">
                  <span class="item-name">Night Business Dress</span>
                  <span class="price">$ 230</span>
                </div>
                <div class="detail-det">
                  <span class="sort-name">Pleated Shirt</span>
                  <span class="collect-btn">
                    <div class="i-mdi:heart"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="activities">
            <img src="../assets/discount.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped>
ul {
  padding: 0;
  list-style: none;
}
ul > li {
  margin: 30px 0;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
}
ul li div {
  width: 24px;
  height: 24px;
}
ul li:hover {
  background-color: #fff;
}
.menu-active {
  background-color: #fff;
}
.main-layout {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  padding: 30px 0;
  background-image: linear-gradient(
    145deg,
    rgba(118, 132, 179, 0.8),
    rgba(157, 191, 183, 0.8),
    rgba(222, 171, 185, 0.8)
  );
  backdrop-filter: blur(6px);
}
aside {
  height: 100%;
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #87909a;
  float: left;
  box-sizing: border-box;
  padding: 20px 0;
}
main {
  flex: 1;
  padding: 20px 40px;
}
header {
  display: flex;
  justify-content: space-between;
}
.header-title {
  font-size: 1.5em;
  font-weight: bolder;
}
header > .header-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 190px;
}
header > .header-meta > input {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 4rem 0.5rem 1rem;
  margin-right: 100px;
  margin-left: 20px;
  background: rgba(0, 0, 0, 0);
}
header > .header-meta > input:focus {
  outline: auto;
}
.content {
  display: flex;
  height: 100%;
}
.content > div {
  height: 100%;
}
.content > .main-item {
  flex: 1;
}
.item-folder {
  min-height: 80%;
  margin: 20px 0;
  position: relative;
}
.item-folder > .indicators {
  position: absolute;
  z-index: 10;
  top: 30%;
  left: 5%;
}
.item-folder > .indicators > .dot {
  width: 24px;
  height: 24px;
  margin: 20px;
  border-radius: 100%;
  box-shadow: 0 0 10px 1px #8f8f8f;
}
.item-cover {
  width: 450px;
  height: 100%;
  position: absolute;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    to top,
    rgba(244, 232, 236, 0.05),
    rgba(246, 244, 240, 1)
  );
  /* background-color: rgba(255, 255, 255, 0.8); */
  transform-origin: right bottom;
}
.item-cover > img {
  height: 60%;
  object-fit: cover;
}
.bottom-btn-group {
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
}
.add-to-cart {
  border: none;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  height: 48px;
  padding: 0 2.5rem;
}
.choose-size {
  height: 48px;
  line-height: 48px;
  border: 1px solid #5f5f5f;
  width: 100px;
  border-radius: 8px;
  padding: 0 0.5rem;
  margin: 0 20px 0 100px;
  display: flex;
  justify-content: space-around;
}
.size {
  font-weight: bolder;
}
.price {
  color: #8f8f8f;
  font-weight: bolder;
  font-size: 1.5rem;
}
.item-description {
  margin: 20px 40px;
}
.item-comment {
  color: #8f8f8f;
  margin: 8px 0;
}
.item-cover:nth-of-type(2) {
  z-index: 9;
}
.item-cover:nth-of-type(3) {
  z-index: 8;
  transform: scale(0.9) rotate(5deg);
}
.item-cover:nth-of-type(4) {
  z-index: 7;
  transform: scale(0.8) rotate(10deg);
}
.collect {
  position: absolute;
  z-index: 10;
  width: 64px;
  height: 64px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  top: -32px;
  left: 350px;
}
.shopping-list {
  flex: 1;
  padding: 20px 180px;
  box-sizing: border-box;
}
.rcm-item {
  height: 100px;
  display: flex;
  padding: 20px;
  border-bottom: 2px solid #9f9f9f;
}
.rcm-item > img {
  margin-right: 30px;
  min-width: 100px;
  border-radius: 20px;
}
.rcm-item:nth-last-child(1) {
  border-bottom: none;
}
.detail {
  flex-grow: 1;
}
.detail-desc {
  display: flex;
  justify-content: space-between;
}
.item-name {
  flex-basis: 185px;
  font-size: 1.5rem;
  font-weight: bolder;
}
.detail-det {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.detail-det > .sort-name {
  color: #686d67;
  font-weight: bold;
}
.activities {
  height: 150px;
}
.activities > img {
  height: 100%;
  width: 100%;
}
</style>