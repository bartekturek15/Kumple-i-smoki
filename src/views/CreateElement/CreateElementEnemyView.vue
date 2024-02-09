<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać przeciwnika do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container  input-box right p-5 mt-4 mb-5 fs-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyName" autocomplete="off" placeholder=" " v-model="enemy.enemyName"  @input="updateForm('enemyName', $event.target.value)" @blur="v$.enemy.enemyName.$touch">
             <label style="color: white;" for="enemyName">Nazwa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemySize" autocomplete="off" placeholder=" " :value="enemy.enemySize" @input="updateForm('enemySize', $event.target.value)" @blur="v$.enemy.enemySize.$touch">
             <label style="color: white;" for="enemySize" >Rozmiar:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemySize.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyRace" autocomplete="off" placeholder=" " v-model="enemy.enemyRace"  @input="updateForm('enemyRace', $event.target.value)" @blur="v$.enemy.enemyRace.$touch">
             <label style="color: white;" for="enemyRace">Rasa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyRace.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyArmorClass" autocomplete="off" placeholder=" " :value="enemy.enemyArmorClass" @input="updateForm('enemyArmorClass', $event.target.value)" @blur="v$.enemy.enemyArmorClass.$touch">
             <label style="color: white;" for="enemyArmorClass" >Klasa pancerza:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyArmorClass.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyHealth" autocomplete="off" placeholder=" " v-model="enemy.enemyHealth"  @input="updateForm('enemyHealth', $event.target.value)" @blur="v$.enemy.enemyHealth.$touch">
             <label style="color: white;" for="enemyHealth">Punkty zdrowia:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyHealth.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemySpeed" autocomplete="off" placeholder=" " :value="enemy.enemySpeed" @input="updateForm('enemySpeed', $event.target.value)" @blur="v$.enemy.enemySpeed.$touch">
             <label style="color: white;" for="enemySpeed" >Prędkość:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemySpeed.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
      </div>
      
       <div class="row justify-content-center">
         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyStrength" autocomplete="off" placeholder=" " :value="enemy.enemyStrength" @input="updateForm('enemyStrength', $event.target.value)" @blur="v$.enemy.enemyStrength.$touch">
             <label style="color: white;" for="enemyStrength" class="form-label">Siła:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyStrength.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyDexterity" autocomplete="off" placeholder=" " :value="enemy.enemyDexterity" @input="updateForm('enemyDexterity', $event.target.value)" @blur="v$.enemy.enemyDexterity.$touch">
             <label style="color: white;" for="enemyDexterity" class="form-label">Zręczność:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyDexterity.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>

         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyConstitution" autocomplete="off" placeholder=" " :value="enemy.enemyConstitution" @input="updateForm('enemyConstitution', $event.target.value)" @blur="v$.enemy.enemyConstitution.$touch">
             <label style="color: white;" for="enemyConstitution" class="form-label">Wytrzymałość:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyConstitution.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyInteligence" autocomplete="off" placeholder=" " :value="enemy.enemyInteligence" @input="updateForm('enemyInteligence', $event.target.value)" @blur="v$.enemy.enemyInteligence.$touch">
             <label style="color: white;" for="enemyInteligence" class="form-label">Inteligencja:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyInteligence.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>

         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyWisdom" autocomplete="off" placeholder=" " :value="enemy.enemyWisdom" @input="updateForm('enemyWisdom', $event.target.value)" @blur="v$.enemy.enemyWisdom.$touch">
             <label style="color: white;" for="enemyWisdom" class="form-label">Mądrość:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyWisdom.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-2 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyCharisma" autocomplete="off" placeholder=" " :value="enemy.enemyCharisma" @input="updateForm('enemyCharisma', $event.target.value)" @blur="v$.enemy.enemyCharisma.$touch">
             <label style="color: white;" for="enemyCharisma" class="form-label">Charyzma:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemy.enemyCharisma.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>

       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemySavingThrows" autocomplete="off" placeholder=" " :value="enemy.enemySavingThrows" @input="updateForm('enemySavingThrows', $event.target.value)">
             <label style="color: white;" for="enemySavingThrows" class="form-label">Rzuty obronne:</label>
             
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemySkills" autocomplete="off" placeholder=" " :value="enemy.enemySkills" @input="updateForm('enemySkills', $event.target.value)" >
             <label style="color: white;" for="enemySkills" class="form-label">Umiejętności:</label>
             
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyImmunes" autocomplete="off" placeholder=" " :value="enemy.enemyImmunes" @input="updateForm('enemyImmunes', $event.target.value)">
             <label style="color: white;" for="enemyImmunes" class="form-label">Nietykalności:</label>
             
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyResistances" autocomplete="off" placeholder=" " :value="enemy.enemyResistances" @input="updateForm('enemyResistances', $event.target.value)" >
             <label style="color: white;" for="enemyResistances" class="form-label">Odporności:</label>
             
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyVulnerabilities" autocomplete="off" placeholder=" " :value="enemy.enemyVulnerabilities" @input="updateForm('enemyVulnerabilities', $event.target.value)">
             <label style="color: white;" for="enemyVulnerabilities" class="form-label">Podatności:</label>
             
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemySenses" autocomplete="off" placeholder=" " :value="enemy.enemySenses" @input="updateForm('enemySenses', $event.target.value)" >
             <label style="color: white;" for="enemySenses" class="form-label">Zmysły:</label>
            
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyLanguages" autocomplete="off" placeholder=" " :value="enemy.enemyLanguages" @input="updateForm('enemyLanguages', $event.target.value)">
             <label style="color: white;" for="enemyLanguages" class="form-label">Języki:</label>
             
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="enemyDangerLvl" autocomplete="off" placeholder=" " :value="enemy.enemyDangerLvl" @input="updateForm('enemyDangerLvl', $event.target.value)">
             <label style="color: white;" for="enemyDangerLvl" class="form-label">Poziom wyzwania:</label>
             
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="mb-4 mb-md-5 input-field">
            <input type="text" class="input" id="enemyProficencyBonus" autocomplete="off" placeholder=" " :value="enemy.enemyProficencyBonus" @input="updateForm('enemyProficencyBonus', $event.target.value)">
             <label style="color: white;" for="enemyProficencyBonus" class="form-label">Premia do biegłości:</label>
             
         </div>
         <div class="row justify-content-end">
          <button class="submit mt-3" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz przeciwnika</button>
         </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Przeciwnik został utworzony, teraz możesz utworzyć jego akcje</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'ERROR'">Prosimy o poprawne wypełnienie formularza.</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
          </div>
      </div>
   </form>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios';
