<template>
  <header>
    <div class="header-top">
      <router-link to="/">

        <div class="univ-logo-style">
          <img src="../assets/name.png" alt="">
        </div>
      </router-link>
      <div class="social-media-link">
        <img class="logo-width" src="../assets/icons8-facebook.png" alt="">
        <img class="logo-width" src="../assets/icons8-youtube.png" alt="">
        <img class="logo-width" src="../assets/icons8-インスタグラム.png" alt="">
        <img class="logo-width" src="../assets/icons8-ツイッター.png" alt="">
      </div>
    </div>
    <div class="header-top-links">
      |<router-link to="/calendarPage">
        <button type="button" class="btn btn-outline-secondary">イベント</button>
      </router-link>
      |<router-link to="/longestPage">
        <button type="button" class="btn btn-outline-secondary">コースについて</button>
      </router-link>
      |<router-link to="/tablesPage">
        <button type="button" class="btn btn-outline-secondary">入学～卒業</button>
      </router-link>
      |<router-link to="/lastPage">
        <button type="button" class="btn btn-outline-secondary">学生生活</button>
      </router-link>
      |<router-link to="/futurePage1">
        <button type="button" class="btn btn-outline-secondary">お問い合わせ</button>
      </router-link>
      |<router-link to="/futurePage2">
        <button type="button" class="btn btn-outline-secondary">アクセス</button>
      </router-link>|
      <router-link to="/futurePage3">
        <button type="button" class="btn btn-outline-secondary">先導科学研究科アーカイブ</button>
      </router-link>|
    </div>
  </header>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    };
  },
  
  methods: {
    
}
};
</script>

<style scoped>
header {
display: flex;
flex-direction: column;
padding: 52px 90px;
height: 365px;
justify-content: space-between;
}
.header-top {
display: flex;
justify-content: space-between;

}

.univ-logo-style {
width: 313.9px;
height: 108.7px;
}

.social-media-link {
display: flex;
flex-direction: row;
height: 1;
width: 200px;
justify-content: space-around;
}
.logo-width {
width: 20px;
height: 20px;
}

.header-top-links {
  display: flex;
  justify-content: space-between;
}
</style>
