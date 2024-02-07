<template>
    <div class="container-full">
        <nav 
            class="navbar fixed-top navbar-expand-xl bg-dark navbar-dark"
            :class="{ 'navbar--hidden': !showNavbar }"
        >
        <div class="container-fluid">
            <router-link to="/" style="text-decoration: none">
                <a class="navbar-brand" href="#">
                    <img src="/DnD-Emblem.png" alt="Logo" width="50" height="28" class="d-inline-block align-text-top">
                    Kumple i Smoki
                </a>
            </router-link>
            
            
            <a class="nav-link d-xl-none ms-auto" href="#">
            <span v-if="!user">
                <router-link class="nav-link" to="/Logowanie">
                    <button type="button" class="btn loginbutton my-button">Zaloguj się</button>
                </router-link>
            </span>
            <span v-if="user">
                <div class="dropdown">
                    <button class="btn my-button dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-theme="dark" aria-expanded="false">
                        <img src="/Whiteperson.svg" color="white" width="20" height="25">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li class="ms-1"><div class="dropstart">
                        <span class="dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
                            Biblioteka
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="ms-1"><router-link class="dropdown-item" to="/services/design">Stworzone</router-link></li>
                            <li class="ms-1"><router-link class="dropdown-item" to="/services/design">Ulubione</router-link></li>
                        </ul>
                        </div></li>
                        <li class="ms-1"><div class="dropstart">
                        <span class="dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
                            Ustawienia
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="ms-1"><router-link class="dropdown-item" to="/services/design">Zmień hasło użytkownika</router-link></li>
                            <li class="ms-1"><router-link class="dropdown-item" to="/services/design">Zmień nazwe użytkownika</router-link></li>
                        </ul>
                        </div></li>
                        <li><router-link class="dropdown-item" to="" @click="logout">Wyloguj się</router-link></li>
                        <li><hr class="dropdown-divider bg-light"></li>
                        <li class="dropdown-item ms-1">{{ this.user.username}}</li>
                    </ul>
                    </div>
            </span>
                
            </a> 
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
                <li class="nav-item  ms-2 ms-lg-1">
                    <router-link class="nav-link" style="text-decoration: none" to="/">
                        Główna strona
                    </router-link>
                </li>
                <li class="nav-item  ms-2 ms-lg-1">
                    <router-link class="nav-link" style="text-decoration: none" to="/TworzenieElementow">
                        Tworzenie elementów
                    </router-link>
                </li>
                <li class="nav-item  ms-2 ms-md-1">
                    <router-link class="nav-link" style="text-decoration: none" to="/BazaDanychDnD">
                       Baza danych D&D
                    </router-link>
                </li>
                <li class="nav-item  ms-2 ms-lg-1">
                    <router-link class="nav-link" style="text-decoration: none" to="/KartaPostaci">
                        Karta postaci
                    </router-link>
                </li>
                <li class="nav-item  ms-2 ms-lg-1">
                    <router-link class="nav-link" style="text-decoration: none" to="/SesjaOnline">
                        Sesja online
                    </router-link>
                </li>
            </ul>
            
            <span v-if="user == null">
                <router-link class="nav-link ms-sm-3 me-1 d-none d-xl-block" to="/Logowanie">
                    <button style="font-size: 15px;" type="button" class="btn my-button">Zaloguj się</button>
                </router-link>
                
            </span>
            <span v-if="user != null">
                <div class="d-none d-xl-block">
                    <div class="dropdown">
                    <button class="btn my-button dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-theme="dark" aria-expanded="false">
                        <img src="/Whiteperson.svg" color="white" width="20" height="25">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li class="ms-1"><div class="dropstart">
                        <span class="dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
                            Biblioteka
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="ms-1"><router-link class="dropdown-item" to="/StworzoneElementy">Stworzone</router-link></li>
                            <li class="ms-1"><router-link class="dropdown-item" to="/PolubioneElementy">Ulubione</router-link></li>
                        </ul>
                        </div></li>
                        <li class="ms-1"><div class="dropstart">
                        <span class="dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
                            Ustawienia
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="ms-1"><router-link class="dropdown-item" to="/ZmianaHasla">Zmień hasło użytkownika</router-link></li>
                            <li class="ms-1"><router-link class="dropdown-item" to="/ZmianaNazwy">Zmień nazwe użytkownika</router-link></li>
                        </ul>
                        </div></li>
                        <li><router-link class="dropdown-item" to="" @click="logout">Wyloguj się</router-link></li>
                        <li><hr class="dropdown-divider bg-light"></li>
                        <li class="dropdown-item ms-1">{{ this.user.username}}</li>
                    </ul>
                    </div>
                </div>
            </span>
            
        </div>
        </div>
        </nav>
    </div>  
