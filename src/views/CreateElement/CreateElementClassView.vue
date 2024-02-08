<template>
  <form @submit.prevent="createPost">
    <h1 class="display-6 text-light text-center mt-4 ps-3 pe-3">Wypełnij pola, by dodać klase do bazy elementów</h1>
    <div style="background: #2e2e36;" class="container input-box right p-5 mt-4 mb-5 fs-5">
      <div class="row justify-content-center">
         <div class="col mb-4 mb-md-5 mt-3 input-field">
             <input type="text" class="input" id="className" autocomplete="off" placeholder=" " :value="dndclass.className" @input="updateForm('className', $event.target.value)" @blur="v$.dndclass.className.$touch">
             <label style="color: white;" for="className" class="form-label">Nazwa:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.dndclass.className.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
        <div class="row mt-1 justify-content-center">
        <h1 class="fs-3 text-light text-left mb-5 ps-3 pe-3">Stwórz table z danymi dla klasy:</h1>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="classColumn" autocomplete="off" placeholder=" " v-model="table.classColumn" @blur="v$.table.classColumn.$touch" @input="set_data()">
             <label style="color: white;" for="classColumn" class="form-label">Kolumny:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.classColumn.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-3 mb-md-5 input-field">
             <input type="text" class="input" id="classRow" autocomplete="off" placeholder=" " v-model="table.classRow" @blur="v$.table.classRow.$touch" @input="set_data()">
             <label style="color: white;" for="classRow" class="form-label">Rzędy:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.classRow.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="d-flex mb-5">
          <button type="button" class="submit me-4" @click="exampleClassData">przykładowe dane</button>
          <button type="button" class="submit ms-auto" @click="createClassTable">Stwórz tabele</button>
        </div>
        <div class="ps-md-5 pe-md-5 mb-3 pt-0 fs-6">
                <table v-if="this.dndclass.classTableData != null" class="table custom-table  table-dark mx-auto overflow-auto">
                    <thead>
                        <tr>
                            <th v-for="(line, row) in  this.dndclass.classTableHeader" :key="row" scope="col">
                              <input type="text" class="input" id="classTableHeader" autocomplete="off" placeholder=" " v-model="dndclass.classTableHeader[row]" @input="set_data()">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(line, row) in this.dndclass.classTableData" :key="row"  class="position-reslative">
                            <td style="color: rgba(255, 255, 255, 0.850);" v-for="(cell, col) in line" :key="col" scope="row">
                                <input type="text" class="input" id="classTableData" autocomplete="off" placeholder=" " v-model="dndclass.classTableData[row][col]" @input="set_data()">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
          <div class="row mt-4 justify-content-center">
        <h1 class="fs-3 text-light text-left mb-5 ps-3 pe-3">Stwórz table z Punktami czarów dla klasy:</h1>
         <div class="col-lg-6 mb-4 mb-md-5 input-field">
             <input type="text" class="input" id="spellColumn" autocomplete="off" placeholder=" " v-model="table.spellColumn" @blur="v$.table.spellColumn.$touch" @input="set_data()">
             <label style="color: white;" for="spellColumn" class="form-label">Kolumny:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.spellColumn.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
         <div class="col-lg-6 mb-3 mb-md-5 input-field">
             <input type="text" class="input" id="spellRow" autocomplete="off" placeholder=" " v-model="table.spellRow" @blur="v$.table.spellRow.$touch" @input="set_data()">
             <label style="color: white;" for="spellRow" class="form-label">Rzędy:</label>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.table.spellRow.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
       </div>
       <div class="d-flex mb-5">
        <button type="button" class="submit me-4" @click="exampleSpellData">przykładowe dane</button>
            <button type="button" class="submit ms-auto" @click="createSpellTable">Stwórz tabele</button>
            
          </div>
        <div class="ps-md-5 pe-md-5 mb-3 pt-0 fs-6">
                <table v-if="this.dndclass.spellTableData != null" class="table custom-table  table-dark mx-auto overflow-auto">
                    <thead>
                        <tr>
                            <th v-for="(line, row) in  this.dndclass.spellTableHeader" :key="row" scope="col">
                              <input type="text" class="input" id="spellTableHeader" autocomplete="off" placeholder=" " v-model="dndclass.spellTableHeader[row]" @input="set_data()">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(line, row) in this.dndclass.spellTableData" :key="row"  class="position-reslative">
                            <td style="color: rgba(255, 255, 255, 0.850);" v-for="(cell, col) in line" :key="col" scope="row">
                                <input type="text" class="input" id="spellTableData" autocomplete="off" placeholder=" " v-model="dndclass.spellTableData[row][col]" @input="set_data()">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="row mt-4 justify-content-center">
            <div class="col-lg-6 mb-4 mb-md-5 input-field">
                <input type="text" class="input" id="classMulticlassReq" autocomplete="off" placeholder=" " v-model="dndclass.classMulticlassReq" @blur="v$.dndclass.classMulticlassReq.$touch" @input="updateForm('classMulticlassReq', $event.target.value)">
                <label style="color: white;" for="classMulticlassReq" class="form-label">Wymagania multiklasowania:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classMulticlassReq.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
            <div class="col-lg-6 mb-3 mb-md-5 input-field">
                <input type="text" class="input" id="classHitDice" autocomplete="off" placeholder=" " v-model="dndclass.classHitDice" @blur="v$.dndclass.classHitDice.$touch" @input="updateForm('classHitDice', $event.target.value)">
                <label style="color: white;" for="classHitDice" class="form-label">Kość życia:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classHitDice.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-lg-6 mb-4 mb-md-5 input-field">
                <input type="text" class="input" id="classHitPointsAtFirst" autocomplete="off" placeholder=" " v-model="dndclass.classHitPointsAtFirst" @blur="v$.dndclass.classHitPointsAtFirst.$touch" @input="updateForm('classHitPointsAtFirst', $event.target.value)">
                <label style="color: white;" for="classHitPointsAtFirst" class="form-label">Na pierwszym poziomie:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classHitPointsAtFirst.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
            <div class="col-lg-6 mb-3 mb-md-5 input-field">
                <input type="text" class="input" id="classHitPointsAtHigh" autocomplete="off" placeholder=" " v-model="dndclass.classHitPointsAtHigh" @blur="v$.dndclass.classHitPointsAtHigh.$touch" @input="updateForm('classHitPointsAtHigh', $event.target.value)">
                <label style="color: white;" for="classHitPointsAtHigh" class="form-label">Na wyższych poziomach:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classHitPointsAtHigh.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-lg-6 mb-4 mb-md-5 input-field">
                <input type="text" class="input" id="classArmorProficency" autocomplete="off" placeholder=" " v-model="dndclass.classArmorProficency" @blur="v$.dndclass.classArmorProficency.$touch" @input="updateForm('classArmorProficency', $event.target.value)">
                <label style="color: white;" for="classArmorProficency" class="form-label">Pancerz:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classArmorProficency.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
            <div class="col-lg-6 mb-3 mb-md-5 input-field">
                <input type="text" class="input" id="classWeaponProficency" autocomplete="off" placeholder=" " v-model="dndclass.classWeaponProficency" @blur="v$.dndclass.classWeaponProficency.$touch" @input="updateForm('classWeaponProficency', $event.target.value)">
                <label style="color: white;" for="classWeaponProficency" class="form-label">Bronie:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classWeaponProficency.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-lg-6 mb-4 mb-md-5 input-field">
                <input type="text" class="input" id="classToolsProficency" autocomplete="off" placeholder=" " v-model="dndclass.classToolsProficency" @blur="v$.dndclass.classToolsProficency.$touch" @input="updateForm('classToolsProficency', $event.target.value)">
                <label style="color: white;" for="classToolsProficency" class="form-label">Narzędzia:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classToolsProficency.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
            <div class="col-lg-6 mb-3 mb-md-5 input-field">
                <input type="text" class="input" id="classSavingThrows" autocomplete="off" placeholder=" " v-model="dndclass.classSavingThrows" @blur="v$.dndclass.classSavingThrows.$touch" @input="updateForm('classSavingThrows', $event.target.value)">
                <label style="color: white;" for="classSavingThrows" class="form-label">Rzuty obronne:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classSavingThrows.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-lg-6 mb-4 mb-md-5 input-field">
                <input type="text" class="input" id="classSkills" autocomplete="off" placeholder=" " v-model="dndclass.classSkills" @blur="v$.dndclass.classSkills.$touch" @input="updateForm('classSkills', $event.target.value)">
                <label style="color: white;" for="classSkills" class="form-label">Umiejętności:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classSkills.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
            <div class="col-lg-6 mb-3 mb-md-5 input-field">
                <input type="text" class="input" id="classEquipment" autocomplete="off" placeholder=" " v-model="dndclass.classEquipment" @blur="v$.dndclass.classEquipment.$touch" @input="updateForm('classEquipment', $event.target.value)">
                <label style="color: white;" for="classEquipment" class="form-label">Ekwipunek:</label>
                <p style="color: red;"
                  class="fs-6"
                  v-for="error of v$.dndclass.classEquipment.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </p>
            </div>
          </div>
       
            <div class="mb-4 mb-md-5 fortextarea">
            <label style="color: white;" for="classDescription" class="form-label">Opis:</label>
            <textarea class="fortextinput form-control" id="classDescription" autocomplete="off" placeholder=" " :value="dndclass.classDescription" @input="updateForm('classDescription', $event.target.value)" rows="3" @blur="v$.dndclass.classDescription.$touch"></textarea>
             <p style="color: red;"
              class="fs-6"
              v-for="error of v$.dndclass.classDescription.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
         </div>
          <div class="d-flex mt-4">
            <button class="submit ms-auto" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz klase</button>
          </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Klasa została utworzona, przenosimy cię na strone dodawania cech</p>
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
 name: "CreateElementdndclassView",
 data() {
   return {
     v$: useVuelidate(),
     submitStatus: null,
     spells: null,
     id: null,
     table: {
      classColumn: 0,
      classRow: 0,
      spellColumn: 0,
      spellRow: 0,
     },
     dndclass: {
      className: null,
      classTableHeader: [],
      classTableData: [[]],
      spellTableHeader: [],
      spellTableData: [[]],
      inheritedClassID: 0,
      classDescription: null,
      classMulticlassReq: null,
      classHitDice: null,
      classHitPointsAtFirst: null,
      classHitPointsAtHigh: null,
      classArmorProficency: null,
      classWeaponProficency: null,
      classToolsProficency: null,
      classSavingThrows: null,
      classSkills: null,
      classEquipment: null,
     },
     error : null,
   };
 },
 validations() {
   return {
    table: {
      classColumn: {
         integer: helpers.withMessage("Musi być liczbą", integer),
       },
      classRow: {
        integer: helpers.withMessage("Musi być liczbą", integer),
      },
      spellColumn: {
        integer: helpers.withMessage("Musi być liczbą", integer),
      },
      spellRow: {
        integer: helpers.withMessage("Musi być liczbą", integer),
      },
    },
    dndclass: {
      className: {
         required: helpers.withMessage("Nazwa klasy jest wymagana", required),
       },
       classDescription: {
         required: helpers.withMessage("Opis rasy jest wymagany", required),
       },
       classMulticlassReq: {
         required: helpers.withMessage("Zasady multiklasowania są wymagane", required),
       },
       classHitDice: {
         required: helpers.withMessage("Kość życia jest wymagana", required),
       },
       classHitPointsAtFirst: {
         required: helpers.withMessage("Życie na pierwszym poziomach jest wymagane", required),
       },
       classHitPointsAtHigh: {
         required: helpers.withMessage("Życie na wyższych poziomach jest wymagane", required),
       },
       classArmorProficency: {
         required: helpers.withMessage("Pancerz jest wymagany", required),
       },
       classWeaponProficency: {
         required: helpers.withMessage("Bronie są wymagane", required),
       },
       classToolsProficency: {
         required: helpers.withMessage("Narzędzia są wymagane", required),
       },
       classSavingThrows: {
         required: helpers.withMessage("Rzuty obronne są wymagane", required),
       },
       classSkills: {
         required: helpers.withMessage("Umiejętności są wymagane", required),
       },
       classEquipment: {
         required: helpers.withMessage("Ekwipunek jest wymagany", required),
       },
     },
   };
 },
 computed: {
        ...mapGetters(['user'])
    },
 methods: {
  exampleSpellData() {
    this.dndclass.spellTableHeader = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty", "Szósty", "Siódmy", "Ósmy", "Dziewiąty"];
    this.dndclass.spellTableData = [["2", "-", "-", "-", "-", "-", "-", "-", "-"],
                                    ["3", "-", "-", "-", "-", "-", "-", "-", "-"],
                                    ["4", "2", "-", "-", "-", "-", "-", "-", "-"],
                                    ["4", "3", "-", "-", "-", "-", "-", "-", "-"],
                                    ["4", "3", "2", "-", "-", "-", "-", "-", "-"],
                                    ["4", "3", "3", "-", "-", "-", "-", "-", "-"],
                                    ["4", "3", "3", "1", "-", "-", "-", "-", "-"],
                                    ["4", "3", "3", "2", "-", "-", "-", "-", "-"],
                                    ["4", "3", "3", "3", "1", "-", "-", "-", "-"],
                                    ["4", "3", "3", "3", "2", "-", "-", "-", "-"],
                                    ["4", "3", "3", "3", "2", "1", "-", "-", "-"],
                                    ["4", "3", "3", "3", "2", "1", "-", "-", "-"],
                                    ["4", "3", "3", "3", "2", "1", "1", "-", "-"],
                                    ["4", "3", "3", "3", "2", "1", "1", "-", "-"],
                                    ["4", "3", "3", "3", "2", "1", "1", "1", "-"],
                                    ["4", "3", "3", "3", "2", "1", "1", "1", "-"],
                                    ["4", "3", "3", "3", "2", "1", "1", "1", "1"],
                                    ["4", "3", "3", "3", "3", "1", "1", "1", "1"],
                                    ["4", "3", "3", "3", "3", "2", "1", "1", "1"],
                                    ["4", "3", "3", "3", "3", "2", "2", "1", "1"],
                                  ]
  },
  exampleClassData() {
    this.dndclass.classTableHeader = ["Poziom", "Bonus do biegłości", "Cechy", "Szały", "Obrażenia Szału"];
    this.dndclass.classTableData = [["1", "+2", "Szał, Nieuzbrojona defensywa", "2", "+2"],
                                    ["2", "+2", "Lekkomyślny atak, Zmysł zagrożenia", "2", "+2"],
                                    ["3", "+2", "Pierwotna ścieżka, Pierwotna wiedza (opcjonalnie)", "3", "+2"],
                                    ["4", "+2", "Poprawa wyniku umiejętności", "3", "+2"],
                                    ["5", "+3", "Dodatkowy atak, szybki ruch", "3", "+2"],
                                    ["6", "+3", "Cecha ścieżki", "4", "+2"],
                                    ["7", "+3", "Dziki instynkt, instynktowne odbicie (opcjonalnie)", "4", "+2"],
                                    ["8", "+3", "Poprawa wyniku umiejętności", "4", "+2"],
                                    ["9", "+4", "Brutalny Krytyczny (1 kość)", "4", "+3"],
                                    ["10", "+4", "Funkcja ścieżki, wiedza pierwotna (opcjonalnie)", "4", "+3"],
                                    ["11", "+4", "Nieustępliwy szał", "4", "+3"],
                                    ["12", "+4", "Poprawa wyniku umiejętności", "5", "+3"],
                                    ["13", "+5", "Brutalny Krytyczny (2 kość)", "5", "+3"],
                                    ["14", "+5", "Cecha ścieżki", "5", "+3"],
                                    ["15", "+5", "Uporczywy gniewh", "5", "+3"],
                                    ["16", "+5", "Poprawa wyniku umiejętności", "5", "+4"],
                                    ["17", "+6", "Brutalny Krytyczny (2 kość)", "6", "+4"],
                                    ["18", "+6", "Nieposkromiona potęga", "6", "+4"],
                                    ["19", "+6", "Poprawa wyniku umiejętności", "6", "+4"],
                                    ["20", "+6", "Pierwotny Mistrz", "nielimitowany", "+4"],
                                    ];
  },
  createClassTable() {
        let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(''));
        if(this.table.classColumn != 0 || this.table.classRow != 0  ) {
          this.dndclass.classTableData = Array2D(parseInt(this.table.classRow-1),parseInt(this.table.classColumn))
          this.dndclass.classTableHeader = Array.from(Array(parseInt(this.table.classColumn)))
        }
        else {
          this.dndclass.classTableData = [];
          this.dndclass.classTableHeader = [];
          localStorage.removeItem('classTableData'); 
          localStorage.removeItem('classTableHeader'); 
        }
    },
    createSpellTable() {
        let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(''));
        if(this.table.spellColumn != 0 || this.table.spellRow != 0  ) {
          this.dndclass.spellTableData = Array2D(parseInt(this.table.spellRow-1),parseInt(this.table.spellColumn))
          this.dndclass.spellTableHeader = Array.from(Array(parseInt(this.table.spellColumn)))
        }
        else {
          this.dndclass.spellTableData = [];
          this.dndclass.spellTableHeader = [];
          localStorage.removeItem('spellTableData'); 
          localStorage.removeItem('spellTableHeader'); 
        }
    },
  clearFields() {
    this.dndclass = {
      className: "",
      classTableHeader: "",
      classTableData: "",
      spellTableData: "",
      spellTableHeader: "",
      classDescription: "",
      classMulticlassReq: "",
      classHitDice: "",
      classHitPointsAtFirst: "",
      classHitPointsAtHigh: "",
      classArmorProficency: "",
      classWeaponProficency: "",
      classToolsProficency: "",
      classSavingThrows: "",
      classSkills: "",
      classEquipment: "",
      ownerName: null,
      upvotes: 0
     }
   },
   set_data() {
      localStorage.setItem( 'classTableData', JSON.stringify(this.dndclass.classTableData));
      localStorage.setItem( 'classTableHeader', JSON.stringify(this.dndclass.classTableHeader));
      localStorage.setItem( 'spellTableData', JSON.stringify(this.dndclass.spellTableData));
      localStorage.setItem( 'spellTableHeader', JSON.stringify(this.dndclass.spellTableHeader));
      localStorage.setItem( 'table', JSON.stringify(this.table));
    },
    openStorage () {
      return JSON.parse(localStorage.getItem('dndclass'))
    },
    saveStorage (dndclass) {
      localStorage.setItem('dndclass', JSON.stringify(dndclass))
    },
    updateForm (input, value) {
      this.dndclass[input] = value
    
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
        
        axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/Dndclass', this.dndclass, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                            }).then(
                    response => {
                            setTimeout(() => {
                                this.submitStatus = 'OK'
                                localStorage.removeItem('dndclass'); 
                                localStorage.removeItem('classTableData'); 
                                localStorage.removeItem('classTableHeader'); 
                                localStorage.removeItem('spellTableData'); 
                                localStorage.removeItem('spellTableHeader'); 
                            }, 500)
                            setTimeout(() => {
                              axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Dndclass')
                              .then(response => {
                                this.spells = response.data
                                this.id = this.spells[this.spells.length-1].classId
                                this.$store.dispatch('dndclassID', this.id);
                                this.$router.push('/TworzenieCechyKlasy')
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
      this.dndclass.ownerName=this.user.username
      const savedspell = JSON.parse(localStorage.getItem('spellTableData'))
      if (savedspell) {
        this.dndclass.spellTableData = savedspell
      }
      const savedspellheader = JSON.parse(localStorage.getItem('spellTableHeader'))
      if (savedspellheader) {
        this.dndclass.spellTableHeader = savedspellheader
      }
      const saved = JSON.parse(localStorage.getItem('classTableData'))
      if (saved) {
        this.dndclass.classTableData = saved
      }
      const savedheader = JSON.parse(localStorage.getItem('classTableHeader'))
      if (savedheader) {
        this.dndclass.classTableHeader = savedheader
      }
      const savedtable = JSON.parse(localStorage.getItem('table'))
      if (savedtable) {
        this.table = savedtable
      }
      if(this.user == null) {
        localStorage.removeItem('spellTableData'); 
        localStorage.removeItem('spellTableHeader'); 
        localStorage.removeItem('classTableData'); 
        localStorage.removeItem('classTableHeader'); 
        localStorage.removeItem('dndclass'); 
      }
    	const storedForm = this.openStorage()
    	if (storedForm) {
    		this.dndclass = {
    			...this.dndclass,
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