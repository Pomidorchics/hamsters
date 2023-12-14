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
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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