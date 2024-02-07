<template>
    <Problem />
    <Solutions />
    <Discord />
    <Aboutus />
    <Faq />
    <Solutions />

</template>

<script>
    import axios from 'axios';
    import Navbar from '../components/Navbar.vue';
    import Problem from '../components/Problem.vue';
    import Solutions from '../components/Solutions.vue';
    import Discord from '../components/Discordpage.vue';
    import Aboutus from '../components/Aboutuspage.vue';
    import Faq from '../components/Faq.vue';
    export default {
    
    name: "home",
    components: {
        Navbar,
        Problem,
        Solutions,
        Discord,
        Aboutus,
        Faq
  }
    }
</script>

<style scoped>
</style>