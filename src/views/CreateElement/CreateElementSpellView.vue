<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać czar do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container mb-5 input-box right p-5 mt-4 fs-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellName" autocomplete="off" placeholder=" " v-model="spell.spellName"  @input="updateForm('spellName', $event.target.value)" @blur="v$.spell.spellName.$touch">
             <label style="color: white;" for="spellName">Nazwa czaru:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellSchool" autocomplete="off" placeholder=" " :value="spell.spellSchool" @input="updateForm('spellSchool', $event.target.value)" @blur="v$.spell.spellSchool.$touch">
             <label style="color: white;" for="spellSchool" >Szkoła magii:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellSchool.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
      </div>
      
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellCasting" autocomplete="off" placeholder=" " :value="spell.spellCasting" @input="updateForm('spellCasting', $event.target.value)" @blur="v$.spell.spellCasting.$touch">
             <label style="color: white;" for="spellCasting" class="form-label">Czas rzucania:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellCasting.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellRange" autocomplete="off" placeholder=" " :value="spell.spellRange" @input="updateForm('spellRange', $event.target.value)" @blur="v$.spell.spellRange.$touch">
             <label style="color: white;" for="spellRange" class="form-label">Zasięg czaru:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellRange.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellDuration" autocomplete="off" placeholder=" " :value="spell.spellDuration" @input="updateForm('spellDuration', $event.target.value)" @blur="v$.spell.spellDuration.$touch">
             <label style="color: white;" for="spellDuration" class="form-label">Czas trwania czaru:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellDuration.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="spellComponents" autocomplete="off" placeholder=" " :value="spell.spellLevel" @input="updateForm('spellLevel', $event.target.value)" @blur="v$.spell.spellLevel.$touch">
             <label style="color: white;" for="spellComponents" class="form-label">Poziom czaru:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.spell.spellLevel.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row">
         <div class="col mb-4 input-field justify-content-center">
               <input type="text" class="input" id="spellComponents" autocomplete="off" placeholder=" " :value="spell.spellComponents" @input="updateForm('spellComponents', $event.target.value)" @blur="v$.spell.spellComponents.$touch">
               <label style="color: white;" for="spellComponents" class="form-label">Komponenty:</label>
               <p style="color: red;"
                class="fs-6"
                v-for="error of v$.spell.spellComponents.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
           </div>
       </div>
       <div class="row justify-content-center">
         <div class="mb-4 fortextarea">
             <label style="color: white;" for="spellDesc" class="form-label">Opis czaru</label>
             <textarea class="fortextinput form-control" id="spellDesc" autocomplete="off" placeholder=" " :value="spell.spellDesc" @input="updateForm('spellDesc', $event.target.value)" rows="3" @blur="v$.spell.spellDesc.$touch"></textarea>
             <p style="color: red;"
                class="fs-6"
                v-for="error of v$.spell.spellDesc.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="mb-4 fortextarea">
             <label style="color: white;" for="spellAHL" class="form-label">Działanie na wyższych poziomach</label>
             <textarea class="fortextinput form-control" id="spellAHL" autocomplete="off" placeholder=" " :value="spell.spellAHL" @input="updateForm('spellAHL', $event.target.value)" rows="3" @blur="v$.spell.spellAHL.$touch"></textarea>
             <p style="color: red;"
                class="fs-6"
                v-for="error of v$.spell.spellAHL.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
         </div>
         <div class="row justify-content-end">
          <button class="submit mt-3" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz czar</button>
         </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Czar został utworzony, przenosimy cię na jego strone</p>
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
 name: "VuelidateDemo",
 data() {
   return {
     v$: useVuelidate(),
     submitStatus: null,
     spells: null,
     id: null,
     spell: {
       spellName: null,
       spellSchool: null,
       spellCasting: null,
       spellRange: null,
       spellDuration: null,
       spellComponents: null,
       spellLevel: null,
       spellDesc: null,
       spellAHL: null,
       ownerName: null
     },
     error : null,
   };
 },
 validations() {
   return {
     spell: {
       spellName: {
         required: helpers.withMessage("Nazwa czaru jest wymagana", required),
       },
       spellSchool: {
         required: helpers.withMessage("Szkoła czaru jest wymagana", required),
       },
       spellCasting: {
         required: helpers.withMessage("Czas rzucania czaru jest wymagany", required),
       },
       spellRange: {
         required: helpers.withMessage("Zasięg czaru jest wymagany", required),
       },
       spellDuration: {
         required: helpers.withMessage("Czas trwania czaru jest wymagany", required),
       },
       spellComponents: {
         required: helpers.withMessage("Komponenty czaru są wymagane", required),
       },
       spellLevel: {
         required: helpers.withMessage("Poziom czaru jest wymagany", required),
         integer:  helpers.withMessage("Poziom czaru musi być liczbą", integer),
       },
       spellDesc: {
         required: helpers.withMessage("Opis czaru jest wymagany", required),
       },
       spellAHL: {
         required: helpers.withMessage("Rozwój na wyższych poziomach jest wymagany", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  clearFields() {
    this.spell = {
      spellName: "",
      spellSchool: "",
      spellCasting: "",
      spellRange: "",
      spellDuration: "",
      spellComponents: "",
      spellLevel: null,
      spellDesc: "",
      spellAHL: "",
      upvotes: 0
    }; 
   },
    openStorage () {
      return JSON.parse(localStorage.getItem('spell'))
    },
    saveStorage (spell) {
      localStorage.setItem('spell', JSON.stringify(spell))
    },
    updateForm (input, value) {
      this.spell[input] = value
    
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
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net//api/Spell', this.spell, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then( 
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('spell');    
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net//api/Spell')
                              .then(response => {
                                this.spells = response.data
                                this.id = this.spells[this.spells.length-1].spellId
                                this.$router.push('/Czary/' + this.id)
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
      this.spell.ownerName=this.user.username
      if(this.user == null) {
        localStorage.removeItem('spell'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.spell = {
    			...this.spell,
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