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

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();
{
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
                  //End code

            });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_room.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}