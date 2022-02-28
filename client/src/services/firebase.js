import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'
import store from '../store'

const firebaseConfig = {
  apiKey: "AIzaSyCps1_CyrId1qsPq5uQiceHKx-VfR1lk6c",
  authDomain: "zhdu-auth-143a6.firebaseapp.com",
  projectId: "zhdu-auth-143a6",
  storageBucket: "zhdu-auth-143a6.appspot.com",
  messagingSenderId: "463599177472",
  appId: "1:463599177472:web:96a48870c8b4700fdbede5"
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
  store.dispatch('setUser', user);
});

const db = getFirestore();

const colRef = collection(db, 'roles');

const token = localStorage.getItem('Usertoken')

getDocs(colRef)
  .then((snap) => {
    let allUserEmails = [];

    snap.docs.map(email => {
      allUserEmails.push({ ...email.data(), id: email.id })
    })

    let userRoles = allUserEmails.filter(user => {
      return user.id === token
    })

    let Role = []

    userRoles.map(role => {
      Role.push({ ...role.role })
    })

    if(token){
      localStorage.setItem('role', JSON.stringify(Role))
    }
    
  })

