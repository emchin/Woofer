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

// Get a reference to the database service
var database = firebase.database();

function writeUserData() {
  firebase.database().ref('Dogs').set({
    dog-name:'Snoopy',
    owner-name:'Charlie Brown',
    owner-phone:'123-456-7890'
  });
}
