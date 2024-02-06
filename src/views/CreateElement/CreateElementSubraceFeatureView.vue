<template>
  
    <div style="background: #2e2e36;" class="container  input-box right p-5 mt-4 mb-5 fs-5">
      <h1 class="display-6 text-light text-center mt-4 mb-5 ps-3 pe-3">Wypełnij pola, by dodać do stworzonej podrasy cechy</h1>
          <div class="row justify-content-center mt-3">
        <div class=" mb-4 mt-3 mb-md-5 input-field">
             <input type="text" class="input" id="featureName" autocomplete="off" placeholder=" " v-model="raceFeature.featureName" @input="updateForm('featureName', $event.target.value)"  @blur="v$.raceFeature.featureName.$touch">
             <label style="color: white;" for="featureName">Nazwa cechy:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.raceFeature.featureName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class=" mb-4 mt-2 mb-md-5 input-field">
             <input type="text" class="input" id="featureDesc" autocomplete="off" placeholder=" " v-model="raceFeature.featureDesc" @input="updateForm('featureDesc', $event.target.value)" @blur="v$.raceFeature.featureDesc.$touch">
             <label style="color: white;" for="featureDesc" >Opis cechy:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.raceFeature.featureDesc.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
          </div>
          
          <div class="d-flex">
            <button class="submit" @click="createPost">Dodaj ceche</button> 
            <button class="submit ms-auto" @click="finalizePost">Zakończ tworzenie</button>
          </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Dodałes ceche do rasy</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'ERROR'">Prosimy o poprawne wypełnienie formularza.</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'FINAL'">Przenosimy cię do stworzonej rasy</p>
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
     raceFeature: {
      featureName: null,
      featureDesc: null,
     },
     error : null,
   };
 },
 validations() {
   return {
    raceFeature: {
      featureName: {
         required: helpers.withMessage("Nazwa cechy jest wymagana", required),
       },
       featureDesc: {
         required: helpers.withMessage("Opis cechy jest wymagany", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user']),
        ...mapGetters(['raceID'])
    },
 methods: {
  clearFields() {
    this.raceFeature = {
      featureName: "",
      featureDesc: "",
     }
   },
    openStorage () {
      return JSON.parse(localStorage.getItem('raceFeature'))
    },
    saveStorage (raceFeature) {
      localStorage.setItem('raceFeature', JSON.stringify(raceFeature))
    },
    updateForm (input, value) {
      this.raceFeature[input] = value
    
      let storedForm = this.openStorage() 
      if (!storedForm) storedForm = {} 
    
      storedForm[input] = value 
      this.saveStorage(storedForm) 
    },
    finalizePost() {
      
      this.submitStatus = 'PENDING'
        this.submitStatus = 'FINAL'
        setTimeout(() => {
        this.$router.push('/Rasy/' + this.raceID) 
      }, 2000) 
    },
    async createPost() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) 
    {
        this.submitStatus = 'PENDING'
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/CustomRaceFeature?raceId=' + this.raceID, this.raceFeature, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then( 
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('raceFeature');    
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
        localStorage.removeItem('raceFeature'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.raceFeature = {
    			...this.raceFeature,
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