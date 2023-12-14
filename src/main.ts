import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAtOgwZ3Np3198lDmGMij5QiGIAU87bC60",
  authDomain: "hamsters-8267d.firebaseapp.com",
  projectId: "hamsters-8267d",
  storageBucket: "hamsters-8267d.appspot.com",
  messagingSenderId: "111930625032",
  appId: "1:111930625032:web:ac52594afeb952c0e915bd",
  measurementId: "G-WV23LVZS8Z"
};

initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')
