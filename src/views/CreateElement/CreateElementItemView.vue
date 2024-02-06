<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać przedmiot do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container mb-5 input-box right p-5 mt-4 fs-5">
      
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="itemName" autocomplete="off" placeholder=" " :value="item.itemName" @input="updateForm('itemName', $event.target.value)" @blur="v$.item.itemName.$touch">
             <label style="color: white;" for="itemName" class="form-label">Nazwa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.item.itemName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 input-field">
             <input type="text" class="input" id="itemRarity" autocomplete="off" placeholder=" " :value="item.itemRarity" @input="updateForm('itemRarity', $event.target.value)" @blur="v$.item.itemRarity.$touch">
             <label style="color: white;" for="itemRarity" class="form-label">Rzadkość:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.item.itemRarity.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row">
         <div class="col mb-4 input-field justify-content-center">
               <input type="text" class="input" id="itemWeight" autocomplete="off" placeholder=" " :value="item.itemWeight" @input="updateForm('itemWeight', $event.target.value)" @blur="v$.item.itemWeight.$touch">
               <label style="color: white;" for="itemWeight" class="form-label">Waga:</label>
               <p style="color: red;"
                class="fs-6"
                v-for="error of v$.item.itemWeight.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
           </div>
       </div>
       <div class="row justify-content-center">
         <div class="mb-4 fortextarea">
             <label style="color: white;" for="itemDescription" class="form-label">Opis</label>
             <textarea class="fortextinput form-control" id="itemDescription" autocomplete="off" placeholder=" " :value="item.itemDescription" @input="updateForm('itemDescription', $event.target.value)" rows="3" @blur="v$.item.itemDescription.$touch"></textarea>
             <p style="color: red;"
                class="fs-6"
                v-for="error of v$.item.itemDescription.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
         </div>
         <div class="row justify-content-end">
          <button class="submit mt-3" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz przedmiot:</button>
         </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Przedmiot został utworzony, przenosimy cię na jego strone</p>
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
     items: null,
     id: null,
     item: {
      itemName: null,
      itemRarity: null,
      itemDescription: null,
      itemWeight: null,
      ownerName: null,
      upvotes: 0
    }, 
     error : null,
   };
 },
 validations() {
   return {
     item: {
      itemName: {
         required: helpers.withMessage("Nazwa przedmiotu jest wymagana", required),
       },
       itemRarity: {
         required: helpers.withMessage("Rzadkość przedmiotu jest wymagana", required),
       },
       itemDescription: {
         required: helpers.withMessage("Opis przedmiotu jest wymagany", required),
       },
       itemWeight: {
         required: helpers.withMessage("Waga przedmiotu jest wymagana", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  clearFields() {
    this.item = {
      itemName: "",
      itemRarity: "",
      itemDescription: "",
      itemWeight: "",
    }; 
   },
    openStorage () {
      return JSON.parse(localStorage.getItem('item'))
    },
    saveStorage (item) {
      localStorage.setItem('item', JSON.stringify(item))
    },
    updateForm (input, value) {
      this.item[input] = value
    
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
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/item', this.item, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then( 
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('item');    
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/item')
                              .then(response => {
                                this.items = response.data
                                this.id = this.items[this.items.length-1].itemId
                                this.$router.push('/Przedmioty/' + this.id)
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
      this.item.ownerName=this.user.username
      if(this.user == null) {
        localStorage.removeItem('item'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.item = {
    			...this.item,
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