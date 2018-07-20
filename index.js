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
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
      });
      
      //Add signup event
      btn_signup.addEventListener('click', e=> {
            //Get email and password:
            const email = txt_email;
            const pass = txt_pass;
            const auth = firebase.auth();
            //Sign up!
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
      });
      
      //Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                  console.log(firebaseUser);
            } else {
                  console.log('Not logged in.');
            }
      });
      
}());     
