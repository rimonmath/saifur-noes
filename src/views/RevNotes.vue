<template>
  <div class="full-page">
    <b-container class="page-intro" style="padding-top: 120px">
      <b-row>
        <b-col sm="8" offset-sm="2" class="text-center">
          <h1 class="page-title page-title--small">
            {{ activePageData.pageTitle }}
          </h1>
          <br /><br />
        </b-col>
      </b-row>
    </b-container>

    <div class="main-page mt-5">
      <b-container class="main-page__container">
        <div class="text-center">
          <img src="/img/ad.png" alt="" />
        </div>
        <b-row>
          <b-col md="8" offset-md="2">
            <p class="font-18">
              <i>Choose subject:</i>
            </p>

            <div class="subject-list" v-if="(activePageData.cols = 2)">
              <div
                class="subject-list__item"
                v-for="subject in activePageData.subjects"
                :key="subject.icon"
              >
                <b-row>
                  <b-col md="6">
                    <b-link :to="subject.url">
                      <img :src="subject.icon" alt="" />
                    </b-link>
                  </b-col>

                  <b-col md="6">
                    <b-link :to="subject.url1">
                      <img :src="subject.icon1" alt="" />
                    </b-link>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <!-- <b-col md="6">
            <list-card card-title="IGCSE" :items="igcseItems"> </list-card>
          </b-col>

          <b-col md="6">
            <list-card card-title="IAL" :items="ialItems" bgType="right">
            </list-card>
          </b-col> -->
        </b-row>

        <div class="text-end mt-4">
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fshawonnotes&amp;width=450&amp;layout=standard&amp;action=like&amp;size=small&amp;share=false&amp;height=35&amp;appId"
            width="230"
            height="35"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </b-container>

      <the-footer></the-footer>
    </div>
    <div class="page-bg"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginForm from "@/components/segments/LoginForm.vue";
export default {
  data: () => ({
    pageData: {
      igcse: {
        pageTitle: "IGCSE Edexcel Revision Notes",
        cols: 2,
        subjects: [
          {
            name: "",
            icon: "/img/subjects/biology.png",
            url: "/note-details/igcse/biology",
            name1: "",
            icon1: "/img/subjects/chemistry.png",
            url1: "/note-details/igcse/chemistry",
          },
          {
            name: "",
            icon: "/img/subjects/ict.png",
            url: "/note-details/igcse/ict",
            name1: "",
            icon1: "/img/subjects/physics.png",
            url1: "/note-details/igcse/physics",
          },
          {
            name: "",
            icon: "/img/subjects/math-b.png",
            url: "/note-details/igcse/math-b",
            name1: "",
            icon1: "/img/subjects/fpmath.png",
            url1: "/note-details/igcse/fpmath",
          },
        ],
      },
    },
  }),
  computed: {
    activePageData() {
      let revType = this.$route.params.type || "igcse";
      console.log(revType);
      return this.pageData[revType];
    },
  },
  methods: {},
};
</script>

<style>
.page-bg {
  height: 555px;
}

.browse-button {
  color: #fff !important;
}

.subject-list__item {
  border-bottom: 1px solid #eee;
  padding: 11px 0;
}

.subject-list__item:last-child {
  border-bottom: none;
}

.font-18 {
  font-size: 18px;
}
</style>
