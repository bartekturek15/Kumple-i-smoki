<template>
    <div class="container-fluid p-0">
        <div id="discordpage1" class="bg-dark text-white m-0 p-0">
            <div class="container-fluid">
                <div id="discordpage" class="row"
                data-aos="fade-left"
                data-aos-offset="-150"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                >
                    <div class="col-lg-6">
                        <div class="text-start mt-sm-5 mt-5">
                            <h1 data-aos="fade-right"
                                data-aos-offset="-55"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center"
                                class="display-3 mb-3 ms-sm-4 ms-2">
                                Discord i D&D
                            </h1>
                            <p  data-aos="fade-right"
                                data-aos-offset="-75"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center" 
                                class="fs-4 ms-sm-4 ms-2">
                                Discord w ciągu ostatnich paru lat, stał się najpopularniejszym narzędziem do prowadzenia sesji online. 
                                Dzięki Opcją jak Wideorozmowa, udostępnianie ekranu czy kanały tekstowe. Dołącz do naszego serwera "Kumple i smoki"
                               
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mt-5 mx-auto mb-5 mb-sm-0 me-1 discordwid text-center"><iframe src="https://discord.com/widget?id=1148915780415651880&theme=dark" 
                            width="325" height="475" allowtransparency="true" frameborder="0" 
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            data-aos="fade-left"
                            data-aos-offset="-75"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"></iframe>
                    </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: "discordpage",
        }

</script>

<style>

    
    .discordwid {
        opacity: 90%;
        
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

    #discordpage1 {
        min-height: 75vh;
        
    }

    @media screen and (max-width:  768px) {
            #discordpage1 {
                min-height: 60vh;
                
    }
        }
    #discordpage {
        min-height: 75vh;
        background-image: url("/banerdnd.png");
        background-size: 100% 100%;
    }

    @media screen and (max-width:  768px) {
            #discordpage {
                min-height: 75vh;
                background-image: none;
                
            }
        }

</style>