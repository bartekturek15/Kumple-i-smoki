<template>
    <div class="wrap">
        <Problem />
        <Solutions />
        <Discord />
        <Aboutus />
        <Faq />
        <Footer />
    </div>
 
    

</template>

<script>
    import axios from 'axios';
    import Navbar from '../components/Navbar.vue';
    import Problem from '../components/Problem.vue';
    import Solutions from '../components/Solutions.vue';
    import Discord from '../components/Discordpage.vue';
    import Aboutus from '../components/Aboutuspage.vue';
    import Faq from '../components/Faq.vue';
    import Footer from '../components/Footer.vue';

    export default {
    
    name: "home",
    components: {
        Navbar,
        Problem,
        Solutions,
        Discord,
        Aboutus,
        Faq,
        Footer
  }
    }
</script>

<style scoped>
    .wrap{
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>