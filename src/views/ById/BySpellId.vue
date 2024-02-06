<template>
    <div class="container border-bottom">
        <router-link :to="linked" >
            <button style="color: rgba(255, 255, 255, 0.800);" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" >
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
    <div style="background: #2e2e36;" class="container mb-5">
        <h1 class="display-6 mb-1 mt-4 fw-bold ps-5 pt-5" style="color: rgba(255, 255, 255, 1);">{{item.spellName}}</h1>
        <div class="ps-5 mb-4">
            <p class="d-inline fs-5 " style="color: rgba(255, 255, 255, 0.800);">
                Czar poziomu {{ item.spellLevel }}, ze szkoły {{item.spellSchool}}</p>
        </div> <br>
        <div class="ps-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Czas Rzucania:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{item.spellCasting}}</p>
        </div> <br>
        <div class="ps-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Zasięg:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.spellRange }}</p>
        </div> <br>
        <div class="ps-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Komponenty:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{item.spellComponents}}</p>
        </div> <br>
        <div class="ps-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Czas Trwania:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{item.spellDuration}}</p>
        </div>    
        <div class="mt-5 ps-5 pe-5 mb-5">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">
                {{ item.spellDesc }}
            </p>
        </div>
        <div class="ps-5 mb-3 pb-5">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Na wyższych poziomach:</p> 
            <p class="d-inline fs-5 ms-3" style="color: rgba(255, 255, 255, 0.850);">{{ item.spellAHL }}</p>
        </div>  
    </div>  
</template>

<script>
import axios from 'axios';


export default {
    name: "BySpellId",
    props: ['id', 'link', 'doDelete'],
    data() {
        return {
            item: {},
            result: null,
            linked: "/Czary",
            delete: null,
        }; 
    },
    methods: {
        changeUpvote() {
            this.result = !this.result
        },
        upVote() {
            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Spell/upvote/' + this.item.spellId, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            
        },
        
        deleted() {
            
            axios.delete('https://kumpleismokibbkservice.azurewebsites.net/api/Spell', {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                data: this.item       
            })
        }
    },
    created() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Spell/checkifupvote/' + this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.result = response.data);

        
    },
    mounted() {
        console.log(localStorage.getItem('token'))
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Spell/id/' + this.id)
            .then(response => this.item = response.data);

        if(this.link == null) {
            this.linked = "/Czary"
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
    
</style>
 