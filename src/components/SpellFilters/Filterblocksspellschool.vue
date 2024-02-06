<template>
    <div class="container-full filter">
        <div class="input-group">
            <button class="btn my-button btn-outline-light w-100 dropdown-toggle" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filtruj po szkole czaru</button>
        <ul class="dropdown-menu w-100">
            <li v-for="(ss, index) in spellSchool">
                <input :id="index" class="form-check-input ms-1" type="checkbox" name="selected_assets">
                <label :for="index" class="form-check-label ms-1">
                    {{ ss }}
                </label>
            </li>
            
        </ul>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "Filterblocksspelllevel",
    data() {
        return {
            spellSchool: ["Abiuracja", "Zmiana", "Zaklinanie", "Wróżenie", "Czarowanie", "Iluzja", "Inwokacja", "Nekromancja"]
        }
    }
};
    </script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");
    @media screen and (min-width:  768px) {
        .filter {
        max-width: 25vw;

    }
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
    .cb1 {
        accent-color: #000000;
    }
    
</style>
