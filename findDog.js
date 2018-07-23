function add_snoopy() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_iE72gO_qiX1KMH1kJGT7d-hzFscjS1w",
    authDomain: "woofer-3c420.firebaseapp.com",
    databaseURL: "https://woofer-3c420.firebaseio.com",
   projectId: "woofer-3c420",
   storageBucket: "woofer-3c420.appspot.com",
   messagingSenderId: "723483471961"
  };
  firebase.initializeApp(config);
  alert("Hello!");

  // Get a reference to the database service
  var database = firebase.database();
  var dogs = database.ref("Dogs");

  var new_dog = {
    name: "Snoopy";
     owner_name:"Charlie Brown";
  };

  dogs.push(new_dog);
  alert("Hello2");
}
