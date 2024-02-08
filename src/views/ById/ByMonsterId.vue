<template>
    <div class="container border-bottom mb-4">
        <router-link :to="linked">
            <button style="color: rgba(255, 255, 255, 0.800);" class="btn mt-4 ms-5 align-text-center fs-4 mb-1" type="button" >
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
    <div style="background: #2e2e36;" class="container pb-4 mb-5">
        <h1 class="display-6 mb-1 mt-4 fw-bold ps-5 pt-5" style="color: rgba(255, 255, 255, 1);">{{ item.enemyName }}</h1>
        <div class="ps-5 pe-5 mb-4">
            <p class="d-inline fs-5" style="color: rgba(255, 255, 255, 0.800);">{{ item.enemySize }}, {{ item.enemyRace }}</p>
        </div> <br>
        <div class="ps-5 pe-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Klasa Pancerza:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyArmorClass }}</p>
        </div> <br>
        <div class="ps-5 pe-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Punkty życia:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyHealth }}</p>
        </div> <br>
        <div class="ps-5 pe-5">
            <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Prędkość:</p> 
            <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemySpeed }}</p>
        </div> <br> 
        <div class="d-none d-lg-block ps-5 pe-5 mt-4 mb-5">
            <div style="color: rgba(255, 255, 255, 0.950);" class="row border-top border-bottom">
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">siła</span>
                    <span class="d-block">{{ item.enemyStrength }}</span>
                </div>
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">Zręczność</span>
                    <span class="d-block">{{ item.enemyDexterity }}</span>
                </div>
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">Wytrzymalość</span>
                    <span class="d-block">{{ item.enemyConstitution }}</span>
                </div>
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">Inteligencja</span>
                    <span class="d-block">{{ item.enemyInteligence }}</span>
                </div>
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">Mądrość</span>
                    <span class="d-block">{{ item.enemyWisdom }}</span>
                </div>
                <div class="col-2 mt-2 mb-2">
                    <span class="d-block">Charyma</span>
                    <span class="d-block">{{ item.enemyCharisma }}</span>
                </div>
            </div>
        </div>  
        <div class="d-lg-none ps-5 pe-5 mt-4 mb-5">
            <div style="color: rgba(255, 255, 255, 0.950);" class="row border-top border-bottom">
                <div class="row">
                    <div class="col mt-2 mb-2">
                        <span class="d-block">siła</span>
                        <span class="d-block">{{ item.enemyStrength }}</span>
                    </div>
                    <div class="col mt-2 mb-2">
                        <span class="d-block">Zręczność</span>
                        <span class="d-block">{{ item.enemyDexterity }}</span>
                    </div>
                    <div class="col mt-2 mb-2">
                        <span class="d-block">Wytrzymalość</span>
                        <span class="d-block">{{ item.enemyConstitution }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2 mb-2">
                        <span class="d-block">Inteligencja</span>
                        <span class="d-block">{{ item.enemyInteligence }}</span>
                    </div>
                    <div class="col mt-2 mb-2">
                        <span class="d-block">Mądrość</span>
                        <span class="d-block">{{ item.enemyWisdom }}</span>
                    </div>
                    <div class="col mt-2 mb-2">
                        <span class="d-block">Charyma</span>
                        <span class="d-block">{{ item.enemyCharisma }}</span>
                    </div>
                </div>
            </div>
        </div> 

        <span v-if="item.savingThrows != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Rzuty obronne:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemySavingThrows }}</p>
            </div> <br>
        </span>
        <span  v-if="item.skills != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Umiejętności:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemySkills }}</p>
            </div> <br>
        </span>
        <span v-if="item.resistances != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Odporności:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyResistances }}</p>
            </div> <br>
        </span>
        <span v-if="item.immunes != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Nietykalność:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyImmunes }}</p>
            </div> <br>
        </span>
        <span v-if="item.vulnerabilities != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Podatności:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyVulnerabilities }}</p>
            </div> <br>
        </span>
        <span v-if="item.senses != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Zmysły:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemySenses }}</p>
            </div> <br>
        </span>
        <span v-if="item.languages != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Języki:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyLanguages }}</p>
            </div> <br>
        </span>
        <span v-if="item.dangerLvl != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Poziom wyzwania:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyDangerLvl }}</p>
            </div> <br>
        </span>
        <span v-if="item.proficencyBonus != ''">
            <div class="ps-5 pe-5">
                <p class="fs-5 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Premia do biegłości:</p> 
                <p class="d-inline fs-5 ms-3 lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ item.enemyProficencyBonus }}</p>
            </div> <br>
        </span>
        
        
        <div v-if="showAbility == true" class="ps-5 pe-5">
            <div v-if="showAbility == true" class="border-top mt-4">
                <div v-if="showAbility == true" class="mt-3 pb-4">
                    <p class="fs-4 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Umiejętności</p>
                    <br>
                </div>
            </div>
        </div> 
        <div v-for="(line, index) in itemAction" :key="index">
            <span v-if="line.actionType == 'ability'">
                <div v-if="line.actionType == 'ability'" class="ps-5 pe-5 pt-3 pb-3">
                    <p class="fs-5 d-inline lh-1 fw-bold" style="color: rgba(255, 255, 255, 0.950);">{{ line.actionName }}: </p>
                    <p class="ms-3 fs-5 d-inline lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ line.actionDesc }}</p>
                    <br>
                </div> 
            </span>
        </div> 

        <div v-if="showAction == true" class="ps-5 pe-5">
            <div v-if="showAction == true" class="border-top mt-4">
                <div v-if="showAction == true" class="mt-3 pb-4">
                    <p class="fs-4 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Akcje:</p>
                    <br>
                </div>
            </div>
        </div> 
        <div v-for="(line, index) in itemAction" :key="index">
            <span v-if="line.actionType == 'action'">
                <div v-if="line.actionType == 'action'" class="ps-5 pe-5 pt-3 pb-3">
                    <p class="fs-5 d-inline lh-1 fw-bold" style="color: rgba(255, 255, 255, 0.950);">{{ line.actionName }}: </p>
                    <p class="ms-3 fs-5 d-inline lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ line.actionDesc }}</p>
                    <br>
                </div> 
            </span>
        </div>

        <div v-if="showBonusAction == true" class="ps-5 pe-5">
            <div v-if="showBonusAction == true" class="border-top mt-4">
                <div v-if="showBonusAction == true" class="mt-3 pb-4">
                    <p class="fs-4 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Bonusowe akcje:</p>
                    <br>
                </div>
            </div>
        </div> 
        <div v-for="(line, index) in itemAction" :key="index">
            <span v-if="line.actionType == 'bonusaction'">
                <div v-if="line.actionType == 'bonusaction'" class="ps-5 pe-5 pt-3 pb-3">
                    <p class="fs-5 d-inline lh-1 fw-bold" style="color: rgba(255, 255, 255, 0.950);">{{ line.actionName }}: </p>
                    <p class="ms-3 fs-5 d-inline lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ line.actionDesc }}</p>
                    <br>
                </div> 
            </span>
        </div>

        <div v-if="showReaction == true" class="ps-5 pe-5">
            <div v-if="showReaction == true" class="border-top mt-4">
                <div v-if="showReaction == true" class="mt-3 pb-4">
                    <p class="fs-4 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Reakcje:</p>
                    <br>
                </div>
            </div>
        </div> 
        <div v-for="(line, index) in itemAction" :key="index">
            <span v-if="line.actionType == 'reaction'">
                <div v-if="line.actionType == 'reaction'" class="ps-5 pe-5 pt-3 pb-3">
                    <p class="fs-5 d-inline lh-1 fw-bold" style="color: rgba(255, 255, 255, 0.950);">{{ line.actionName }}: </p>
                    <p class="ms-3 fs-5 d-inline lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ line.actionDesc }}</p>
                    <br>
                </div> 
            </span>
        </div>
        
        <div v-if="showLegendary == true" class="ps-5 pe-5">
            <div v-if="showLegendary == true" class="border-top mt-4">
                <div v-if="showLegendary == true" class="mt-3 pb-4">
                    <p class="fs-4 d-inline fw-bold lh-1" style="color: rgba(255, 255, 255, 0.950);">Legendarne akcje:</p>
                    <br>
                </div>
            </div>
        </div> 
        <div v-for="(line, index) in itemAction" :key="index">
            <span v-if="line.actionType == 'legendary'">
                <div v-if="line.actionType == 'legendary'" class="ps-5 pe-5 pt-3 pb-3">
                    <p class="fs-5 d-inline lh-1 fw-bold" style="color: rgba(255, 255, 255, 0.950);">{{ line.actionName }}: </p>
                    <p class="ms-3 fs-5 d-inline lh-1" style="color: rgba(255, 255, 255, 0.850);">{{ line.actionDesc }}</p>
                    <br>
                </div> 
            </span>
        </div>
        
    </div>  
</template>

<script>
import axios from 'axios';


export default {
    name: "ByMonsterId",
    props: ['id', 'link', 'doDelete'],
    data() {
        return {
            item: {},
            itemAction: {},
            result: null,
            linked: "/Przeciwnicy",
            delete: null,
        }; 
    },
    created() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy/checkifupvote/' + this.id, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.result = response.data);
    },
    methods: {
        deleted() {
            
            axios.delete('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy', {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                data: this.item       
            }).then(
                setTimeout(() => {
                    this.$router.push('/StworzeniPrzeciwnicy')
                }, 1000)
                
            )
        },
        changeUpvote() {
            this.result = !this.result
        },
        upVote() {
            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy/upvote/' + this.item.enemyId, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            
        },
    },
    computed: {
        showAbility() {
        var showAbility = false;
        Object.values(this.itemAction).forEach(action => {
            if (action.actionType == 'ability') {
            showAbility = true;
            }
        });
        return showAbility;
        },
        showAction() {
        var showAbility = false;
        Object.values(this.itemAction).forEach(action => {
            if (action.actionType == 'action') {
            showAbility = true;
            }
        });
        return showAbility;
        },
        showBonusAction() {
        var showAbility = false;
        Object.values(this.itemAction).forEach(action => {
            if (action.actionType == 'bonusaction') {
            showAbility = true;
            }
        });
        return showAbility;
        },
        showReaction() {
        var showAbility = false;
        Object.values(this.itemAction).forEach(action => {
            if (action.actionType == 'reaction') {
            showAbility = true;
            }
        });
        return showAbility;
        },
        showLegendary() {
        var showAbility = false;
        Object.values(this.itemAction).forEach(action => {
            if (action.actionType == 'legendary') {
            showAbility = true;
            }
        });
        return showAbility;
        },
    },
    mounted() {
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy/id/' + this.id)
            .then(response => this.item = response.data);
        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/EnemyActionEconomy/enemy/' + this.id)
            .then(response => this.itemAction = response.data);
        
            if(this.link == null) {
            this.linked = "/Przeciwnicy"
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
 