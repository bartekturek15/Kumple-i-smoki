<template>
    <div class="container input-box wid text-center text">
        <h1 class="display-6 mt-4">Karta postaci</h1>
        <form @submit.prevent="createPost">
        <div class="row mb-5 mt-5">        
            <div class="col-3 input-field mt-4">
                <div class="namebox border rounded-start pt-4">
                    <input type="text" class="input me-4 chaname" id="characterName" autocomplete="off" placeholder="Krystian" v-model="character.characterName"  @input="updateForm('characterName', $event.target.value)">
                    <div class="text-start ms-4"><label class="namelab" style="color: whitesmoke;" for="characterName">Nazwa postaci</label></div>
                </div>
            </div>
            <div class="col-3 classbox border border-end-0 rounded-start pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="Classn" autocomplete="off" placeholder="Paladyn" v-model="classitems.className" disabled>
                    <div class="text-start ms-5 "><label style="color: whitesmoke;" for="characterExperience">Klasa </label></div>
                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="Racen" autocomplete="off" placeholder="Elf" v-model="raceitems.raceName" disabled>
                    <div class="text-start ms-5 "><label style="color: whitesmoke;" for="characterExperience">
                        <router-link style="text-decoration: none; color:white" :to="`/Rasy/${character.characterRaceId}`">Rasa 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
                            </svg></router-link>
                </label></div>
                </div>
            </div>
            <div class="col-3 classbox border border-start-0 border-end-0 pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="characterBackground" autocomplete="off" placeholder="Akolita" v-model="character.characterBackground"  @input="updateForm('characterBackground', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterBackground">Przeszłość</label></div>
                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="characterAlignment" autocomplete="off" placeholder="Dobry" v-model="character.characterAlignment"  @input="updateForm('characterAlignment', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterAlignment">Przynależność</label></div>
                </div>
            </div>
            <div class="col-3 classbox border border-start-0 rounded-end pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="characterLevel" autocomplete="off" placeholder="2" v-model="character.characterLevel"  @input="updateForm('characterLevel', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterLevel">Poziom</label></div>
                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="characterExperience" autocomplete="off" placeholder="2300" v-model="character.characterExperience"  @input="updateForm('characterExperience', $event.target.value)">
                    <div class="text-start ms-5 "><label style="color: whitesmoke;" for="characterExperience">Punkty doświadczenia</label></div>
                </div>
            </div>
        </div>

        <div class="row">        
            <div class="col-2 attblockgroup border rounded mb-3 ms-3">
                <div style="font-size: larger;" class="mt-4 me-2">Atrybuty</div>
                <div class="d-block attblock rounded mx-auto mt-4">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterStrength">Siła</label>
                    <input type="text" class="input me-4 att" id="characterStrength" autocomplete="off" placeholder="10" v-model="character.characterStrength"  @input="updateForm('characterStrength', $event.target.value); strUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterStrength/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterDexterity">Zręczność</label>
                    <input type="text" class="input me-4 att" id="characterDexterity" autocomplete="off" placeholder="10" v-model="character.characterDexterity"  @input="updateForm('characterDexterity', $event.target.value); dexUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterDexterity/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterConstitution">Wytrzymałość</label>
                    <input type="text" class="input me-4 att" id="characterConstitution" autocomplete="off" placeholder="10" v-model="character.characterConstitution"  @input="updateForm('characterConstitution', $event.target.value); conUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterConstitution/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterInteligence">Inteligencja</label>
                    <input type="text" class="input me-4 att" id="characterInteligence" autocomplete="off" placeholder="10" v-model="character.characterInteligence"  @input="updateForm('characterInteligence', $event.target.value); intUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterInteligence/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterWisdom">Mądrość</label>
                    <input type="text" class="input me-4 att" id="characterWisdom" autocomplete="off" placeholder="10" v-model="character.characterWisdom"  @input="updateForm('characterWisdom', $event.target.value); wisUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterWisdom/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto mb-3">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterCharisma">Charyzma</label>
                    <input type="text" class="input me-4 att" id="characterCharisma" autocomplete="off" placeholder="10" v-model="character.characterCharisma"  @input="updateForm('characterCharisma', $event.target.value); chaUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterCharisma/2) - 5 }}
                    </div>
                </div>
                
            </div>
            <div class="col-2 mt-2 ms-4">
                <div class="d-block inspblock border rounded ms-4">
                    <input type="text" class="input insp border border-light rounded-circle" id="characterInspiration" autocomplete="off" placeholder="2" v-model="character.characterInspiration"  @input="updateForm('characterInspiration', $event.target.value)">
                    Inspiracje
                </div>
                <div class="d-block inspblock border rounded mt-4 ms-4">
                    <input type="text" class="input insp border border-light rounded-circle" id="characterProficencyBonus" autocomplete="off" placeholder="4" v-model="character.characterProficencyBonus"  @input="updateForm('characterProficencyBonus', $event.target.value)">
                    <span class="ms-3">Bonus do biegłości</span>
                </div>
                <div class="savingblock border rounded ms-2 mt-4">
                    <div class="d-block">
                        <span class="d-flex flex-row pt-3 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[0]" id="flexCheckDefault" @change="set_data(); addProfBonus(0)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowStrength" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowStrength"  @input="updateForm('characterSavingThrowStrength', $event.target.value); character.characterProficencyBools[0] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowStrength">Siła</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[1]" id="flexCheckDefault" @change="set_data(); addProfBonus(1)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowDexterity" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowDexterity"  @input="updateForm('characterSavingThrowDexterity', $event.target.value); character.characterProficencyBools[1] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowDexterity">Zręczność</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[2]" id="flexCheckDefault" @change="set_data(); addProfBonus(2)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowConstitution" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowConstitution"  @input="updateForm('characterSavingThrowConstitution', $event.target.value); character.characterProficencyBools[2] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowConstitution">Wytrzymałość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[3]" id="flexCheckDefault" @change="set_data(); addProfBonus(3)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowInteligence" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowInteligence"  @input="updateForm('characterSavingThrowInteligence', $event.target.value); character.characterProficencyBools[3] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowInteligence">Inteligencja</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[4]" id="flexCheckDefault" @change="set_data(); addProfBonus(4)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowWisdom" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowWisdom"  @input="updateForm('characterSavingThrowWisdom', $event.target.value); character.characterProficencyBools[4] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowWisdom">Mądrość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[5]" id="flexCheckDefault" @change="set_data(); addProfBonus(5)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowCharisma" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowCharisma"  @input="updateForm('characterSavingThrowCharisma', $event.target.value); character.characterProficencyBools[5] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowCharisma">Charyzma</label>
                     </span>
                     <div style="font-size: large;" class="mt-1 me-2">Rzuty obronne</div>
                    </div>
                </div>
                <div class="skillblock border rounded ms-2 mt-4">
                    <div class="d-block">
                        <span class="d-flex flex-row pt-3 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[6]" id="flexCheckDefault" @change="set_data(); addProfBonus(6)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAcrobatics" autocomplete="off" placeholder="0" v-model="character.characterSkillAcrobatics"  @input="updateForm('characterSkillAcrobatics', $event.target.value); character.characterProficencyBools[6] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAcrobatics">Akrobatyka</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[7]" id="flexCheckDefault" @change="set_data(); addProfBonus(7)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAnimalHandling" autocomplete="off" placeholder="0" v-model="character.characterSkillAnimalHandling"  @input="updateForm('characterSkillAnimalHandling', $event.target.value); character.characterProficencyBools[7] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAnimalHandling">Opieka zwierząt</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[8]" id="flexCheckDefault" @change="set_data(); addProfBonus(8)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillArcana" autocomplete="off" placeholder="0" v-model="character.characterSkillArcana"  @input="updateForm('characterSkillArcana', $event.target.value); character.characterProficencyBools[8] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillArcana">Arkana</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[9]" id="flexCheckDefault" @change="set_data(); addProfBonus(9)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAthletics" autocomplete="off" placeholder="0" v-model="character.characterSkillAthletics"  @input="updateForm('characterSkillAthletics', $event.target.value); character.characterProficencyBools[9] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAthletics">Atletyka</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[10]" id="flexCheckDefault" @change="set_data(); addProfBonus(10)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillDeception" autocomplete="off" placeholder="0" v-model="character.characterSkillDeception"  @input="updateForm('characterSkillDeception', $event.target.value); character.characterProficencyBools[10] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillDeception">Oszustwo</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[11]" id="flexCheckDefault" @change="set_data(); addProfBonus(11)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillHistory" autocomplete="off" placeholder="0" v-model="character.characterSkillHistory"  @input="updateForm('characterSkillHistory', $event.target.value); character.characterProficencyBools[11] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillHistory">Historia</label>
                     </span>
                     <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[12]" id="flexCheckDefault" @change="set_data(); addProfBonus(12)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillInsight" autocomplete="off" placeholder="0" v-model="character.characterSkillInsight"  @input="updateForm('characterSkillInsight', $event.target.value); character.characterProficencyBools[12] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillInsight">wnikliwość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[13]" id="flexCheckDefault"  @change="set_data(); addProfBonus(13)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillIntimidation" autocomplete="off" placeholder="0" v-model="character.characterSkillIntimidation"  @input="updateForm('characterSkillIntimidation', $event.target.value); character.characterProficencyBools[13] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillIntimidation">Zastraszanie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[14]" id="flexCheckDefault" @change="set_data(); addProfBonus(14)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillInvestigation" autocomplete="off" placeholder="0" v-model="character.characterSkillInvestigation"  @input="updateForm('characterSkillInvestigation', $event.target.value); character.characterProficencyBools[14] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillInvestigation">Śledztwo</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[15]" id="flexCheckDefault" @change="set_data(); addProfBonus(15)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillMedicine" autocomplete="off" placeholder="0" v-model="character.characterSkillMedicine"  @input="updateForm('characterSkillMedicine', $event.target.value); character.characterProficencyBools[15] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillMedicine">Medycyna</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[16]" id="flexCheckDefault" @change="set_data(); addProfBonus(16)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillNature" autocomplete="off" placeholder="0" v-model="character.characterSkillNature"  @input="updateForm('characterSkillNature', $event.target.value); character.characterProficencyBools[16] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillNature">Natura</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[17]" id="flexCheckDefault" @change="set_data(); addProfBonus(17)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPerception" autocomplete="off" placeholder="0" v-model="character.characterSkillPerception"  @input="updateForm('characterSkillPerception', $event.target.value); character.characterProficencyBools[17] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPerception">Percepcja</label>
                     </span>
                     <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[18]" id="flexCheckDefault" @change="set_data(); addProfBonus(18)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPerformance" autocomplete="off" placeholder="0" v-model="character.characterSkillPerformance"  @input="updateForm('characterSkillPerformance', $event.target.value); character.characterProficencyBools[18] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPerformance">Występy</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[19]" id="flexCheckDefault" @change="set_data(); addProfBonus(19)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPersuation" autocomplete="off" placeholder="0" v-model="character.characterSkillPersuation"  @input="updateForm('characterSkillPersuation', $event.target.value); character.characterProficencyBools[19] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPersuation">Perswazja</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[20]" id="flexCheckDefault" @change="set_data(); addProfBonus(20)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillReligion" autocomplete="off" placeholder="0" v-model="character.characterSkillReligion"  @input="updateForm('characterSkillReligion', $event.target.value); character.characterProficencyBools[20] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillReligion">Religia</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[21]" id="flexCheckDefault" @change="set_data(); addProfBonus(21)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillSleightOfHand" autocomplete="off" placeholder="0" v-model="character.characterSkillSleightOfHand"  @input="updateForm('characterSkillSleightOfHand', $event.target.value); character.characterProficencyBools[21] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillSleightOfHand">Zwinne dłonie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[22]" id="flexCheckDefault" @change="set_data(); addProfBonus(22)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillStealth" autocomplete="off" placeholder="0" v-model="character.characterSkillStealth"  @input="updateForm('characterSkillStealth', $event.target.value); character.characterProficencyBools[22] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillStealth">Skradanie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[23]" id="flexCheckDefault" @change="set_data(); addProfBonus(23)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillSurvival" autocomplete="off" placeholder="0" v-model="character.characterSkillSurvival"  @input="updateForm('characterSkillSurvival', $event.target.value); character.characterProficencyBools[23] = false; set_data()">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillSurvival">Przetrwanie</label>
                     </span>
                     <div style="font-size: large;" class="me-2 mt-1">Umiejętności</div>
                    </div>
                </div>
            </div>
            <div class="col-4"> 
                <div class="d-block ms-5">
                    <span class="d-flex flex-row">
                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterArmorClass" autocomplete="off" placeholder="10" v-model="character.characterArmorClass"  @input="updateForm('characterArmorClass', $event.target.value)">
                            <div class="threetext text border border-2 rounded">
                                Klasa pancerza
                            </div>
                        </div>

                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterInitiative" autocomplete="off" placeholder="0" v-model="character.characterInitiative"  @input="updateForm('characterInitiative', $event.target.value)">
                            <div class="threetext border border-2  rounded">
                                <div class="mt-2 text">inicjatywa</div>
                            </div>
                        </div>

                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterSpeed" autocomplete="off" placeholder="30" v-model="character.characterSpeed"  @input="updateForm('characterSpeed', $event.target.value)">
                            <div class="threetext border border-2  rounded">
                                <div class="mt-2 text">Prędkość</div>
                            </div>
                        </div> 
                </span>
                </div>
                <div class="d-block ms-5 mt-3">
                    <div class="hitpointsblock border rounded-top mt-3">
                        <div style="font-size: 17px;" class="d-inline me-4">Maksymalne punkty życia:</div>
                        <input style="width: 60px; font-size: 20px;" type="text" class="d-inline input me-4 mt-2 saving" id="characterHealthMax" autocomplete="off" placeholder="0" v-model="character.characterHealthMax"  @input="updateForm('characterHealthMax', $event.target.value)">
                    
                        <input style="width: 120px; height: 60px; font-size: 45px;" type="text" class=" input me-3 mt-4 mb-4 hp" id="characterHealthCurrent" autocomplete="off" placeholder="0" v-model="character.characterHealthCurrent"  @input="updateForm('characterHealthCurrent', $event.target.value)">
                        <div style="font-size: 23px;" class="me-3 mb-3">Punkty życia</div>
                    </div>
                    <div class="hitpointsblock border rounded-bottom mt-3">
                        <input style="width: 120px; height: 60px; font-size: 45px;" type="text" class=" input me-3 mt-5 mb-4 hp" id="characterHealthTemp" autocomplete="off" placeholder="0" v-model="character.characterHealthTemp"  @input="updateForm('characterHealthTemp', $event.target.value)">
                        <div style="font-size: 23px;" class="me-3 mb-3">Tymczasowe punkty życia</div>
                    </div>
                </div>
                <div class="d-block ms-5 mt-2">
                    <span class="d-flex flex-row">
                        <div class="deathsaves border rounded mt-3 ms-2">
                            <div style="font-size: 17px;" class="d-inline me-4">Łącznie:</div>
                            <input style="width: 40px; font-size: 16px;" type="text" class="d-inline input me-3 mt-2 saving" id="characterHitDiceTotal" autocomplete="off" placeholder="2d10" v-model="character.characterHitDiceTotal"  @input="updateForm('characterHitDiceTotal', $event.target.value)">

                            <input style="width: 120px; height: 60px; font-size: 30px;" type="text" class=" input ms-2 mt-4 mb-1 hp" id="characterHitDice" autocomplete="off" placeholder="1d10" v-model="character.characterHitDice"  @input="updateForm('characterHitDice', $event.target.value)">
                            <div style="font-size: 17px;" class="">Kości życia</div>
                        </div>
                        <div class="deathsaves border rounded mt-3 ms-4">
                            <span class="d-flex flex-row mt-3">
                                <div style="margin-left: 40px;" class=" mt-4" >Udane:</div>
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave1" id="flexCheckDefault" @click="save1">
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave2" id="flexCheckDefault" @click="save2">
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave3" id="flexCheckDefault" @click="save3">
                            </span>
                            <span style="margin-bottom: 27px;" class="d-flex flex-row mt-1">
                                <div class="ms-3" >Nieudane:</div>
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath1" id="flexCheckDefault" @click="death1">
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath2" id="flexCheckDefault" @click="death2">
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath3" id="flexCheckDefault" @click="death3">
                            </span>
                            <div style="font-size: 17px; margin-bottom: 15px;" class="">Rzuty na śmierć</div>
                        </div>
                    </span>
                </div>
            </div>
            <div class="col-4">
                <div class="hitpointsblock border rounded-top">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Osobowość</div>     
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterPersonalityTraits"  @input="updateForm('characterPersonalityTraits', $event.target.value)"></textarea>   
                </div>
                <div class="hitpointsblock border mt-3">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Ideały</div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterIdeals"  @input="updateForm('characterIdeals', $event.target.value)"></textarea>
                </div>
                <div class="hitpointsblock border mt-3">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Więzi</div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterBonds"  @input="updateForm('characterBonds', $event.target.value)"></textarea>
                </div>
                <div class="hitpointsblock border mt-3 rounded-bottom">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Wady</div>  
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterFlaws"  @input="updateForm('characterFlaws', $event.target.value)"></textarea>   
                </div>
            </div>
        </div>
            <div style="margin-right: 70px;" class="d-flex mt-4 mb-4">
            <button class="submit ms-auto" type="submit" :disabled="submitStatus === 'PENDING'">Zaktualizuj Kartę postaci</button>
          </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Karta postaci została zaktualizowana</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
          </div>
        </form>
    </div>   
  </template>
  
  <script>
     import {mapGetters} from 'vuex'
  import axios from 'axios';
  import useVuelidate from "@vuelidate/core";
  import { required, helpers, integer } from "@vuelidate/validators";
  export default {
   name: "VuelidateDemo",
   props: ['ID', 'link', 'doDelete'],
   data() {
     return {
       v$: useVuelidate(),
       submitStatus: null,
       id: null,
       isCheckedSave1: false,
       isCheckedSave2: false,
       isCheckedSave3: false,
       isCheckedDeath1: false,
       isCheckedDeath2: false,
       isCheckedDeath3: false,
       classitems: [],
       raceitems: [],
       Classn: null,
       Racen: null,
       result: {},
       character: {
        characterId: null,  
        characterName: null, 
        characterLevel: null,  
        characterExperience: null,  
        characterAlignment: null,  
        characterBackground: null,  
        characterStrength: 0,  
        characterDexterity: 0,  
        characterConstitution: 0,  
        characterInteligence: 0,  
        characterWisdom: 0,  
        characterCharisma: 0,  
        characterInspiration: 0,  
        characterProficencyBonus: 0,  
        characterSavingThrowStrength: 0,  
        characterSavingThrowDexterity: 0,  
        characterSavingThrowConstitution: 0,  
        characterSavingThrowInteligence: 0,  
        characterSavingThrowWisdom: 0,  
        characterSavingThrowCharisma: 0, 
        characterSkillAcrobatics: 0,  
        characterSkillAnimalHandling: 0,  
        characterSkillArcana: 0,  
        characterSkillAthletics: 0, 
        characterSkillDeception: 0,  
        characterSkillHistory: 0,  
        characterSkillInsight: 0,  
        characterSkillIntimidation: 0,  
        characterSkillInvestigation: 0,  
        characterSkillMedicine: 0,  
        characterSkillNature: 0,  
        characterSkillPerception: 0,  
        characterSkillPerformance: 0,  
        characterSkillPersuation: 0,  
        characterSkillReligion: 0,  
        characterSkillSleightOfHand: 0,  
        characterSkillStealth: 0,  
        characterSkillSurvival: 0,  
        characterProficencyBools: [],
        characterSkills: "",  
        characterArmorClass: null,  
        characterInitiative: null, 
        characterSpeed: null,  
        characterHealthMax: null,  
        characterHealthCurrent: null,  
        characterHealthTemp: null,  
        characterHitDiceTotal: null,  
        characterHitDice: null,  
        characterDeathSuccess: null,  
        characterDeathFail: null,  
        characterPersonalityTraits: null,  
        characterIdeals: null,  
        characterBonds: null,  
        characterFlaws: null,  
        characterRaceId: null,  
        characterDndClassId: null,  
       },
       error : null,
     };
   },
   validations() {
     return {
     };
   },
   computed: {
          ...mapGetters(['user'])
      },
      watch: {
        'character.characterProficencyBonus'(newval, oldval) {
            if(this.character.characterProficencyBools[0] == true && this.character.characterProficencyBonus !== "" ) {
                if(oldval !== "") {
                    this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) - parseInt(oldval);
                }
                    
                    this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) + parseInt(newval);
                    this.updateForm ('characterSavingThrowStrength', this.character.characterSavingThrowStrength)
            }
            if(this.character.characterProficencyBools[1] == true && this.character.characterProficencyBonus !== "" ) {
                if(oldval !== "") {
                    this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) - parseInt(oldval);
                }
                
                    this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) + parseInt(newval);
                    this.updateForm ('characterSavingThrowDexterity', this.character.characterSavingThrowDexterity)
            }
            if(this.character.characterProficencyBools[2] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) - parseInt(oldval);
                }
        
                    this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) + parseInt(newval);
                    this.updateForm ('characterSavingThrowConstitution', this.character.characterSavingThrowConstitution)
            }
            if(this.character.characterProficencyBools[3] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) - parseInt(oldval);
                }
                
                    this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) + parseInt(newval);
                    this.updateForm ('characterSavingThrowInteligence', this.character.characterSavingThrowInteligence)
            }
            if(this.character.characterProficencyBools[4] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) - parseInt(oldval);
                }
                
                    this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) + parseInt(newval);
                    this.updateForm ('characterSavingThrowWisdom', this.character.characterSavingThrowWisdom)
            }
            if(this.character.characterProficencyBools[5] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) - parseInt(oldval);
                }
                
                    this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) + parseInt(newval);
                    this.updateForm ('characterSavingThrowCharisma', this.character.characterSavingThrowCharisma)
            }
            if(this.character.characterProficencyBools[6] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) - parseInt(oldval);
                }
                
                    this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) + parseInt(newval);
                    this.updateForm ('characterSkillAcrobatics', this.character.characterSkillAcrobatics)
            }
            if(this.character.characterProficencyBools[7] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) - parseInt(oldval);
                }
                
                    this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) + parseInt(newval);
                    this.updateForm ('characterSkillAnimalHandling', this.character.characterSkillAnimalHandling)
            }
            if(this.character.characterProficencyBools[8] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) - parseInt(oldval);
                }
                
                    this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) + parseInt(newval);
                    this.updateForm ('characterSkillArcana', this.character.characterSkillArcana)
            }
            if(this.character.characterProficencyBools[9] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) - parseInt(oldval);
                }
                
                    this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) + parseInt(newval);
                    this.updateForm ('characterSkillAthletics', this.character.characterSkillAthletics)
            }
            if(this.character.characterProficencyBools[10] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) - parseInt(oldval);
                }
                
                    this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) + parseInt(newval);
                    this.updateForm ('characterSkillDeception', this.character.characterSkillDeception)
            }
            if(this.character.characterProficencyBools[11] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) - parseInt(oldval);
                }
                
                    this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) + parseInt(newval);
                    this.updateForm ('characterSkillHistory', this.character.characterSkillHistory)
            }
            if(this.character.characterProficencyBools[12] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) - parseInt(oldval);
                }
                
                    this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) + parseInt(newval);
                    this.updateForm ('characterSkillInsight', this.character.characterSkillInsight)
            }
            if(this.character.characterProficencyBools[13] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) - parseInt(oldval);
                }
                
                    this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) + parseInt(newval);
                    this.updateForm ('characterSkillIntimidation', this.character.characterSkillIntimidation)
            }
            if(this.character.characterProficencyBools[14] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) - parseInt(oldval);
                }
                
                    this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) + parseInt(newval);
                    this.updateForm ('characterSkillInvestigation', this.character.characterSkillInvestigation)
            }
            if(this.character.characterProficencyBools[15] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) - parseInt(oldval);
                }
                
                    this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) + parseInt(newval);
                    this.updateForm ('characterSkillMedicine', this.character.characterSkillMedicine)
            }
            if(this.character.characterProficencyBools[16] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillNature = parseInt(this.character.characterSkillNature) - parseInt(oldval);
                }
                
                    this.character.characterSkillNature = parseInt(this.character.characterSkillNature) + parseInt(newval);
                    this.updateForm ('characterSkillNature', this.character.characterSkillNature)
            }
            if(this.character.characterProficencyBools[17] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) - parseInt(oldval);
                }
                
                    this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) + parseInt(newval);
                    this.updateForm ('characterSkillPerception', this.character.characterSkillPerception)
            }
            if(this.character.characterProficencyBools[18] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) - parseInt(oldval);
                }
                
                    this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) + parseInt(newval);
                    this.updateForm ('characterSkillPerformance', this.character.characterSkillPerformance)
            }
            if(this.character.characterProficencyBools[19] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) - parseInt(oldval);
                }
                
                    this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) + parseInt(newval);
                    this.updateForm ('characterSkillPersuation', this.character.characterSkillPersuation)
            }
            if(this.character.characterProficencyBools[20] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) - parseInt(oldval);
                }
                
                    this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) + parseInt(newval);
                    this.updateForm ('characterSkillReligion', this.character.characterSkillReligion)
            }
            if(this.character.characterProficencyBools[21] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) - parseInt(oldval);
                }
                
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) + parseInt(newval);
                    this.updateForm ('characterSkillSleightOfHand', this.character.characterSkillSleightOfHand)
            }
            if(this.character.characterProficencyBools[22] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) - parseInt(oldval);
                }
                
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) + parseInt(newval);
                    this.updateForm ('characterSkillStealth', this.character.characterSkillStealth)
            }
            if(this.character.characterProficencyBools[23] == true && this.character.characterProficencyBonus !== "") {
                if(oldval !== "") {
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) - parseInt(oldval);
                }
                
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) + parseInt(newval);
                    this.updateForm ('characterSkillSurvival', this.character.characterSkillSurvival)
            }
                    
        }
               

      },
      created () {
        

        axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Character/id/' + this.ID, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then( response => {
                this.character = response.data;
                axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass')
                    .then(response => this.classitems = response.data);

                axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Race')
                    .then(response => this.raceitems = response.data);

                if(this.character.characterProficencyBools[0] == true && this.character.characterProficencyBonus !== "" && this.character.characterProficencyBonus !== "") {
                this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[1] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[2] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[3] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[4] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[5] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[6] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[7] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[8] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[9] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) - parseInt(this.character.characterProficencyBonus);

                } 
                if(this.character.characterProficencyBools[10] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[11] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[12] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[13] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[14] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[15] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[16] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillNature = parseInt(this.character.characterSkillNature) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[17] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[18] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[19] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[20] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[21] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[22] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) - parseInt(this.character.characterProficencyBonus);

                }
                if(this.character.characterProficencyBools[23] == true && this.character.characterProficencyBonus !== "") {
                        this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) - parseInt(this.character.characterProficencyBonus);

                }        
                axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/DndClass/id/' + this.character.characterDndClassId, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => this.classitems = response.data
            );

            axios.get('https://kumpleismokibbkservice.azurewebsites.net/api/Race/id/' + this.character.characterRaceId, {
                headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
            })
            .then(response => {
                this.raceitems = response.data}
            );
            });
            
        
          
          if(this.character.characterDeathSuccess == 1) {
            this.isCheckedSave1 = true && this.character.characterProficencyBonus !== ""
        } else if(this.character.characterDeathSuccess == 2) {
            this.isCheckedSave1 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedSave2 = true && this.character.characterProficencyBonus !== ""
        } else if(this.character.characterDeathSuccess == 3) {
            this.isCheckedSave1 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedSave2 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedSave3 = true && this.character.characterProficencyBonus !== ""
        }

        if(this.character.characterDeathFail == 1) {
            this.isCheckedDeath1 = true && this.character.characterProficencyBonus !== ""
        } else if(this.character.characterDeathFail == 2) {
            this.isCheckedDeath1 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedDeath2 = true && this.character.characterProficencyBonus !== ""
        } else if(this.character.characterDeathFail == 3) {
            this.isCheckedDeath1 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedDeath2 = true && this.character.characterProficencyBonus !== ""
            this.isCheckedDeath3 = true && this.character.characterProficencyBonus !== ""
        }
        
      },
   methods: {
    addProfBonus(num) {
        switch (num) {
            case 0:
            if(this.character.characterProficencyBools[0] == true && this.character.characterProficencyBonus !== "" && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowStrength > 0 && this.character.characterProficencyBools[0] == false){
                    this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowStrength', this.character.characterSavingThrowStrength)
            break;
            case 1:
            if(this.character.characterProficencyBools[1] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowDexterity > 0 && this.character.characterProficencyBools[1] == false){
                    this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowDexterity', this.character.characterSavingThrowDexterity)
            break;
            case 2:
            if(this.character.characterProficencyBools[2] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowConstitution > 0 && this.character.characterProficencyBools[2] == false){
                    this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowConstitution', this.character.characterSavingThrowConstitution)
            break;
            case 3:
            if(this.character.characterProficencyBools[3] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowInteligence > 0 && this.character.characterProficencyBools[3] == false){
                    this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowInteligence', this.character.characterSavingThrowInteligence)
            break;
            case 4:
            if(this.character.characterProficencyBools[4] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowWisdom > 0 && this.character.characterProficencyBools[4] == false){
                    this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowWisdom', this.character.characterSavingThrowWisdom)
            break;
            case 5:
            if(this.character.characterProficencyBools[5] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSavingThrowCharisma > 0 && this.character.characterProficencyBools[5] == false){
                    this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSavingThrowCharisma', this.character.characterSavingThrowCharisma)
            break;
            case 6:
            if(this.character.characterProficencyBools[6] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillAcrobatics > 0 && this.character.characterProficencyBools[6] == false){
                    this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillAcrobatics', this.character.characterSkillAcrobatics)
            break;
            case 7:
            if(this.character.characterProficencyBools[7] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillAnimalHandling > 0 && this.character.characterProficencyBools[7] == false){
                    this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillAnimalHandling', this.character.characterSkillAnimalHandling)
            break;
            case 8:
            if(this.character.characterProficencyBools[8] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillArcana > 0 && this.character.characterProficencyBools[8] == false){
                    this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillArcana', this.character.characterSkillArcana)
            break;
            case 9:
            if(this.character.characterProficencyBools[9] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillAthletics > 0 && this.character.characterProficencyBools[9] == false){
                    this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillAthletics', this.character.characterSkillAthletics)
            break;
            case 10:
            if(this.character.characterProficencyBools[10] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillDeception > 0 && this.character.characterProficencyBools[10] == false){
                    this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillDeception', this.character.characterSkillDeception)
            break;
            case 11:
            if(this.character.characterProficencyBools[11] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillHistory > 0 && this.character.characterProficencyBools[11] == false){
                    this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillHistory', this.character.characterSkillHistory)
            break;
            case 12:
            if(this.character.characterProficencyBools[12] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillInsight > 0 && this.character.characterProficencyBools[12] == false){
                    this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillInsight', this.character.characterSkillInsight)
            break;
            case 13:
            if(this.character.characterProficencyBools[13] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillIntimidation > 0 && this.character.characterProficencyBools[13] == false){
                    this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillIntimidation', this.character.characterSkillIntimidation)
            break;
            case 14:
            if(this.character.characterProficencyBools[14] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillInvestigation > 0 && this.character.characterProficencyBools[14] == false){
                    this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillInvestigation', this.character.characterSkillInvestigation)
            break;
            case 15:
            if(this.character.characterProficencyBools[15] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillMedicine > 0 && this.character.characterProficencyBools[15] == false){
                    this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillMedicine', this.character.characterSkillMedicine)
            break;
            case 16:
            if(this.character.characterProficencyBools[16] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillNature = parseInt(this.character.characterSkillNature) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillNature > 0 && this.character.characterProficencyBools[15] == false){
                    this.character.characterSkillNature = parseInt(this.character.characterSkillNature) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillNature', this.character.characterSkillNature)
            break;
            case 17:
            if(this.character.characterProficencyBools[17] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillPerception > 0 && this.character.characterProficencyBools[17] == false){
                    this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillPerception', this.character.characterSkillPerception)
            break;
            case 18:
            if(this.character.characterProficencyBools[18] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillPerformance > 0 && this.character.characterProficencyBools[18] == false){
                    this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillPerformance', this.character.characterSkillPerformance)
            break;
            case 19:
            if(this.character.characterProficencyBools[19] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillPersuation > 0 && this.character.characterProficencyBools[19] == false){
                    this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillPersuation', this.character.characterSkillPersuation)
            break;
            case 20:
            if(this.character.characterProficencyBools[20] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillReligion > 0 && this.character.characterProficencyBools[20] == false){
                    this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillReligion', this.character.characterSkillReligion)
            break;
            case 21:
            if(this.character.characterProficencyBools[21] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillSleightOfHand > 0 && this.character.characterProficencyBools[21] == false){
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillSleightOfHand', this.character.characterSkillSleightOfHand)
            break;
            case 22:
            if(this.character.characterProficencyBools[22] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillStealth > 0 && this.character.characterProficencyBools[22] == false){
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillStealth', this.character.characterSkillStealth)
            break;
            case 23:
            if(this.character.characterProficencyBools[23] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) + parseInt(this.character.characterProficencyBonus);
                } else if(this.character.characterSkillSurvival > 0 && this.character.characterProficencyBools[23] == false){
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillSurvival', this.character.characterSkillSurvival)
            break;

            
        }
    },
    save1() {
        
        this.isCheckedSave1 = !this.isCheckedSave1
        if(this.isCheckedSave1 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    save2() {
        this.isCheckedSave2 = !this.isCheckedSave2
        if(this.isCheckedSave2 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    save3() {
        this.isCheckedSave3 = !this.isCheckedSave3
        if(this.isCheckedSave3 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    death1() {
        
        this.isCheckedDeath1 = !this.isCheckedDeath1
        if(this.isCheckedDeath1 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    death2() {
        

        this.isCheckedDeath2 = !this.isCheckedDeath2
        if(this.isCheckedDeath2 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    death3() {
        
        this.isCheckedDeath3 = !this.isCheckedDeath3
        if(this.isCheckedDeath3 == true && this.character.characterProficencyBonus !== "") {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    changeRaceName(item) {
        this.Racen = item.raceName
        this.character.characterRaceId = item.raceId
        this.set_data()
    },
    changeClassName(item) {
        this.Classn = item.className
        this.character.characterDndClassId = item.classId
        this.set_data()
    },
    clearFields() {
      this.character = {
        characterName: "",
        characterSchool: "",
        characterCasting: "",
        characterRange: "",
        characterDuration: "",
        characterComponents: "",
        characterLevel: null,
        characterDesc: "",
        characterAHL: "",
        upvotes: 0
      }; 
     },
      async createPost() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) 
      {
          this.submitStatus = 'PENDING'
          
          axios.put('https://kumpleismokibbkservice.azurewebsites.net/api/Character', this.character, {
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
     strUpdate() {
            this.character.characterSavingThrowStrength = Math.floor(this.character.characterStrength/2) - 5
            if(this.character.characterProficencyBools[0] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowStrength = parseInt(this.character.characterSavingThrowStrength) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowStrength', this.character.characterSavingThrowStrength)

            this.character.characterSkillAthletics = Math.floor(this.character.characterStrength/2) - 5
            if(this.character.characterProficencyBools[9] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAthletics = parseInt(this.character.characterSkillAthletics) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillAthletics', this.character.characterSkillAthletics)
     },
     dexUpdate() {

            this.character.characterSavingThrowDexterity = Math.floor(this.character.characterDexterity/2) - 5
            if(this.character.characterProficencyBools[1] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowDexterity = parseInt(this.character.characterSavingThrowDexterity) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowDexterity', this.character.characterSavingThrowDexterity)

            this.character.characterSkillAcrobatics = Math.floor(this.character.characterDexterity/2) - 5
            if(this.character.characterProficencyBools[6] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAcrobatics = parseInt(this.character.characterSkillAcrobatics) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillAcrobatics', this.character.characterSkillAcrobatics)

            this.character.characterSkillSleightOfHand = Math.floor(this.character.characterDexterity/2) - 5
            if(this.character.characterProficencyBools[21] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillSleightOfHand', this.character.characterSkillSleightOfHand)

            this.character.characterSkillStealth = Math.floor(this.character.characterDexterity/2) - 5
            if(this.character.characterProficencyBools[22] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillStealth', this.character.characterSkillStealth)

     },
     conUpdate() {
         
            this.character.characterSavingThrowConstitution = Math.floor(this.character.characterConstitution/2) - 5
            if(this.character.characterProficencyBools[2] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowConstitution = parseInt(this.character.characterSavingThrowConstitution) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowConstitution', this.character.characterSavingThrowConstitution)
        
     },  
     intUpdate() {

       
            this.character.characterSavingThrowInteligence = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[3] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowInteligence = parseInt(this.character.characterSavingThrowInteligence) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowInteligence', this.character.characterSavingThrowInteligence)

            this.character.characterSkillArcana = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[8] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillArcana = parseInt(this.character.characterSkillArcana) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillArcana', this.character.characterSkillArcana)

            this.character.characterSkillHistory = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[11] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillHistory = parseInt(this.character.characterSkillHistory) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillHistory', this.character.characterSkillHistory)

            this.character.characterSkillInvestigation = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[14] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillInvestigation = parseInt(this.character.characterSkillInvestigation) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillInvestigation', this.character.characterSkillInvestigation)

            this.character.characterSkillNature = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[16] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillNature = parseInt(this.character.characterSkillNature) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillNature', this.character.characterSkillNature)
            
            this.character.characterSkillReligion = Math.floor(this.character.characterInteligence/2) - 5
            if(this.character.characterProficencyBools[20] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillReligion = parseInt(this.character.characterSkillReligion) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillReligion', this.character.characterSkillReligion)
    
      },
      wisUpdate() {
         
      
            this.character.characterSavingThrowWisdom = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[4] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowWisdom = parseInt(this.character.characterSavingThrowWisdom) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowWisdom', this.character.characterSavingThrowWisdom)

            this.character.characterSkillAnimalHandling = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[7] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillAnimalHandling = parseInt(this.character.characterSkillAnimalHandling) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillAnimalHandling', this.character.characterSkillAnimalHandling)

            this.character.characterSkillMedicine = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[15] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillMedicine = parseInt(this.character.characterSkillMedicine) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillMedicine', this.character.characterSkillMedicine)

            this.character.characterSkillInsight = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[12] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillInsight = parseInt(this.character.characterSkillInsight) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillInsight', this.character.characterSkillInsight)

            this.character.characterSkillPerception = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[17] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPerception = parseInt(this.character.characterSkillPerception) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillPerception', this.character.characterSkillPerception)

            this.character.characterSkillSurvival = Math.floor(this.character.characterWisdom/2) - 5
            if(this.character.characterProficencyBools[23] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillSurvival', this.character.characterSkillSurvival)
        
      },
      chaUpdate() {
         
    
            this.character.characterSavingThrowCharisma = Math.floor(this.character.characterCharisma/2) - 5
            if(this.character.characterProficencyBools[5] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSavingThrowCharisma = parseInt(this.character.characterSavingThrowCharisma) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSavingThrowCharisma', this.character.characterSavingThrowCharisma)

            this.character.characterSkillDeception = Math.floor(this.character.characterCharisma/2) - 5
            if(this.character.characterProficencyBools[10] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillDeception = parseInt(this.character.characterSkillDeception) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillDeception', this.character.characterSkillDeception)

            this.character.characterSkillIntimidation = Math.floor(this.character.characterCharisma/2) - 5
            if(this.character.characterProficencyBools[13] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillIntimidation = parseInt(this.character.characterSkillIntimidation) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillIntimidation', this.character.characterSkillIntimidation)

            this.character.characterSkillPerformance = Math.floor(this.character.characterCharisma/2) - 5
            if(this.character.characterProficencyBools[18] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPerformance = parseInt(this.character.characterSkillPerformance) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillPerformance', this.character.characterSkillPerformance)

            this.character.characterSkillPersuation = Math.floor(this.character.characterCharisma/2) - 5
            if(this.character.characterProficencyBools[19] == true && this.character.characterProficencyBonus !== "") {
                    this.character.characterSkillPersuation = parseInt(this.character.characterSkillPersuation) + parseInt(this.character.characterProficencyBonus);
            }
            this.updateForm('characterSkillPersuation', this.character.characterSkillPersuation)

      },      
   },
   
   
  };
  </script>
  
  <style scoped>
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
    .form-control {
        background-color: #2e2e36;
        border: none;
        color: whitesmoke;
    }
  .deathsaves {
    width: 162px;
    height: 150px;
    background-color: #2e2e36;
  }
  .hp {
    height: 17px;
    width: 40px;
    border: none;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
    text-align: center;
  }
  .hitpointsblock {
    width: 346px;
    height: 180px;
    background-color: #2e2e36;
    margin-left: 10px;
  }
 .threetext {
    line-height: 1;
    position: absolute;
    background-color: #2e2e36;
    height: 30px;
    width: 80px;
    left: 3px;
    top: 76px;
    color: #53535b;
    font-size: 13px;
    z-index: 5;
 }
 .three {
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: rgb(26, 25, 25);
    text-align: center;
    margin-left: 20px;
    margin-top: 23px;
    border: none;
    background-color: #2e2e36;
    color: whitesmoke;
  }
  .threeblock {
    width: 90px;
    height: 90px;
    background-color: #2e2e36;
    position: relative;
  }
  .form-check-input {
    background-color: darkslategrey !important;
    height: 12px;
    width: 12px;
  }
  .form-check-input:checked {
    background-color: white !important;
    color: #2e2e36;
    border: none;
  }
  .savingblock {
    background-color: #2e2e36;
    height: 240px;
    width: 225px;
  }
  .skillblock {
    background-color: #2e2e36;
    height: 640px;
    width: 225px;
  }
  .saving {
    height: 17px;
    width: 40px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
    text-align: center;
  }
  .saving:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .inp {
    border: none;
    border-bottom: 1px solid white;
    background-color: #37373d;
    color: whitesmoke;
    font-size: 18px;
  }
  .inp:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .insp {
    width: 45px;
    height: 45px;
    margin: 0 !important;
    padding: 0 !important;
    position: absolute;
    z-index: 2;
    left: -15px;
    top: -8px;
    text-align: center;
    font-size: 25px;
  }
  .inspblock {
    margin-left: 15px;
    background-color: #2e2e36;
    height: 30px;
    width: 200px;
    padding-top: 3px;
    position: relative;
    
  }
  .namelab {
    margin-left: 10px;
  }
  .chaname {
    margin-left: 25px;
    width: 265px;
    height: 37px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
  }
  .chaname:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .attblockgroup {
    background-color: #37373d;
    margin-left: 13px;
    height: 1020px;
    width: 180px;
  }
  .attblock {
    width: 110px;
    height: 110px;
    background-color: white;
    margin-top: 45px;
    position: relative;
  }
  .attbonus {
    position: absolute;
    background-color: white;
    height: 30px;
    width: 30px;
    left: 40px;
    top: 96px;
    color: #53535b;
  }
 .att {
    width: 75px;
    height: 75px;
    font-size: 60px;
    color: rgb(26, 25, 25);
    text-align: center;
    margin-left: 19px;
    border: none;
}
 .wid {
    min-width: 1200px;
}
 .namebox {
background: #2e2e36;
height: 100px;
width: 320px;
}

 .classbox {
background: #37373d;
height: 150px;
width: 306px;
}
 .text {
color: whitesmoke;
}
  </style>