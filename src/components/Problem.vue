<template>
    <div class="container-fluid p-0">
        <div id="problem1" class="bg-dark text-white m-0 p-0">
            <div class="container-fluid">
                <div id="problem" class="row" 
                data-aos="fade-right"
                data-aos-offset="-55"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                >
                    <div class="col-lg-6">
                        <div class="text-start mt-sm-5 mt-3 ms-4">
                            <h1 data-aos="fade-right"
                                data-aos-offset="-50"
                                data-aos-delay="50"
                                data-aos-duration="800"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center"
                                class="display-3 mb-3 ms-4">
                                Kumple i smoki
                            </h1>
                            <p  data-aos="fade-right"
                                data-aos-offset="-50"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center" 
                                class="fs-4 ms-4">
                                Portal społecznościowy skierowany do osób, które chcą uprościć przygotowania do swoich sesji, 
                                znaleźć nowe pomysły lub podzielić się własnymi ze społecznością graczy D&D. 
                                Nasz projekt wyróżnia się możliwością tworzenia katalogów własnych obiektów (np. czarów i przeciwników), a także udostępnianie innym użytkownikom.
                            </p>
                            <div 
                                data-aos="fade-right"
                                data-aos-offset="-250"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center"  
                                class="container p-0 m-0">
                                <a class="ms-4 mb-5" href="">
                                    <button type="button" class="btn btn-light cta mb-4">Rozpocznij swoją przygodę!</button>
                                </a>
                        </div> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: "problem",
        }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
    .my-button {
        padding: 5px 12px;
        background-color: none;
        border-color: whitesmoke;
        color: whitesmoke;
        transition: .4s;
    }
    .my-button:hover {
        background-color: whitesmoke; 
        color: black;
    }
.cta {
    opacity: 80%;
    font-weight: 500 !important;
    padding: 12px 20px !important;
    margin: 0 !important;
}
.grow {
    transition: all .2s ease-in;
}
.grow:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.1);
}

#problem1 {
    min-height: 75vh;
    
}

@media screen and (max-width:  768px) {
        #problem1 {
            min-height: 60vh;
            
}
      }
#problem {
    min-height: 75vh;
    background-image: url("/dnd-campaigns.png");
    background-size: 100% 100%;
}

@media screen and (max-width:  768px) {
        #problem {
            min-height: 75vh;
            background-image: none;
            
        }
      }

</style>
