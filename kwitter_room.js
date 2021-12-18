
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB_6UQlYDRJEFY15kaRyZ-y7KFlyPYHYpU",
      authDomain: "kwitter-fe4e7.firebaseapp.com",
      databaseURL: "https://kwitter-fe4e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe4e7",
      storageBucket: "kwitter-fe4e7.appspot.com",
      messagingSenderId: "691593864376",
      appId: "1:691593864376:web:245b4a141dd0882f8b804d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
