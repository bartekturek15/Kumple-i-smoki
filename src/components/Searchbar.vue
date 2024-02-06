<template>
    <div class="container-full">
        <div class="container">
            <div class="row justify-content-left mt-5 searchbar">
                <input @input="$emit('search', $event.target.value)" class="form-control mr-sm-2" type="search" placeholder="Wyszukaj" aria-label="Search">
            </div>
        </div>
    </div>  
</template>

<script>

export default {
    name: "Searchbar",
    emits: ['search']
   
};
    </script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");
    
    @media screen and (min-width:  768px) {
        .searchbar {
        min-width: 25vw;

        }
      }
      @media screen and (max-width:  768px) {
        .searchbar {
            min-width: 93vw;
            
        }
      }
    body{
        background-color:#eee;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
    }
    
</style>
