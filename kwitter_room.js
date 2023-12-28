var firebaseConfig = {
      apiKey: "AIzaSyAuZeQX0iD81rd1PbLXHWdHWD_Fcwe_oOI",
      authDomain: "kwitter-bb3f3.firebaseapp.com",
      databaseURL: "https://kwitter-bb3f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-bb3f3",
      storageBucket: "kwitter-bb3f3.appspot.com",
      messagingSenderId: "323372076742",
      appId: "1:323372076742:web:d1d6c46402560d1f14d1c7"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 
   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html";
}
