function check_user() {
          var maybe_user = document.getElementById('user-user').value;
	var maybe_pass = document.getElementById('user-pass').value;
	var user_database = global.localStorage.getItem("user_database");
	if(user_database[maybe_user] == maybe_pass){
		document.getElementById("test").innerHTML = "You logged in.";
		window.open("introAcct.html");
	} else {
		document.getElementById("test").innerHTML = "Sorry, that's the wrong username/password. Please try again!";
		window.alert("Username/Password failed! Please try again.");
	}
}
        	document.getElementById('submit').addEventListener('click', check_user);

var user_database = {}
function new_user() {
          var user_name = document.getElementById('username').value;
          var pass = document.getElementById('password').value;
          user_database[user_name] = pass;
          //global.localStorage.setItem("user_database", user_database);
          window.open("doneAcct.html");
      }
        document.getElementById("submit").addEventListener('click', new_user);
