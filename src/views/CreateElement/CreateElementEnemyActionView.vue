<template>
  
    <div style="background: #2e2e36;" class="container  input-box right p-5 mt-4 mb-5 fs-5">
    <h1 class="display-6 text-light text-center mt-4 mb-5 ps-3 pe-3">Wypełnij pola, by dodać do stworzonego przeciwnika akcje</h1>

          <input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" value="ability" v-model="enemyAction.actionType">
          <label class="btn btn-outline-light me-3" for="option5">Umiejętność</label>

          <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off" value="action" v-model="enemyAction.actionType">
          <label class="btn btn-outline-light me-3" for="option6">Akcja</label>

          <input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off" value="bonusaction" v-model="enemyAction.actionType">
          <label class="btn btn-outline-light me-3" for="option7">Bonusowa akcja</label>

          <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off" value="reaction" v-model="enemyAction.actionType">
          <label class="btn btn-outline-light me-3 mt-3 mt-md-0" for="option8">Reakcja</label>

          <input type="radio" class="btn-check" name="options-base" id="option9" autocomplete="off" value="legendary" v-model="enemyAction.actionType">
          <label class="btn btn-outline-light me-3 mt-3 mt-lg-0" for="option9">legendarna akcja</label>

          <p style="color: red;"
              class="fs-6 mt-3"
              v-for="error of v$.enemyAction.actionType.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>

          <div class="row justify-content-center mt-3">
        <div class=" mb-4 mt-3 mb-md-5 input-field">
             <input type="text" class="input" id="actionName" autocomplete="off" placeholder=" " v-model="enemyAction.actionName" @input="updateForm('actionName', $event.target.value)"  @blur="v$.enemyAction.actionName.$touch">
             <label style="color: white;" for="actionName">Nazwa akcji:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemyAction.actionName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class=" mb-4 mt-2 mb-md-5 input-field">
             <input type="text" class="input" id="actionDesc" autocomplete="off" placeholder=" " v-model="enemyAction.actionDesc" @input="updateForm('actionDesc', $event.target.value)" @blur="v$.enemyAction.actionDesc.$touch">
             <label style="color: white;" for="actionDesc" >Opis akcji:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.enemyAction.actionDesc.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
          </div>
          
          <div class="d-flex">
            <button class="submit" @click="createPost">Dodaj akcje</button> 
            <button class="submit ms-auto" @click="finalizePost">Zakończ tworzenie</button>
          </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Dodałes akcje do przeciwnika</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'ERROR'">Prosimy o poprawne wypełnienie formularza.</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'FINAL'">Przenosimy cię do stworzonego przeciwnika</p>
          </div>
          
        </div>
  
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
     enemyAction: {
      actionName: null,
      actionDesc: null,
      actionType: null
     },
     error : null,
   };
 },
 validations() {
   return {
    enemyAction: {
      actionName: {
         required: helpers.withMessage("Nazwa akcji jest wymagana", required),
       },
      actionDesc: {
         required: helpers.withMessage("Opis akcji jest wymagany", required),
       },
      actionType: {
         required: helpers.withMessage("Wybierz rodzaj akcji", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user']),
        ...mapGetters(['enemyID'])
    },
 methods: {
  clearFields() {
    this.enemyAction = {
      actionName: "",
      actionDesc: "",
      actionType: ""
     }
   },
    openStorage () {
      return JSON.parse(localStorage.getItem('enemyAction'))
    },
    saveStorage (enemyAction) {
      localStorage.setItem('enemyAction', JSON.stringify(enemyAction))
    },
    updateForm (input, value) {
      this.enemyAction[input] = value
    
      let storedForm = this.openStorage() 
      if (!storedForm) storedForm = {} 
    
      storedForm[input] = value 
      this.saveStorage(storedForm) 
    },
    finalizePost() {
      
      this.submitStatus = 'PENDING'
        this.submitStatus = 'FINAL'
        setTimeout(() => {
        this.$router.push('/Przeciwnicy/' + this.enemyID) 
      }, 2000) 
    },
    async createPost() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) 
    {
        this.submitStatus = 'PENDING'
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/EnemyActionEconomy?enemyId=' + this.enemyID, this.enemyAction, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then( 
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'

                                this.clearFields()
                                this.v$.enemyAction.actionName.$reset()
                                this.v$.enemyAction.actionDesc.$reset()
                                this.v$.enemyAction.actionType.$reset()
                                
                                localStorage.removeItem('enemyAction');    
                            }, 500) 
                    })  
                  }
    else 
    {
        this.submitStatus = 'ERROR'
    }
   },    
 },
 created () {
      if(this.user == null) {
        localStorage.removeItem('enemyAction'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.enemyAction = {
    			...this.enemyAction,
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