<template>
    <div class="container-fluid">
        <div class="row">
            <h1 data-aos="fade-right"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="display-6 text-light text-center mt-5">Wybierz jedna z kategorii, która chcesz przejrzeć:</h1></div>
        <div class="row justify-content-center">
            <div data-aos="fade-up"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                 class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-1 ms-lg-3">
                <router-link style="text-decoration: none" to="/Czary">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Czary</h2>
                            <img class="d-block mx-auto" src="/dndspellbookicon.png" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Czary</h2>
                            <img class="d-lg-none d-md-block" src="/dndspellbookicon.png" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-down"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Przeciwnicy">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Przeciwnicy</h2>
                            <img class="d-block mx-auto" src="/spiked-dragon-headwhite.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Przeciwnicy</h2>
                            <img class="d-lg-none d-md-block" src="/spiked-dragon-headwhite.svg" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-up"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Przedmioty">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Przedmioty</h2>
                            <img class="d-block mx-auto" src="/potion-svgrepo-com.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Przedmioty</h2>
                            <img class="d-lg-none d-md-block" src="/potion-svgrepo-com.svg" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-down"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Rasy">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Rasy</h2>
                            <img class="d-block mx-auto" src="/elf_4243164.png" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Rasy</h2>
                            <img class="d-lg-none d-md-block" src="/elf_4243164.png" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-up"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Podrasy">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Podrasy</h2>
                            <img class="d-block mx-auto" src="/woman-elf-facewhite.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Podrasy</h2>
                            <img class="d-lg-none d-md-block" src="/woman-elf-facewhite.svg" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-down"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3">
                <router-link style="text-decoration: none" to="/Klasy">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Klasy</h2>
                            <img class="d-block mx-auto" src="/class_icon.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Klasy</h2>
                            <img class="d-lg-none d-md-block" src="/class_icon.svg" width="50" height="50">
                        </div>
                    </div>
                </router-link>
            </div>
            <div data-aos="fade-up"
                 data-aos-offset="-500"
                 data-aos-delay="50"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                class="col-lg-1 col-md-6 col-sm-12 mt-3 mt-lg-5 lg-box ms-xl-3 ms-lg-3 me-xl-1">
                <router-link style="text-decoration: none" to="/Podklasy">
                    <div class="card p-4 bg-white">
                        <div class="d-none d-lg-block text-center">
                            <h2 class="d-block">Podklasy</h2>
                            <img class="d-block mx-auto" src="/subclass_icon.svg" width="50" height="50">
                        </div>
                        <div class="d-lg-none d-flex justify-content-between">
                            <h2 class="d-lg-none d-md-block">Podklasy</h2>
                            <img class="d-lg-none d-md-block" src="/subclass_icon.svg" width="50" height="50">
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
    components: { RouterLink },
    
};
</script>

<style scoped>
    
    *{
        font-size: 1.35rem;
    }
    @media screen and (min-width:  992px) {
        .lg-box {
            border-radius: 5px;
            width: 200px;
        }
    }
    
</style>