<template>
    <div class="container-fluid">
        <div class="row">
            <h1 data-aos="fade-right"
                 data-aos-offset="-100"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="display-6 text-light text-center mt-5">Wybierz jedna z kategorii, która chcesz przejrzeć:</h1></div>
        <div class="row justify-content-center">
            <div data-aos="fade-up"
                 data-aos-offset="-100"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                 class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-1 ms-lg-3">
                <router-link style="text-decoration: none" to="/Tworzeniekartypostaci">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Stwórz kartę postaci</h2>
                            <img class="d-block mx-auto" src="/dndspellbookicon.png" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Stwórz kartę postaci</h2>
                            <img class="d-lg-none d-md-block" src="/dndspellbookicon.png" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-down"
                 data-aos-offset="-100"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Kartypostaci">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Obejrzyj karty postaci</h2>
                            <img class="d-block mx-auto" src="/spiked-dragon-headwhite.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Obejrzyj karty postaci</h2>
                            <img class="d-lg-none d-md-block" src="/spiked-dragon-headwhite.svg" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>  
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: "Searchblocks",
    components: { RouterLink }
};
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");
    *{
        font-family: 'Poppins', sans-serif;
        font-size: 1.35rem;
    }
    @media screen and (min-width:  992px) {
        .lg-box {
            border-radius: 5px;
            width: 200px;
        }
    }
    
</style>