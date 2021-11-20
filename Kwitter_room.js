
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPnpX2LbDFFvF2aoWZIpN9lefUyoodJp4",
    authDomain: "project-chat-room-cbff5.firebaseapp.com",
    databaseURL: "https://project-chat-room-cbff5-default-rtdb.firebaseio.com",
    projectId: "project-chat-room-cbff5",
    storageBucket: "project-chat-room-cbff5.appspot.com",
    messagingSenderId: "85286835796",
    appId: "1:85286835796:web:e0a6443ea3e3c38be9bfc1",
    measurementId: "G-0TEX0WJ755"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  function logout()
{
    window.location = "index.html";
}

username = localStorage.getItem("username");
document.getElementById("welcometag").innerHTML = username;
// Your web app's Firebase configurationds