var firebaseConfig = {
    apiKey: "AIzaSyBc0HWEw3bxMOCMYETPyhjzU4ty3aYtMm8",
    authDomain: "lets-chat-database-aa2cb.firebaseapp.com",
    projectId: "lets-chat-database-aa2cb",
    storageBucket: "lets-chat-database-aa2cb.appspot.com",
    messagingSenderId: "285362156466",
    appId: "1:285362156466:web:5e07bc6a002dcd24a62aab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "lets_room.html";
}