<template>
    <div class="container border-bottom">
        <router-link :to="linked">
            <button style="color: white;" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" >
                <img src="/chevron-leftwhite.svg" color="white" width="30" height="35" class="d-inline-block align-text-center">
                 Wróć
            </button>
        </router-link>
        <button v-if="this.delete" style="color: rgba(255, 255, 255, 0.800);" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" @click="deleted()">
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
    <div style="background: #2e2e36;" class="container pb-4 mb-5">
        <h1 class="display-6 mb-1 mt-4 fw-bold ps-5 pt-5" style="color: white;">{{ item.className }}</h1> <br>  
        <div class="mt-1 ps-5 pe-5 mb-5">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.800);">
                {{ item.classDescription }}
            </p>
        </div>
        

        <div class="ps-md-5 pe-md-5 mb-3 pt-3 fs-6">
            <table v-if="item.classTableData != ''" class="table custom-table table-dark mx-auto overflow-auto">
                <thead>
                    <tr>
                        <th v-for="(line, index_row) in item.classTableHeader" :key="index_row" scope="col">{{ line }}</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr v-for="(line, index_col) in item.classTableData" :key="index_col"  class="position-relative">
                        <td style="color: rgba(255, 255, 255, 0.850);" v-for="(cell, index_col) in line" :key="index_col" v-if="cell != line[0]" scope="row">
                            {{ cell }}
                        </td>  
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="ps-md-5 pe-md-5 mb-3 pt-3 fs-6">
            <table v-if="item.spellTableData != ''" class="table custom-table table-dark mx-auto overflow-auto">
                <thead>
                    <tr>
                        <th v-for="(line, index_row) in item.spellTableHeader" :key="index_row" scope="col">{{ line }}</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr v-for="(line, index_col) in item.spellTableData" :key="index_col"  class="position-relative">
                        <td style="color: rgba(255, 255, 255, 0.850);" v-for="(cell, index_col) in line" :key="index_col" v-if="cell != line[0]" scope="row">
                            {{ cell }}
                        </td>  
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="ps-5 pe-5 mb-1 lh-1">
            <p class="fs-3 d-inline fw-bold" style="color: white;">Cechy Klasy</p>
        </div>
        <div class="ps-5 pe-5 mb-3 lh-1">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.800);">Jako {{item.className}}, otrzymujesz następujące cechy.</p>
        </div> <br> 
        <div class="ps-5 pe-5 mb-4 lh-1">
            <p class="fs-4 d-inline fw-bold" style="color: white;">Punkty życia:</p>
        </div>
        <div class="ps-5 pe-5 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Kość życia:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classHitDice}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Kość życia na 1 poziomie:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classHitPointsAtFirst}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 mb-5 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Kość życia na wyższych poziomach:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classHitPointsAtHigh}}</p>
        </div>
        
        <div class="ps-5 pe-5 mb-4 lh-1">
            <p class="fs-4 d-inline fw-bold" style="color: white;">Biegłości:</p>
        </div>
        <div class="ps-5 pe-5 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Pancerz:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classArmorProficency}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Bronie:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classWeaponProficency}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Narzędzia:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classToolsProficency}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 mb-3 lh-1">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Rzuty Obronne:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classSavingThrows}}</p>
        </div>
        <div class="ps-5 pe-5 mb-3 mb-5">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Umiejętności:</p>
            <p class="ms-3 d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">{{item.classSkills}}</p>
        </div>

        <div class="ps-5 pe-5 mb-4 lh-1">
            <p class="fs-4 d-inline fw-bold" style="color: white;">Przedmioty:</p>
        </div>
        <div class="mt-1 ps-5 pe-5 mb-5 lh-1">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">
                {{ item.classEquipment }}
            </p>
        </div>

        <div class="ps-5 pe-5 mb-4 lh-1">
            <p class="fs-4 d-inline fw-bold" style="color: white;">Zasady Multiklasowania:</p>
        </div>
        <div class="mt-1 ps-5 pe-5 mb-5 lh-1">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">
                {{ item.classMulticlassReq }}
            </p>
        </div>




        <div class="ps-5 pe-5 pb-3 mb-3" v-for="(line, index) in itemCustomFeatures" :key="index">
            <p class="fs-5 d-inline fw-bold" style="color: white;">{{ line.featureName }}:</p> 
            <p class="d-inline fs-5 ms-3" style="color: rgba(255, 255, 255, 0.850);">{{ line.featureDesc }}</p>
        </div> 
    </div>  
</template>

<script>
import axios from 'axios';


export default { 
    name: "ByClassId",
    props: ['id', 'link', 'doDelete'],
    data() {
        return { 
            item: {},
            itemfeatures: {},
            itemCustomFeatures: [],
            result: null,
            linked: "/Klasy",
            delete: null,
        }; 
    },
    created() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass/checkifupvote/' + this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.result = response.data);
    },
    methods: {
        deleted() {
            
            axios.delete('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass', {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                data: this.item       
            })
        },
        changeUpvote() {
            this.result = !this.result
        },
        upVote() {
            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass/upvote/' +  this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            
        },
    },
    mounted() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass/id/' + this.id)
            .then(response => this.item = response.data);
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/CustomDndClassFeature/' + this.id)
            .then(response => this.itemCustomFeatures = response.data);   
            
            if(this.link == null) {
            this.linked = "/Klasy"
            }
            else {
                this.linked = this.link
            } 
            this.delete = this.doDelete
    },
};
    </script>

<style scoped>
@media screen and (min-width:  992px) and (max-width:  1300px) {
            .custom-table {
                font-size: 14px;
            }
        }
    @media screen and (max-width:  992px) {
            .custom-table {
                font-size: 12px;
            }
        }
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
 