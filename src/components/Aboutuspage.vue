<template>
    <div class="container-fluid p-0">
        <div id="aboutuspage1" class="bg-light m-0 p-0">
            <div class="container-fluid">
                <div class="row"
                >
                    
                        <div class="col-lg-6 text-center p-3 mt-3 mb-3 d-none d-xl-block">
                            <img :src="text" class="img-fluid rounded" alt="..."
                                    @mouseover="text = '/my1.png'"
                                    @mouseleave="text = '/My.png'"
                                    data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                            >
                        </div>
                        <div class="col-lg-6 d-none d-xl-block">
                            <div class="text-start mt-sm-5 mt-3 ms-4">
                                <h1 data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                                    class="display-3 mb-3 ms-4">
                                    O nas
                                </h1>
                                <p  data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                                    class="fs-4 ms-4 mt-5 mb-5">
                                    Jesteśmy pasjonatami Dungeons & Dragons - gry, w której każdy może stać się bohaterem swojej własnej epickiej opowieści.
                                    Nasza strona to miejsce, gdzie spotykają się podróżnicy z całego globu,
                                    by dzielić się swoimi doświadczeniami, pomysłami i inspiracjami.
                        
                                </p>
                            </div>
                        </div>
            

                   
                        <div class="col-lg-6 d-xl-none">
                            <div class="text-start mt-sm-5 mt-3 ms-4">
                                <h1 data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                                    class="display-3 mb-3 ms-4">
                                    O nas
                                </h1>
                                <p  data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                                    class="fs-4 ms-4 mt-5 mb-5">
                                    Jesteśmy pasjonatami Dungeons & Dragons - gry, w której każdy może stać się bohaterem swojej własnej epickiej opowieści.
                                    Nasza strona to miejsce, gdzie spotykają się podróżnicy z całego globu,
                                    by dzielić się swoimi doświadczeniami, pomysłami i inspiracjami.
                        
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 text-center p-3 mt-3 mb-3 d-xl-none">
                            <img :src="text" class="img-fluid rounded" alt="..."
                                    @mouseover="text = '/my1.png'"
                                    @mouseleave="text = '/My.png'"
                                    data-aos="fade-right"
                                    data-aos-offset="-100"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                            >
                        </div>
                    
                    
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: "aboutuspage",
        data() {
            return {
                text: '/My.png'
            }
        },
        methods: {
            
        }
        }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }

    #aboutuspage1 {
        min-height: 55vh;
        
    }

    @media screen and (max-width:  768px) {
            #aboutuspage1 {
                min-height: 55vh;
                
    }
        }
    #aboutuspage {
        min-height: 55vh;
        background-size: 100% 100%;
    }

    @media screen and (max-width:  768px) {
            #aboutuspage {
                min-height: 55vh;
                background-image: none;
                
            }
        }

</style>