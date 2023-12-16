
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyDeK_gznN17HbS_hgSelD-IrSJGM53ZwXQ",
    
      authDomain: "kwitter-bc8ca.firebaseapp.com",
    
      databaseURL: "https://kwitter-bc8ca-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-bc8ca",
    
      storageBucket: "kwitter-bc8ca.appspot.com",
    
      messagingSenderId: "1064531060859",
    
      appId: "1:1064531060859:web:20f2337e89f2b44ae21ade"
    
    };    
    
    
    // Initialize Firebase
    
if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);

}

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    

function addyroomy(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function loggyout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