</template>

<script>
import axios from 'axios';

import {mapGetters} from 'vuex'
export default {
    name: "Navbar",
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
            scrollPosition: 0,
        };
    },
    methods: {
    updateScroll() {
        this.scrollPosition = window.scrollY;
        this.showNavbar = this.scrollPosition < this.lastScrollPosition;
        if(this.scrollPosition == 0) {
            this.showNavbar = true
        }
        this.lastScrollPosition = this.scrollPosition;
    },
    logout() {

            const saved1 = JSON.parse(localStorage.getItem('rem'))
            const saved2 = JSON.parse(localStorage.getItem('pass'))
            const saved3 = JSON.parse(localStorage.getItem('email'))
            
            localStorage.removeItem('token');
            this.$store.dispatch('user', null)


            localStorage.clear()

            localStorage.setItem( 'pass', JSON.stringify(saved2));
            localStorage.setItem( 'email', JSON.stringify(saved3));
            localStorage.setItem( 'rem', JSON.stringify(saved1));

            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        window.addEventListener('scroll', this.updateScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.updateScroll);
    },
    computed: {
        ...mapGetters(['user'])
    }
    
};
    </script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
    
    a.router-link-active {
        color: white;
    }
    .navbar {
        transform: translate3d(0, 0, 0);
        transition: 0.25s all ease-out;
    }
    .navbar.navbar--hidden {
        transform: translate3d(0, -100%, 0);
    }
    .dropdown{text-align:center;}
    .dropdown-menu {
        background-color: #1e1f22;
        width:250px; 
        margin-left:-179px;
    }
    .dropdown:hover > .dropdown-menu, .dropstart:hover > .dropdown-menu{
        display: block;
        margin-top: .125em;
    }
    .dropstart:hover > .dropdown-menu{
        position: absolute;
        top: 0;
        right: 100%;
        margin-right: .125em;
    }
    .navbar .navbar-nav .nav-item {
        position: relative;
    }
    .navbar .navbar-nav .nav-item::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        content: '';
        background-color: white;
        width: 0%;
        height: 2px;
        transition: all 0.4s
    }
    .navbar .navbar-nav .nav-item:hover::after {
        width: 100%;   
    }
    .my-button {
        padding: 5px 12px;
        background-color: none;
        border-color: whitesmoke;
        color: whitesmoke;
        transition: .4s;
    }
    .my-button:hover {
        background-color: whitesmoke; 
        color: black;
    }
    .loginbutton {
        font-size: 12px;
    }
    .navbar-toggler {
        border: 0 !important;
    }   

    .navbar-toggler:focus,
    .navbar-toggler:active,
    .navbar-toggler-icon:focus {
        outline: none !important;
        box-shadow: none !important;
        border: 0 !important;
    }
    .toggler-icon{
        width: 30px;
        height: 3px;
        background-color: #e74c3c;
        display: block;
        transition: all 0.2s;
    }
    .middle-bar{
        margin: 5px auto;
    }
    .navbar-toggler .top-bar {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
    }

    .navbar-toggler .middle-bar {
        opacity: 0;
        filter: alpha(opacity=0);
    }

    .navbar-toggler .bottom-bar {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
    }
    .navbar-toggler.collapsed .top-bar {
        transform: rotate(0);
    }

    .navbar-toggler.collapsed .middle-bar {
        opacity: 1;
        filter: alpha(opacity=100);
    }

    .navbar-toggler.collapsed .bottom-bar {
        transform: rotate(0);
    }
    .navbar-toggler.collapsed .toggler-icon {
        background-color: #777777;
    }
    @media screen and (max-width:  992px) {
        .navbar-collapse {
            
            transition: all 0.5s;
        }
    }
    @media screen and (max-width:  1200px) {
        .navbar-collapse {
            
            transition: all 0.5s;
        }
        .dropdown-menu { 
        margin-left:-124px;
        } 
    }
    
</style>
