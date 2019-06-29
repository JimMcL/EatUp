// Function to initialise Firebase 
function InitFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyCVBKG4upXrtDRSNMGcLzV-Wy5UwjLLtcE",
        authDomain: "human-predators.firebaseapp.com",
        databaseURL: "https://human-predators.firebaseio.com",
        projectId: "human-predators",
        storageBucket: "human-predators.appspot.com",
        messagingSenderId: "179167711766",
        appId: "1:179167711766:web:e01bc266965cfd4c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

