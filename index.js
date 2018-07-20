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
      const create_acct = document.getElementById('submit')

      create_acct.addEventListener('click', e=> {
            //Get email and password:
            const email = txt_email.value;
            const pass = txt_pass.value;
            const auth = firebase.auth();
            //Sign in!
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
      });
}());     
