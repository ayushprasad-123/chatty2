function lgn() {
  var usr = document.getElementById("usrn").value;
  localStorage.setItem("username", usr);
  window.location = "room.html";
}
var firebaseConfig = {
  apiKey: "AIzaSyAbdkdrGYJfHgEJIQU3vc8Ct49XrItYrco",
  authDomain: "chatty-a993b.firebaseapp.com",
  databaseURL: "https://chatty-a993b-default-rtdb.firebaseio.com",
  projectId: "chatty-a993b",
  storageBucket: "chatty-a993b.appspot.com",
  messagingSenderId: "571762298910",
  appId: "1:571762298910:web:02901e37c5c84471c75e0f"
};
var app = initializeApp(firebaseConfig);

function acc() {
  document.getElementById("acc").innerHTML = "Welcome, " +localStorage.getItem("username");
}
function logout(){
  window.location="index.html";
}



