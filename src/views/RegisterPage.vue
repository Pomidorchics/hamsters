<template>
  <h1>Create an Account</h1>
  <p><input type="email" placeholder="email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p><button @click="registerNewUser">Submit</button></p>
  <!-- <p><button @click="signInWithGoogle">Sign In With Google</button></p> -->
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyC3X9I5T6gEvZnJa6UYz6E26acxDn-ED4M",
  authDomain: "hamsters-af226.firebaseapp.com",
  databaseURL: "https://hamsters-af226-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hamsters-af226",
  storageBucket: "hamsters-af226.appspot.com",
  messagingSenderId: "938935418439",
  appId: "1:938935418439:web:2a67929fdea559e9a7fb62",
  measurementId: "G-WYMBRJZ24K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()

export default class Register extends Vue {
    email = "";
    password = "";

    registerNewUser() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
            console.log(res);
            let token = res.user.ma;
            let userId = res.user.uid;

            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);

            this.$router.push('/feed');
            
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }
}
</script>

<style>

</style>