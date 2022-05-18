<script setup lang="ts">
</script>
<template>
  <main class="main-layout">
    <header class="nav-header">
      <div>MENU</div>
      <div>PHONE(+86)0413-990-091</div>
    </header>
    <section class="content">
      <aside class="sidebar">
        <div class="fc">NEXT</div>
        <div class="side-label fc">
          The <a href="" style="color: #1b1814">Aussie label</a> everyone is
          talking about.
        </div>
        <div class="desc-paragraph">
          Allow us to introduce: hot list.Whether it's some much-needed
          pampering. a quickinteriors update, a cool eventto book tickets for or
          a wardrobe refresh,here's Marie Claire's edit of the bestways to
          indulge.
          <div class="shared-arrow i-ph:arrow-up-right-light"></div>
        </div>
      </aside>
      <main class="photo-content">
        <div class="description">
          <div class="page-number">/01</div>
          <div class="photo-desc-content">
            <div style="flex-basis: 100px">
              <h1>Reimagine the iconic Pliage bag</h1>
            </div>
            <div>
              <h1>Reimagine the iconic Pliage bag</h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style scoped>
.fs {
  font-size: 12px;
}
.fc {
  color: #4e3514;
}
.nav-header {
  background-color: #181818;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(150, 149, 149, 0.5);
  padding: 0 80px;
}
.main-layout {
  min-height: 100vh;
}
.content {
  display: flex;
  min-height: calc(100vh - 64px);
  background-color: #cdaa6d;
}
.sidebar {
  flex-basis: 400px;
  border-right: 2px solid #7b5c32;
  box-sizing: border-box;
  padding: 2rem 80px;
}
.photo-content {
  flex-grow: 1;
}
.description {
  height: 200px;
  padding: 2rem;
  box-sizing: border-box;
  border-bottom: 2px solid #7b5c32;
}
.side-label {
  font-size: 4rem;
  margin: 2rem 0;
  color: #1b1814;
}
.desc-paragraph {
  width: 90%;
  position: relative;
}
.shared-arrow {
  position: absolute;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  right: -20px;
}
.photo-desc-content {
  display: flex;
}
</style>