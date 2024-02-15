<template>
    <div style="color: white" class="container">
        <h2 class="text-center mt-5" >Wiemy, że wszyscy czekają z niecierpliwością na sesje online,
        <br />  ale musicie jeszcze trochę poczekać, pracujemy nad tym.</h2>
        <p class="text-center fs-5">-Ekipa Kumple i Smoki</p>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Problem from '../components/Problem.vue';
    import Solutions from '../components/Solutions.vue';
    export default {
    name: "onlineSession",
    components: {
        Navbar,
        Problem,
        Solutions
  }
    }
</script>

<style scoped>
</style>