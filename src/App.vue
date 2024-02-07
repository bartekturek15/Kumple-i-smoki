<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <router-view></router-view>
    
  </div>
</template>

<script>
import router from './router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import {mapGetters} from 'vuex'


export default {
    name: "App",
    components: { router, Navbar, Footer },
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
