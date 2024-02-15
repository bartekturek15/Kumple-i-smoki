<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać podrase do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container  input-box right p-5 mt-4 mb-5 fs-5">
      <div class="row justify-content-center">
         <div class="col mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="subclassName" autocomplete="off" placeholder=" " :value="subclass.subclassName" @input="updateForm('subclassName', $event.target.value)" @blur="v$.subclass.subclassName.$touch">
             <label style="color: white;" for="subclassName" class="form-label">Nazwa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.subclass.subclassName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <select v-model="classid" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option v-for="item in classitems" :key="item.classId" :value="item.classId">{{ item.className }}</option>
      </select>
       <div class="row justify-content-center">
         <div class="mb-4 mb-md-5 fortextarea">
            <label style="color: white;" for="subclassDesc" class="form-label">Opis:</label>
            <textarea class="fortextinput form-control" id="subclassDesc" autocomplete="off" placeholder=" " :value="subclass.subclassDesc" @input="updateForm('subclassDesc', $event.target.value)" rows="3" @blur="v$.subclass.subclassDesc.$touch"></textarea>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.subclass.subclassDesc.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         
          <div class="d-flex mt-4">
            <button class="submit ms-auto" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz podklase</button>
          </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Podklasa została utworzona, przenosimy cię na strone do dodania jej cech</p>
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
import { required, helpers, integer, or } from "@vuelidate/validators";
export default {
 name: "CreateElementSubclassView",
 data() {
   return {
     v$: useVuelidate(),
     classitems: null,
     submitStatus: null,
     spells: null,
     classid: null,
     id: null,
     subclass: {
      subclassName: null,
      subclassDesc: null,
      ownerName: null,
      upvotes: 0
     },
     error : null,
   };
 },
 validations() {
   return {
    subclass: {
      subclassName: {
         required: helpers.withMessage("Nazwa podklasy jest wymagana", required),
       },
       subclassDesc: {
         required: helpers.withMessage("Opis podklasy jest wymagany", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
    openStorage () {
      return JSON.parse(localStorage.getItem('subclass'))
    },
    saveStorage (subclass) {
      localStorage.setItem('subclass', JSON.stringify(subclass))
    },
    updateForm (input, value) {
      this.subclass[input] = value
    
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
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/DndSubclass?classid=' + this.classid, this.subclass, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then(
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('subclass'); 
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndSubclass')
                              .then(response => {
                                this.spells = response.data
                                this.id = this.spells[this.spells.length-1].subclassId
                                this.$store.dispatch('subclassID', this.id);
                                this.$router.push('/TworzenieCechyPodklas')
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
    axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass')
              .then(response => this.classitems = response.data);
      this.subclass.ownerName=this.user.username
      if(this.user == null) {
        localStorage.removeItem('subclass'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.subclass = {
    			...this.subclass,
    			...storedForm
    		}
    	}
      
    }
};
</script>

<style scoped>
 @media screen and (min-width:  992px) and (max-width:  1300px) {
            .custom-table {
                font-size: 14px;
                
            }
        }
    @media screen and (max-width:  992px) {
            .custom-table {
                font-size: 12px;
                
            }
        }
    .btn:hover {
        border-color: white;
        border: 1px solid;
    }
    .table {
        border-collapse: separate;
        border-spacing:0 5px;
    }
    .custom-table {
        color: white;
    }
    .custom-table thead tr, .custom-table thead th {
        border-top: none;
        border-bottom: none !important; 
        
    }
    .custom-table tbody th, .custom-table tbody td {
        
        font-weight: 400;
        padding-bottom: 20px;
        padding-top: 20px;
        font-weight: 300; 
        
    }
    .custom-table tbody tr th, .custom-table tbody tr td {
        background: #27272d;
        border: none;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; 
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