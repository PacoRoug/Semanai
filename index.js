import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap';


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("user_div").style.display ="block";// User is signed in.
      document.getElementById("login_div").style.display ="none";
        document.getElementById("myBtn").style.display ="none";
      var user= firebase.auth().currentUser;

      if(user != null){
        var email_id= user.email;

        document.getElementById("user_para").innerHTML= "Welcome User: "+ email_id;
      }
  } else {
    document.getElementById("user_div").style.display ="none";// User is signed in.
    document.getElementById("login_div").style.display ="block";

  }
});



function login(){


  var userEmail= document.getElementById("email_field").value;
  var userPass= document.getElementById("password_field").value;




firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
    window.alert("Error: "+ errorMessage);
});
}


function logout(){


    firebase.auth().signOut();

}


function signup(){
    var EmailSign= document.getElementById("email_sign").value;
    var PassSign= document.getElementById("password_sign").value;

    firebase.auth().createUserWithEmailAndPassword(EmailSign, PassSign).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
    window.alert("Registration completed ");

}
