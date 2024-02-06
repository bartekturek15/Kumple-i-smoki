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
    <div style="background: #2e2e36;" class="container mb-5">
        <h1 class="display-6 mb-1 mt-4 fw-bold ps-5 pt-5" style="color: white;">{{ item.itemName }}</h1>
        <div class="ps-5 mb-4">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.800);">{{item.itemRarity}}</p>
        </div> <br>  
        <div class="mt-1 ps-5 pe-5 mb-5">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.850);">
                {{ item.itemDescription }}
            </p>
        </div>
        <div class="ps-5 pb-5 mb-5">
            <p class="fs-5 d-inline fw-bold" style="color: rgba(255, 255, 255, 0.950);">Waga:</p> <p class="d-inline fs-5 ms-3" style="color: white;">{{ item.itemWeight }}.</p>
        </div>  
    </div>  
</template>

<script>
import axios from 'axios';


export default {
    name: "ByItemId",
    props: ['id', 'link', 'doDelete'],
    data() {
        return {
            item: {},
            result: null,
            linked: "/Przedmioty",
            delete: null,
        }; 
    },
    created() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Item/checkifupvote/' + this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.result = response.data);
    },
    methods: {
        deleted() {
            
            axios.delete('https://kumpleismokibbkservice.azurewebsites.net/api/Item', {
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
            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Item/upvote/' + this.item.itemId, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            
        },
    },
    mounted() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Item/id/' + this.id)
            .then(response => this.item = response.data);
        
            if(this.link == null) {
            this.linked = "/Przedmioty"
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
 