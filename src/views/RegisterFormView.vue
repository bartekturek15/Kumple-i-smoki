<template>
    <form @submit.prevent="createPost">
        <div class="wrapper">
            <div class="container main">
                <div class="row rower mx-auto my-5">
                <div class="col-md-5 side-image">
                    <div class="text">
                        <p  data-aos="fade-right"
                            data-aos-offset="-50"
                            data-aos-delay="50"
                            data-aos-duration="850"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"
                        >Dołącz do społeczności, graczy gier ttrpg<br> <i>- Kumple i Smoki</i></p>
                    </div>
                </div>
                <div class="col-md-7 right">
                    <div class="input-box">
                        <header class="mb-4">Zarejestruj się</header>
                        <div class="input-field fix">
                            <input type="text" class="input" id="email" placeholder=" " autocomplete="off" v-model="postData.email" @blur="v$.postData.email.$touch" />
                            <label for="email">Email</label>
                            <p 
                            data-aos="fade-right"
                            data-aos-offset="-500"
                            data-aos-delay="50"
                            data-aos-duration="850"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"
                            v-for="error of v$.postData.email.$errors"
                            :key="error.$uid"
                            >
                            {{ error.$message }}
                            </p>
                        </div>
                        <div class="input-field fix">
                            <input type="text" autocomplete='off' class="input" id="text" placeholder=" " v-model="postData.username" @blur="v$.postData.username.$touch"/>
                            <label for="text">Nazwa użytkownika</label>
                            <p 
                            data-aos="fade-right"
                            data-aos-offset="-500"
                            data-aos-delay="50"
                            data-aos-duration="850"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"
                            v-for="error of v$.postData.username.$errors"
                            :key="error.$uid"
                            >
                            {{ error.$message }}
                            </p>
                        </div>
                        <div class="input-field fix">
                            <div class=""><input :type="passwordFieldType" class="input inputforpass" id="password" placeholder=" " v-model="postData.password" @blur="v$.postData.password.$touch"  /> 
                                <label for="password">Hasło</label>
                                <button v-if="passwordFieldType != 'password'" class="special" type="password" @click="switchVisibility">
                                <img src="/eye.svg" color="white" width="20" height="25">
                                </button>
                                <button v-if="passwordFieldType != 'text'" class="special" type="password" @click="switchVisibility">
                                    <img src="/eye-slash.svg" color="white" width="20" height="25">
                                </button>
                                <p 
                                data-aos="fade-right"
                                data-aos-offset="-500"
                                data-aos-delay="50"
                                data-aos-duration="850"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center"
                                v-for="error of v$.postData.password.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                                </p>
                            </div>
                        </div>
                        <div class="input-field mt-5">
                            <input type="submit" class="submit" value="Stwórz konto" :disabled="submitStatus === 'PENDING'" />
                            <p style="color: black;" class="mt-2" v-if="submitStatus === 'OK'">Konto zostało utworzone! przenoszenie do strony logowania</p>
                            <p class="mt-2" v-if="submitStatus === 'ERROR'">Prosimy o poprawne wypełnienie formularza.</p>
                            <p class="mt-2" v-if="submitStatus === 'LOGERROR'">Nazwa użytkownika lub e-mail są zajęte</p>
                            <p style="color: black;" class="mt-2" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </form>
        

</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import axios from 'axios';
    import useVuelidate from "@vuelidate/core";
    import { required, helpers, email } from "@vuelidate/validators";

    export default {
    name: "loginForm",
    data() {
        return {
            v$: useVuelidate(),
            submitStatus: null,
            password: "",
            passwordFieldType: "password",
            srcType: "/eye-slash.svg",
            postData: { username: '', password: '', email: '' },
            error : null,

        }
    },
    validations() {
   return {
    postData: {
        username: {
         required: helpers.withMessage("Nazwa użytkownika jest wymagana", required),
       },
       password: {
         required: helpers.withMessage("Hasło jest wymagane", required),
       },
       email: {
         required: helpers.withMessage("Adres e-mail jest wymagany", required),
         email: helpers.withMessage("Adres e-mail jest niepoprawny", email),
       },
     },
   };
 },
    components: {
        Navbar,
    },
    methods: {
        async createPost() {
           
            const isFormCorrect = await this.v$.$validate()
     
            if (isFormCorrect) 
            {
                this.submitStatus = 'PENDING'
                axios.post('https://kumpleismokibbkservice.azurewebsites.net/api/User/register', this.postData)
                        .then( 
                            response => {
                                setTimeout(() => {
                                        this.submitStatus = 'OK'
                                    }, 500)
                                    
                                    setTimeout(() => {
                                        this.$router.push('/Logowanie')
                                    }, 1500)
                            })
                        .catch(
                            err => {
                                this.submitStatus = 'LOGERROR'     
                                }
                        ); 
            }
            else 
            {
                this.submitStatus = 'ERROR'
            }
                
        },
        switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        this.srcType = this.srcType === "/eye-slash.svg" ? "/eye.svg" : "/eye-slash.svg";
        },
    }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
    p {
        font-size: small;
        margin: 0;
        padding: 0;
        color: red;
    }
    .fix {
        margin-bottom: 20px;
    }

    .forgot {
        font-size: small;
    }
    .wrapper {
        background: whitesmoke;
        padding: 23.5px;
    }
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100v;
    }
    .rower {
        width: 900px;
        height: 550px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.2);
    }
    .side-image {
        background-image: url("/sidebar.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 10px 0 0 10px;
    }
    .text {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .text p {
        color: #fff;
        font-size: 20px;
    }
    i {
        font-weight: 400;
        font-size: 17px;
    }
    .right{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .input-box{
        width: 330px;
        box-sizing: border-box;
    }
    .input-box header{
        font-size: larger;
        font-weight: 600;
        text-align: center;
        margin-bottom: 25px;
    }
    .input-field{
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 0 10px 0 10px;
    }
    .special {
        position: absolute;
        left: 285px;
        height: 45px;
        background: transparent;
        border: none;
        outline: none; 
    }
    .input{
        height: 45px;
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        color: #40414a;
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
    .input-field .input:focus, .input-field .input:not(:placeholder-shown){
        border-bottom: 1px solid #743ae1;
    }
    .input-box .input-field .row label{
        position: absolute;
        top: 10px;
        left: 10px;
        pointer-events: none;
        transition: .5s;
    }
    .input-field .row input:focus ~ label
    {
        top: -10px;
        font-size: 13px;
    }
    .input-field .row input:not(:placeholder-shown) ~ label
    {
    top: -10px;
    font-size: 13px;
    color: #5d5076;
    }
    .input-field .row .input:focus, .input-field .input:not(:placeholder-shown){
        border-bottom: 1px solid #743ae1;
    }
    .submit{
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
    .signin{
        text-align: center;
        font-size: small;
        margin-top: 25px;
    }
    span a{
        text-decoration: none;
        font-weight: 700;
        color: #000;
        transition: .5s;
    }
    span a:hover{
        text-decoration: underline;
        color: #000;
    }
    @media only screen and (max-width: 768px){
        .side-image{
            border-radius: 10px 10px 0 0;
        }
        .text{
            position: absolute;
            top: 50%;
            text-align: center;
        }
        .text p, i{
            font-size: 16px;
        }
        .row{
            max-width:420px;
            width: 100%;
        }
    }
</style>