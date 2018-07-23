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
var foundDog = firebase.database().ref("foundDog");

// Save a new recommendation to the database, using the input in the form
var submitFoundDog = function () {

  // Get input values from each of the form elements
  var zipcode = $("#zipcode").val();
  var owner_name = $("#owner_name").val();
  var dog_name = $("#dog_name").val();

  // Push a new recommendation to the database using those values
  foundDog.push({
    "zipcode": zipcode,
    "owner-name": owner_name,
    "dog-name": dog_name
  });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {
