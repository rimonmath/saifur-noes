<template>
  <b-container>
    <header class="header">
      <div class="header__left">
        <img class="header__logo" src="/img/logo.png" alt="" />
      </div>
      <div class="header__right">
        <the-navbar></the-navbar>
      </div>
    </header>
  </b-container>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
}
.header__left {
  display: flex;
  align-items: center;
}

.header__right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.header__logo {
  max-height: 50px;
}
</style>