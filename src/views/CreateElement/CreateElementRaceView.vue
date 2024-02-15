<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać rase do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container  input-box right p-5 mt-4 mb-5 fs-5">
      <div class="row justify-content-center">
         <div class="col mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceName" autocomplete="off" placeholder=" " :value="race.raceName" @input="updateForm('raceName', $event.target.value)" @blur="v$.race.raceName.$touch">
             <label style="color: white;" for="raceName" class="form-label">Nazwa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceAbilityScoreIncrease" autocomplete="off" placeholder=" " :value="race.raceAbilityScoreIncrease" @input="updateForm('raceAbilityScoreIncrease', $event.target.value)" @blur="v$.race.raceAbilityScoreIncrease.$touch">
             <label style="color: white;" for="raceAbilityScoreIncrease" class="form-label">ASI:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceAbilityScoreIncrease.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceAge" autocomplete="off" placeholder=" " :value="race.raceAge" @input="updateForm('raceAge', $event.target.value)" @blur="v$.race.raceAge.$touch">
             <label style="color: white;" for="raceAge" class="form-label">Wiek:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceAge.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceAlignment" autocomplete="off" placeholder=" " :value="race.raceAlignment" @input="updateForm('raceAlignment', $event.target.value)" @blur="v$.race.raceAlignment.$touch">
             <label style="color: white;" for="raceAlignment" class="form-label">Przynależność:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceAlignment.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceSize" autocomplete="off" placeholder=" " :value="race.raceSize" @input="updateForm('raceSize', $event.target.value)" @blur="v$.race.raceSize.$touch">
             <label style="color: white;" for="raceSize" class="form-label">Rozmiar:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceSize.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceSpeed" autocomplete="off" placeholder=" " :value="race.raceSpeed" @input="updateForm('raceSpeed', $event.target.value)" @blur="v$.race.raceSpeed.$touch">
             <label style="color: white;" for="raceSpeed" class="form-label">Prędkość:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceSpeed.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="raceLanguages" autocomplete="off" placeholder=" " :value="race.raceLanguages" @input="updateForm('raceLanguages', $event.target.value)" @blur="v$.race.raceLanguages.$touch">
             <label style="color: white;" for="raceLanguages" class="form-label">Języki:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceLanguages.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="row justify-content-center">
         <div class="mb-4 mb-md-5 fortextarea">
            <label style="color: white;" for="raceDescription" class="form-label">Opis:</label>
            <textarea class="fortextinput form-control" id="raceDescription" autocomplete="off" placeholder=" " :value="race.raceDescription" @input="updateForm('raceDescription', $event.target.value)" rows="3" @blur="v$.race.raceDescription.$touch"></textarea>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.race.raceDescription.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="row mt-4 justify-content-center">
        <h1 class="fs-3 text-light text-left mb-5 ps-3 pe-3">Stwórz table z danymi dla rasy:</h1>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="kolumny" autocomplete="off" placeholder=" " v-model="table.kolumny" @blur="v$.table.kolumny.$touch" @input="set_data()">
             <label style="color: white;" for="kolumny" class="form-label">Kolumny:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.kolumny.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-3 mb-md-5 input-field">
             <input type="text" class="input" id="rzedy" autocomplete="off" placeholder=" " v-model="table.rzedy" @blur="v$.table.rzedy.$touch" @input="set_data()">
             <label style="color: white;" for="rzedy" class="form-label">Rzędy:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.rzedy.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
         <div class="row justify-content-center"></div>
        <div class="ps-md-5 pe-md-5 mb-3 pt-0 fs-6">
                <table v-if="this.race.raceTableData != null" class="table custom-table  table-dark mx-auto overflow-auto">
                    <thead>
                        <tr>
                            <th v-for="(line, row) in  this.race.raceTableHeader" :key="row" scope="col">
                              <input type="text" class="input" id="raceTableHeader" autocomplete="off" placeholder=" " v-model="race.raceTableHeader[row]" @input="set_data()">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(line, row) in this.race.raceTableData" :key="row"  class="position-reslative">
                            <td style="color: rgba(255, 255, 255, 0.850);" v-for="(cell, col) in line" :key="col" scope="row">
                                <input type="text" class="input" id="raceTableData" autocomplete="off" placeholder=" " v-model="race.raceTableData[row][col]" @input="set_data()">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          <div class="d-flex mt-4">
            <button type="button" class="submit me-4" @click="createTable">Stwórz tabele</button>
            <button class="submit ms-auto" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz rase</button>
          </div>
       </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Przeciwnik został utworzony, przenosimy cię na jego strone</p>
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
 name: "CreateElementraceView",
 data() {
   return {
     v$: useVuelidate(),
     submitStatus: null,
     spells: null,
     id: null,
     table: {
      kolumny: 0,
      rzedy: 0,
     },
     race: {
      raceName: null,
      raceTableHeader: [],
      raceTableData: [],
      inheritedRaceID: 0,
      raceAbilityScoreIncrease: null,
      raceAge: null,
      raceAlignment: null,
      raceSize: null,
      raceSpeed: null,
      raceLanguages: null,
      raceDescription: null,
      upvotes: 0
     },
     error : null,
   };
 },
 validations() {
   return {
    table: {
      kolumny: {
         integer: helpers.withMessage("Musi być liczbą", integer),
       },
      rzedy: {
        integer: helpers.withMessage("Musi być liczbą", integer),
      },
    },
    race: {
      raceName: {
         required: helpers.withMessage("Nazwa rasy jest wymagana", required),
       },
       raceAbilityScoreIncrease: {
         required: helpers.withMessage("ASI rasy jest wymagane", required),
       },
       raceAge: {
         required: helpers.withMessage("Wiek rasy jest wymagany", required),
       },
       raceAlignment: {
         required: helpers.withMessage("Przynależność rasy jest wymagana", required),
       },
       raceSize: {
         required: helpers.withMessage("Rozmiar rasy jest wymagany", required),
       },
       raceSpeed: {
         required: helpers.withMessage("Prędkość rasy są wymagana", required),
       },
       raceLanguages: {
         required: helpers.withMessage("Języki rasy są wymagane", required),
       },
       raceDescription: {
         required: helpers.withMessage("Opis rasy jest wymagany", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  createTable() {
        let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(''));
        if(this.table.kolumny != 0 || this.table.rzedy != 0  ) {
          this.race.raceTableData = Array2D(parseInt(this.table.rzedy-1),parseInt(this.table.kolumny))
          this.race.raceTableHeader = Array.from(Array(parseInt(this.table.kolumny)))
        }
        else {
          this.race.raceTableData = [];
          this.race.raceTableHeader = [];
          localStorage.removeItem('raceTableData'); 
          localStorage.removeItem('raceTableHeader'); 
        }
    },
    
  clearFields() {
    this.race = {
      raceName: "",
      raceTableHeader: "",
      raceTableData: "",
      raceAbilityScoreIncrease: "",
      raceAge: "",
      raceAlignment: "",
      raceSize: "",
      raceSpeed: "",
      raceLanguages: "",
      raceDescription: "",
      ownerName: null
     }
   },
   set_data() {
      localStorage.setItem( 'raceTableData', JSON.stringify(this.race.raceTableData));
      localStorage.setItem( 'raceTableHeader', JSON.stringify(this.race.raceTableHeader));
      localStorage.setItem( 'table', JSON.stringify(this.table));
    },
    openStorage () {
      return JSON.parse(localStorage.getItem('race'))
    },
    saveStorage (race) {
      localStorage.setItem('race', JSON.stringify(race))
    },
    updateForm (input, value) {
      this.race[input] = value
    
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
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/Race', this.race, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then(
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('race'); 
                                localStorage.removeItem('raceTableData'); 
                                localStorage.removeItem('raceTableHeader'); 
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Race')
                              .then(response => {
                                this.spells = response.data
                                this.id = this.spells[this.spells.length-1].raceId
                                this.$store.dispatch('raceID', this.id);
                                this.$router.push('/TworzenieCechyRasy')
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
      this.race.ownerName=this.user.username
      const saved = JSON.parse(localStorage.getItem('raceTableData'))
      if (saved) {
        this.race.raceTableData = saved
      }
      const savedheader = JSON.parse(localStorage.getItem('raceTableHeader'))
      if (savedheader) {
        this.race.raceTableHeader = savedheader
      }
      const savedtable = JSON.parse(localStorage.getItem('table'))
      if (savedtable) {
        this.table = savedtable
      }
      if(this.user == null) {
        localStorage.removeItem('raceTableData'); 
        localStorage.removeItem('raceTableHeader'); 
        localStorage.removeItem('race'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.race = {
    			...this.race,
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