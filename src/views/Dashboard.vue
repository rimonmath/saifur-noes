<template>
  <div class="dashboard">
    <div class="dashboard__left">
      <div class="dashboard__left-top">
        <div class="dashboard__brand">Adminton</div>
        <div class="dashboard__theme">
          <b-dropdown
            size="sm"
            left
            variant="link"
            class="dashboard__theme-dropdown"
          >
            <template #button-content>
              <fa-icon icon="palette"></fa-icon>
              <span class="ms-1"> Default </span>
            </template>

            <b-dropdown-item href="#">Default</b-dropdown-item>
            <b-dropdown-item href="#">Dark</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Theme1</b-dropdown-item>
            <b-dropdown-item href="#">Theme2</b-dropdown-item>
            <b-dropdown-item href="#">Theme3</b-dropdown-item
            ><b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Custom</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="dashboard__left-bottom">
        <sidebar></sidebar>
      </div>
    </div>
    <div class="dashboard__right">
      <div class="dashboard__right-top">
        <top-bar @avatar-clicked="showUserBar = true"></top-bar>
      </div>
      <div class="dashboard__right-bottom">
        <b-card class="m-4">
          <b-button class="mt-4 ms-4">Button</b-button>
          <b-button class="mt-4 ms-4">Button</b-button>
          <div class="mt-4"></div>

          <b-form-input class="mt-4"></b-form-input>

          <b-datepicker class="mt-4"></b-datepicker>
        </b-card>

        <b-card class="m-4">
          <b-button class="mt-4 ms-4">Button</b-button>
          <b-button class="mt-4 ms-4">Button</b-button>
          <div class="mt-4"></div>

          <b-form-input class="mt-4"></b-form-input>

          <b-datepicker class="mt-4"></b-datepicker>
        </b-card>

        <b-card class="m-4">
          <b-button class="mt-4 ms-4">Button</b-button>
          <b-button class="mt-4 ms-4">Button</b-button>
          <div class="mt-4"></div>

          <b-form-input class="mt-4"></b-form-input>

          <b-datepicker class="mt-4"></b-datepicker>
        </b-card>
      </div>
    </div>

    <transition name="fade">
      <div
        class="dashboard__userbar"
        v-show="showUserBar"
        @click="showUserBar = false"
      >
        <userbar
          :collapsed="!showUserBar"
          @close="showUserBar = false"
        ></userbar>
      </div>
    </transition>
  </div>
</template>

<script>
import Sidebar from "../components/segments/Sidebar.vue";
import Userbar from "../components/segments/Userbar.vue";
import TopBar from "../components/segments/Topbar.vue";
export default {
  data: () => ({
    showUserBar: true,
  }),
  components: {
    Sidebar,
    TopBar,
    Userbar,
  },
};
</script>

<style>
.dashboard {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

.dashboard__left {
  width: 244px;
  display: flex;
  background-color: #1f2937;
  flex-direction: column;
}

.dashboard__left-top {
  height: 66px;
  background-color: rgba(255, 255, 255, 0.06);
  display: flex;
  color: rgb(230, 230, 230);
  align-items: center;
  padding: 0 11px;
}

.dashboard__brand {
  font-weight: bold;
  flex: 1;
}

.dashboard__theme-dropdown .btn-link {
  color: #fff;
  text-decoration: none;
}

.dashboard__theme:hover {
  background: rgba(255, 255, 255, 0.05);
}

.dashboard__left-bottom {
  flex: 1;
  overflow-y: auto;
  display: flex;
}

.dashboard__right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard__right-top {
  height: 66px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 2%);
}

.dashboard__accordion {
  flex: 1;
  display: flex;
}

.dashboard__right-bottom {
  background: #ebeef2;
  flex: 1;
}

.dashboard__right-tab {
}

.dashboard__userbar {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
}
</style>
