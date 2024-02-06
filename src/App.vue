<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import router from './router';
import Navbar from './components/Navbar.vue';
import {mapGetters} from 'vuex'


export default {
    name: "App",
    components: { router, Navbar },
    computed: {
        ...mapGetters(['user'])
    },
    mounted() {
    window.onpopstate = event => {
      if (
        this.user !== null &&
        this.$route.path == "/Logowanie"
      ) {
        this.$router.push("/");
      }
    };
  }
}
</script>

<style>

</style>
