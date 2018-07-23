(function() {
      // Initialize Firebase
      var config = {
            apiKey: "AIzaSyD_iE72gO_qiX1KMH1kJGT7d-hzFscjS1w",
            authDomain: "woofer-3c420.firebaseapp.com",
            databaseURL: "https://woofer-3c420.firebaseio.com",
            projectId: "woofer-3c420",
            storageBucket: "",
            messagingSenderId: "723483471961"
      };
      firebase.initializeApp(config);

      const txt_email = document.getElementById('username');
      const txt_pass = document.getElementById('password');
      const btn_login = document.getElementById('login');
      const btn_signup = document.getElementById('signup');
      
      //Add login event
      btn_login.addEventListener('click', e=> {
            //Get email and password:
            const email = txt_email;
            const pass = txt_pass;
            const auth = firebase.auth();
            //Sign in!
            auth.signInWithEmailAndPassword(email, pass);
      });
      
      //Add signup event
      btn_signup.addEventListener('click', e=> {
            //Get email and password:
            const email = txt_email;
            const pass = txt_pass;
            const auth = firebase.auth();
            //Sign up!
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // [START_EXCLUDE]
                  if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                  } else {
                        alert(errorMessage);
                  }
                  console.log(error);
             // [END_EXCLUDE]
            });
      });
      
}());     
<script>
      // When the user clicks on <div>, open the popup
      function myFunction() {
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
      }
</script>

