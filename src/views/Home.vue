<template>
  <div class="full-page">
    <b-container class="page-intro" style="padding-top: 120px">
      <b-row>
        <b-col sm="8" offset-sm="2" class="text-center">
          <h1 class="page-title">Study less. Learn more.</h1>
          <span class="page-subtitle">
            Compiled resources for IGCSE and IAL to save your time
          </span>
          <div class="mt-5">
            <a href="#about" title="Browse">
              <b-button
                variant="info"
                size="lg"
                class="browse-button mb-5 mb-md-0"
              >
                BROWSE
              </b-button>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="main-page mt-5">
      <b-container class="main-page__container">
        <b-row>
          <b-col md="6">
            <list-card card-title="IGCSE" :items="igcseItems"> </list-card>
          </b-col>

          <b-col md="6">
            <list-card card-title="IAL" :items="ialItems" bgType="right">
            </list-card>
          </b-col>
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
    igcseItems: [
      { name: "Revision Notes", url: "/revision-notes" },
      { name: "Past Papers", url: "/past-papers" },
      { name: "Specifications", url: "/specifications" },
    ],
    ialItems: [
      { name: "Revision Notes", url: "/revision-notes" },
      { name: "Past Papers", url: "/past-papers" },
      { name: "Specifications", url: "/specifications" },
    ],
  }),
  methods: {},
};
</script>

<style>
.browse-button {
  color: #fff !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  padding-left: 33px !important;
  padding-right: 33px !important;
  font-size: 12px !important;
  font-weight: 400 !important;
}
</style>
