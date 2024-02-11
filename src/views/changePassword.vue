<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by zmienić hasło</h1>
    <div style="background: #2e2e36;" class="container mb-5 input-box right p-5 mt-4 fs-5">
      
       <div class="justify-content-center">
         <div class="col mb-4 input-field">
             <input type="password" class="input" id="oldPassword" autocomplete="off" placeholder=" " v-model="password.oldPassword" @blur="v$.password.oldPassword.$touch">
             <label style="color: white;" for="oldPassword" class="form-label">Stare hasło:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.password.oldPassword.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col mb-4 input-field">
             <input type="password" class="input" id="newPassword" autocomplete="off" placeholder=" " v-model="password.newPassword" @blur="v$.password.newPassword.$touch">
             <label style="color: white;" for="newPassword" class="form-label">Nowe hasło:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.password.newPassword.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="row justify-content-end">
          <button class="submit mt-3" type="submit" :disabled="submitStatus === 'PENDING'">Zmień hasło:</button>
         </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Hasło zostało zmienione.</p>
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
     password: {
      oldPassword: null,
      newPassword: null,
      
    }, 
     error : null,
   };
 },
 validations() {
   return {
     password: {
      oldPassword: {
         required: helpers.withMessage("Stare hasło jest wymagane", required),
       },
       newPassword: {
         required: helpers.withMessage("Nowe hasło jest wymagane", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  clearFields() {
    this.password = {
      oldPassword: "",
      newPassword: "",
    }; 
   },
    async createPost() {
    const isFormCorrect = await this.v$.$validate()
    if (isFormCorrect) 
    {
        this.submitStatus = 'PENDING'
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/User/edit/password', this.password, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then( 
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'  
                            }, 500)
                    })  
    }
    else 
    {
        this.submitStatus = 'ERROR'
    }  
   },   
 },
};
</script>

<style scoped>
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