import useVuelidate from "@vuelidate/core";
import { required, helpers, integer } from "@vuelidate/validators";
export default {
 name: "CreateElementEnemyView",
 data() {
   return {
     v$: useVuelidate(),
     submitStatus: null,
     spells: null,
     id: null,
     enemy: {
      enemyName: null,
      enemySize: null,
      enemyRace: null,
      enemyArmorClass: null,
      enemyHealth: null,
      enemyStrength: null,
      enemyDexterity: null,
      enemyConstitution: null,
      enemyInteligence: null,
      enemyWisdom: null,
      enemyCharisma: null,
      enemySpeed: null,
      enemySavingThrows: null,
      enemySkills: null,
      enemyImmunes: null,
      enemyResistances: null,
      enemyVulnerabilities: null,
      enemySenses: null,
      enemyLanguages: null,
      enemyDangerLvl: null,
      enemyProficencyBonus: null,
      ownerName: null,
      upvotes: 0
     },
     error : null,
   };
 },
 validations() {
   return {
    enemy: {
      enemyName: {
         required: helpers.withMessage("Nazwa przeciwnika jest wymagana", required),
       },
       enemySize: {
         required: helpers.withMessage("Rozmiar przeciwnika jest wymagany", required),
       },
       enemyRace: {
         required: helpers.withMessage("Rasa przeciwnika jest wymagana", required),
       },
       enemyArmorClass: {
         required: helpers.withMessage("Klasa pancerza przeciwnika jest wymagana", required),
       },
       enemyHealth: {
         required: helpers.withMessage("Ilośc punktów życia przeciwnika jest wymagana", required),
       },
       enemyStrength: {
         required: helpers.withMessage("Siła przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemyDexterity: {
         required: helpers.withMessage("Zręczność przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemyConstitution: {
         required: helpers.withMessage("Wytrzymalość przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemyInteligence: {
         required: helpers.withMessage("Inteligencja przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemyWisdom: {
         required: helpers.withMessage("Mądrość przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemyCharisma: {
         required: helpers.withMessage("Charyzma przeciwnika jest wymagana", required),
         integer:  helpers.withMessage("Podana wartość musi być liczbą", integer),
       },
       enemySpeed: {
         required: helpers.withMessage("Prędkość przeciwnika jest wymagana", required),
       },
       
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  clearFields() {
    this.enemy = {
      enemyName: "",
      enemySize: "",
      enemyRace: "",
      enemyArmorClass: "",
      enemyHealth: "",
      enemyStrength: "",
      enemyDexterity: "",
      enemyConstitution: "",
      enemyInteligence: "",
      enemyWisdom: "",
      enemyCharisma: "",
      enemySpeed: "",
      enemySavingThrows: "",
      enemySkills: "",
      enemyImmunes: "",
      enemyResistances: "",
      enemyVulnerabilities: "",
      enemySenses: "",
      enemyLanguages: "",
      enemyDangerLvl: "",
      enemyProficencyBonus: ""
     }
   },
    openStorage () {
      return JSON.parse(localStorage.getItem('enemy'))
    },
    saveStorage (enemy) {
      localStorage.setItem('enemy', JSON.stringify(enemy))
    },
    updateForm (input, value) {
      this.enemy[input] = value
    
      let storedForm = this.openStorage() 
      if (!storedForm) storedForm = {} 
    
      storedForm[input] = value 
      this.saveStorage(storedForm) 
    },
    async createPost() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) 
    {
        this.submitStatus = 'PENDING'
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy?ownerId=1', this.enemy, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then(
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('enemy');    
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Enemy')
                              .then(response => {
                                this.spells = response.data
                                this.id = this.spells[this.spells.length-1].enemyId
                                this.$store.dispatch('enemyID', this.id);
                                this.$router.push('/TworzenieAkcjiPrzeciwnika')
                              })   
                            }, 2000)  
                    })  
                  }
    else 
    {
        this.submitStatus = 'ERROR'
    }
   },   
 
 },
 created () {
      this.enemy.ownerName=this.user.username
      if(this.user == null) {
        localStorage.removeItem('enemy'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.enemy = {
    			...this.enemy,
    			...storedForm
    		}
    	}
      
    }
};
</script>

<style scoped>
  .fortextarea {
      padding: 0 10px 0 10px;
  }
  .input-field{
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 0 10px 0 10px;
  }
  .input{
    
      height: 50px;
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.75);
      outline: none;
      margin-bottom: 20px;
      color: whitesmoke;
  }
  .input-box .input-field label{
      position: absolute;
      top: 10px;
      left: 10px;
      pointer-events: none;
      transition: .5s;
  }
  .input-field input:focus ~ label
  {
      top: -10px;
      font-size: 13px;
  }
  .input-field input:not(:placeholder-shown) ~ label
    {
    top: -10px;
    font-size: 13px;
    color: #5d5076;
    }
 
  .submit{
      width: 300px;
      border: none;
      outline: none;
      height: 45px;
      background: #ececec;
      border-radius: 5px;
      transition: .4s;
  }
  .submit:hover{
      background: #202528;
      color: #fff;
  }
</style>