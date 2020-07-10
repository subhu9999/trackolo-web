import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAk-5MsQ-Ow8Ntag7B4KzKriC8WY5yAIqs",
    authDomain: "trackolo.firebaseapp.com",
    databaseURL: "https://trackolo.firebaseio.com",
    projectId: "trackolo",
    storageBucket: "trackolo.appspot.com",
    messagingSenderId: "1067941797004",
    appId: "1:1067941797004:web:9e44628070325951f12fa9"
}

firebase.initializeApp(firebaseConfig);

export default firebase;