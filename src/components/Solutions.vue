<template>
     <div class="container-fluid p-0">
        <div id="solutions" class="bg-light  m-0 p-0">
            <div class="container-fluid">
                <div class="row">
            <div    data-aos="fade-right"
                    data-aos-offset="-150"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                    class="col-lg-3 p-0 d-none d-xl-block">
                <router-link style="text-decoration: none" to="/TworzenieElementow">
                <div class="card mt-5 mx-auto" style="width: 18rem;">
                    <img src="/3.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5>{{firstSolutionTitle}}</h5>
                        <p class="card-text">Stwórz i dodaj do bazy danych elementy D&D. Takie jak klasy czy czary.</p>
                    </div>
                </div>
                </router-link>
            </div>
                <div    data-aos="fade-up"
                        data-aos-offset="-150"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                        class="col-lg-3 p-0 d-none d-xl-block">
                    <router-link style="text-decoration: none" to="/BazaDanychDnD">
                        <div class="card mt-5 mx-auto" style="width: 18rem;">
                            <img src="/1.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5>{{secondSolutionTitle}}</h5>
                                <p class="card-text">Przeglądaj elementy D&D stworzone przez innych użytkowników.</p>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
                <div    data-aos="fade-down"
                        data-aos-offset="-150"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center" 
                        class="col-lg-3 p-0 d-none d-xl-block">
                    <router-link style="text-decoration: none" to="/KartaPostaci">
                        <div class="card mx-auto mt-5" style="width: 18rem;">
                            <img src="/4.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5>{{thirdSolutionTitle}}</h5>
                                <p class="card-text">Stwórz i wypełnij kartę postaci do swojej następnej gry D&D.<br><br></p>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
                <div    data-aos="fade-left"
                        data-aos-offset="-150"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                        class="col-lg-3 p-0 d-none d-xl-block">
                    <router-link style="text-decoration: none" to="/SesjaOnline">
                        <div class="card mx-auto mt-5 mb-5" style="width: 18rem;">
                            <img src="/2.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5>{{fourthSolutionTitle}}</h5>
                                <p class="card-text">Forum, na którym możesz wyszukiwać i szukać osób do gry D&D.</p>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
                <div class="row d-xl-none">
                    <div    data-aos="fade-right"
                            data-aos-offset="-100"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"  
                            class="col-md-6 p-0">
                        <router-link style="text-decoration: none" to="/TworzenieElementow">
                            <div class="card mx-auto mt-5 me-md-5" style="width: 18rem;">
                                <img src="/3.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5>{{firstSolutionTitle}}</h5>
                                    <p class="card-text">Stwórz i dodaj do bazy danych elementy D&D. Takie jak klasy czy czary.</p>
                                </div>
                            </div>
                        </router-link>
                        
                    </div>
                    <div    data-aos="fade-left"
                            data-aos-offset="-100"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center" 
                            class="col-md-6 p-0 d-xl-none">
                        <router-link style="text-decoration: none" to="/BazaDanychDnD">
                            <div class="card mx-auto mt-5 ms-md-5" style="width: 18rem;">
                                <img src="/1.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5>{{secondSolutionTitle}}</h5>
                                    <p class="card-text">Przeglądaj elementy D&D stworzone przez innych użytkowników.</p>
                                </div>
                            </div>
                        </router-link>
                        
                </div>
                </div>
                <div class="row d-xl-none">
                    <div    data-aos="fade-right"
                            data-aos-offset="-100"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center" 
                            class="col-md-6 p-0">
                        <router-link style="text-decoration: none" to="/KartaPostaci">
                            <div class="card mx-auto mt-4 me-md-5" style="width: 18rem;">
                                <img src="/4.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5>{{thirdSolutionTitle}}</h5>
                                    <p class="card-text">Stwórz i wypełnij kartę postaci do swojej następnej gry D&D.<br><br></p>
                                </div>
                            </div>
                        </router-link>
                        
                    </div>
                    <div    data-aos="fade-left"
                            data-aos-offset="-100"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center" 
                            class="col-md-6 p-0 d-xl-none">
                        <router-link style="text-decoration: none" to="/SesjaOnline">
                            <div class="card mx-auto mt-4 mb-5 ms-md-5" style="width: 18rem;">
                                <img src="/2.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5>{{fourthSolutionTitle}}</h5>
                                    <p class="card-text">Forum, na którym możesz wyszukiwać i szukać osób do gry D&D.</p>
                                </div>
                            </div>
                        </router-link>
                        
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Solutions",
data() {
    return {
        firstSolutionTitle: "Tworzenie elementów",
        secondSolutionTitle: "Baza danych D&D",
        thirdSolutionTitle: "Karta postaci",
        fourthSolutionTitle: "Sesja online"
    }
},
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
.card{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
}

.card:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
#solutions {
    min-height: 40vh;
}
</style>
