var firebaseConfig = {
    apiKey: "AIzaSyBc0HWEw3bxMOCMYETPyhjzU4ty3aYtMm8",
    authDomain: "lets-chat-database-aa2cb.firebaseapp.com",
    databaseURL: "https://lets-chat-database-aa2cb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-database-aa2cb",
    storageBucket: "lets-chat-database-aa2cb.appspot.com",
    messagingSenderId: "285362156466",
    appId: "1:285362156466:web:5e07bc6a002dcd24a62aab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = "";

}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}