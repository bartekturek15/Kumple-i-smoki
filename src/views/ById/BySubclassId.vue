<template>
    <div class="container border-bottom mb-4">
        <router-link :to="linked">
            <button style="color: white;" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" >
                <img src="/chevron-leftwhite.svg" color="white" width="30" height="35" class="d-inline-block align-text-center">
                 Wróć
            </button>
        </router-link>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Usuwanie</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Czy na pewno chcesz usunąć element: {{ item.spellName }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                    <button type="button" class="btn btn-primary" @click="deleted()" data-bs-dismiss="modal">Potwierdź</button>
                </div>
                </div>
            </div>
            </div>
        <button v-if="this.delete" style="color: rgba(255, 255, 255, 0.800);" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img src="/pencil-squarewhite.svg" color="white" width="30" height="35" class="d-inline-block align-text-center">
                Usuń
            </button>
        <button style="color: rgba(255, 255, 255, 0.800);" v-if="!this.result" class="btn mt-4 ms-5 align-text-center fs-4  mb-1" type="button" @click="upVote(); changeUpvote()">
            <img src="/heartwhit.svg" color="white" width="30" height="35" class="d-inline-block align-text-center">
            Dodaj do ulubionych
        </button>
        <button style="color: rgba(255, 255, 255, 0.800);" v-if="this.result" class="btn mt-4 ms-5 align-text-center fs-4  mb-1" type="button" @click="upVote(); changeUpvote()">
            <img src="/heartwhitefull.svg" color="white" width="30" height="35" class="d-inline-block align-text-center">
            Odejmij od ulubionych
        </button>
    </div>
    <div style="background: #2e2e36;" class="container pb-4">
        <h1 class="display-6 mb-1 mt-4 fw-bold ps-5 pt-5" style="color: white;">{{ item.raceName }}</h1> <br>  
        <div class="mt-1 ps-5 pe-5 mb-5">
            <p class="d-inline fs-5" style="color: white;">
                {{ item.raceDescription }}
            </p>
        </div>
         
        <div class="ps-5 pb-3 mb-3">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Zwiększenie wyniku umiejętności:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.abilityScoreIncrease }}</p>
        </div>  
        <div class="ps-5 pb-3 mb-3">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Wiek:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.age }}</p>
        </div>
        <div class="ps-5 pb-3 mb-3">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Przynależność:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.alignment }}</p>
        </div>
        <div class="ps-5 pb-3 mb-3">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Rozmiar:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.size }}</p>
        </div>
        <div class="ps-5 pb-3 mb-3">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Szybkość:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.speed }}</p>
        </div>
        <div class="ps-5 pb-3 mb-3" v-for="(line, index) in itemCustomFeatures" :key="index_row">
            <p class="fs-5 d-inline fw-bold" style="color: white;">Custom Feature:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ line.featureDesc }}</p>
        </div>
        

        <div class="ps-5 pe-5 mb-3 pt-3">
            <table v-if="item.tableData != ''" class="table custom-table table-dark mx-auto">
                <thead>
                    <tr>
                        <th v-for="(line, index_row) in item.tableHeader" :key="index_row" scope="col">{{ line }}</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr v-for="(line, index_col) in item.tableData" :key="index_col"  class="position-relative">
                        <td v-for="(cell, index_col) in line" :key="index_col" v-if="cell != line[0]" scope="row">
                            {{ cell }}
                        </td>  
                    </tr>
                </tbody>
            </table>
        </div>
    </div>  
</template>

<script>
import axios from 'axios';


export default {
    name: "ByRaceId",
    props: ['id', 'link', 'doDelete'],
    data() {
        return {
            item: {},
            itemfeatures: {},
            itemCustomFeatures: [],
            result: null,
            linked: "/Podklasy",
            delete: null,
        }; 
    },
    created() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndSubclass/checkifupvote/' + this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.result = response.data);
    },
    methods: {
        deleted() {
            
            axios.delete('https://kumpleismokibbkservice.azurewebsites.net/api/Spell', {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                data: this.item       
            }).then(
                setTimeout(() => {
                    this.$router.push('/StworzonePodklasy')
                }, 1000))
        },
        changeUpvote() {
            this.result = !this.result
        },
        upVote() {
            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndSubclass/upvote/' +  this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            
        },
    },
    mounted() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Race/id/' + this.id)
            .then(response => this.item = response.data);
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/CustomRaceFeature/' + this.id)
            .then(response => this.itemCustomFeatures = response.data);    
        
            if(this.link == null) {
            this.linked = "/Podklasy"
            }
            else {
                this.linked = this.link
            }
            this.delete = this.doDelete
    },
};
    </script>

<style scoped>
    .btn:hover {
        border-color: white;
        border: 1px solid;
    }
    .table {
        border-collapse: separate;
        border-spacing:0 5px;
    }
    .custom-table {
        color: white;
    }
    .custom-table thead tr, .custom-table thead th {
        border-top: none;
        border-bottom: none !important; 
        
    }
    .custom-table tbody th, .custom-table tbody td {
        
        font-weight: 400;
        padding-bottom: 20px;
        padding-top: 20px;
        font-weight: 300; 
        
    }

    .custom-table tbody tr th, .custom-table tbody tr td {
        background: #27272d;
        border: none;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; 
    }
     

       
    .discolor {
        color: gray !important;    
    }
    
   .stretched-link::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        pointer-events: auto;
        content: "";
        background-color: rgba(0, 0, 0, 0);
    }

    .position-relative {
        position: relative;
    }
    
</style>
 