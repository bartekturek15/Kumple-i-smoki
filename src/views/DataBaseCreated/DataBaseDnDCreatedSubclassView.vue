<template>
    <h1 class="display-6 text-light text-center mt-5">Wybierz podklase, którą chcesz przejrzeć:</h1>
    <div class="container d-none d-md-block">
        <div class="input-group">
            <Searchbar @search="handleSearch" />
            <p class="mt-5 ms-auto me-2" style="color: white;">Sortuj po polubieniach: </p>
            <button class="btn" @click="sortLowest"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-arrow-down-circle mt-4" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
            </svg> </button>
            <button class="btn" @click="sortHighest"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-arrow-up-circle mt-4" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg> </button>
        </div>
    </div>
    <div class="container d-md-none">
        <div class="input-group row">
            <Searchbar @search="handleSearch" />
        </div>
        <div class="row">
                <div class="col-12 pt-4">
                    <p class="ms-auto me-2 d-inline" style="color: white; margin-top: 700px;">Sortuj po polubieniach: </p>
                    <button class="btn d-inline" @click="sortLowest"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-arrow-down-circle " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg> </button>
                    <button class="btn d-inline" @click="sortHighest"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-arrow-up-circle " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                    </svg> </button>
                </div>
        </div>
    </div>
   
    <div style="color: white;" class="container mt-4">
        <table class="table custom-table table-dark mx-auto">
            <thead>
                <tr>
                    <th scope="col">Twórca</th>
                    <th scope="col">Nazwa</th>
                    <th scope="col">Polubienia</th>
                </tr>
            </thead>
            <tbody v-if="this.items.length > 0">
                    <tr v-for="item in VisiblePost" :key="item.raceID" class="position-relative">
                        <td v-if="item.inheritedRaceID != 0" scope="row">
                            <router-link class="stretched-link" style="text-decoration: none; color:whitesmoke" 
                            :to="{ name: 'ByRaceId', params: { id: item.raceID }}">
                                {{ item.ownerName }}
                            </router-link>
                        </td> 
                        <td v-if="item.inheritedRaceID != 0">{{ item.raceName }}</td>  
                        <td>{{ item.upvotes }}</td>
                    </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">
                        {{ this.loading }} 
                        <div v-if="this.loading == 'Ładowanie'" class="spinner-border text-light  spinner-border-sm" role="status" width="30" height="30">
                            <span class="visually-hidden"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-4">
                <li class="page-item">
                    <a class="page-link"
                    aria-label="Previous"
                    href="#"
                    @click="changePage(currentPage - 1)"
                    :class="{disabled : currentPage === 1}"
                    ><span 
                    :class="{discolor : currentPage === 1}" 
                    aria-hidden="true">&laquo;</span></a>
                </li>
                <li class="page-item" 
                v-for="pageNumber in visiblePageNumbers"
                :key="pageNumber"
                :class="{active : currentPage == pageNumber} "
                >
                    <a class="page-link"
                    href="#" @click="changePage(pageNumber)">
                        {{ pageNumber }}
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link"
                    href="#"
                    @click="changePage(currentPage + 1)"
                    :class="{disabled : currentPage === totalPages}"
                    aria-label="Next">
                    <span 
                        :class="{discolor : currentPage === totalPages}" 
                        aria-hidden="true"
                        >&raquo;</span></a>
                </li>
            </ul>
        </nav>
    </div>
    
        
</template>

<script>
    import Navbar from '../../components/Navbar.vue';
    import Searchbar from '../../components/Searchbar.vue';

    import axios from 'axios';
    import {mapGetters} from 'vuex'

    export default {
    name: "dataBaseDnD",
    components: {
        Navbar,
        Searchbar,
        
   },
   data() {
        return {
            items: [],
            itemPerPage: 25,
            currentPage: 1,
            searchFilter: '',
            loading: "Ładowanie"
        };
    },
    computed: {
        ...mapGetters(['user']),
        filteredItems() {
            const newArr = this.items.filter((item) => item !== null);
            if (this.searchFilter !== '') {
                return newArr.filter(item => 
                item.raceName.toLowerCase().includes(this.searchFilter.toLowerCase()));
            }

            return newArr;
        },
        VisiblePost() {
            const startPage = (this.currentPage - 1 ) *  this.itemPerPage;
            const endPage = startPage + this.itemPerPage
            return this.filteredItems.slice(startPage,endPage)
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.itemPerPage)
        },
        visiblePageNumbers() {
            let pageNumbers = []
            if (this.totalPages <= 7) {
                for(let i = 1; i <= this.totalPages; i++) {
                    pageNumbers.push(i)
                }
            }else {
                if(this.currentPage <= 4){
                    pageNumbers = [1,2,3,4,5,"...",this.totalPages];
                }else if (this.currentPage >= this.totalPages - 3) {
                   pageNumbers 
                   = [
                        1,
                        "...",
                        this.totalPages - 4, 
                        this.totalPages - 3, 
                        this.totalPages - 2, 
                        this.totalPages - 1,
                        this.totalPages
                    ] 
                }else {
                    pageNumbers = [1,"...",this.currentPage - 1, this.currentPage, this.currentPage + 1, "...", this.totalPages]}
            }
            return pageNumbers
        }
    },
    mounted() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Spell/upvoted', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
                }).then(response => this.items = response.data);
                setTimeout(this.changeLoading, 3000);

            
},
methods: {
    sortLowest() {
        this.items.sort((a,b) => a.upvotes > b.upvotes ? 1 : -1)
    },
    sortHighest() {
        this.items.sort((a,b) => a.upvotes < b.upvotes ? 1 : -1)
    },
    changeLoading() {
        this.loading = "Brak danych"
    },
        changePage(page) {
            if(page >= 1 && page <= this.totalPages){
                this.currentPage = page
            }
        },
        handleSearch(search) {
            this.searchFilter = search
            
        }
    }
    }
</script>

<style scoped>
    .table {
    border-collapse: separate;
    border-spacing:0 5px;
    }
    .custom-table {
    min-width: 1200px; 
    }
    .custom-table thead tr, .custom-table thead th {
        border-top: none;
        border-bottom: none !important;
        color: #fff; 
        
    }
    .custom-table tbody th, .custom-table tbody td {
        color: #bababa;
        font-weight: 400;
        padding-bottom: 20px;
        padding-top: 20px;
        font-weight: 300; 
    }
        .custom-table tbody th small, .custom-table tbody td small {
        color: #b3b3b3;
        font-weight: 300; 
    }
    .custom-table tbody tr th, .custom-table tbody tr td {
        background: #27272d;
        border: none;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; 
    }
     
    .custom-table tbody tr.active th, .custom-table tbody tr.active td, .custom-table tbody tr:hover th, .custom-table tbody tr:hover td {
        color: #fff;
        background: #2e2e36; 
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
    .pagination li a
    {
        background-color: #202528;
        color: whitesmoke;
    }

    
    .pagination li a:hover,
    .pagination li span:focus,
    .pagination li span:hover
    {
        color: black;
        background-color: #eee;
        border-color: #ddd;
    }

    .pagination .active a
    {
        color: black;
        background-color:whitesmoke !Important;
        border: solid 1px black !Important;
    }

    .pagination .active a:hover
    {
        background-color: #5A4181 !Important;
        border: solid 1px #5A4181;
    }
</style>