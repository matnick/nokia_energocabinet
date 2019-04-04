<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-nokia">

      <a class="navbar-brand" href="#">
        <img src="./assets/img/logo_nokia.svg" height="25">
      </a>

    </nav>

  </div>
</template>

<script>
  import Vue from "vue";
  import VueTimers from "vue-timers";
  Vue.use(VueTimers);

  import Axios from "axios";
  import VueAxios from "vue-axios";
  import Vue_i18n from 'vue-i18n';

  Vue.use(VueAxios, Axios, Vue_i18n);

  export default {
    components: {

    },
    data: () => ({
      frontend_version: VERSION
    }),
    timers: {

    },
    methods: {
      do_auth () {
        Vue.axios
          .post(this.$store.getters.getEnergoCabURL + "/authenticate", {
            email:"dr@dic.li",
            password:"79nN88"
          })
          .then(response => {
            this.$store.dispatch("setEnergoCabToken", response.data.token);
            console.log("Token changed. New token: " + this.$store.getters.getEnergoCabToken);
          })
          .catch(error => {
            console.log(error)
          });
      }
    },
    mounted () {
      if(this.$store.getters.getEnergoCabToken === undefined) {
        this.do_auth();
      }
    },
    computed: {
      comp_data() {
        return []
      }
    }
  }
</script>

<style scoped>

</style>