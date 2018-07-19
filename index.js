function new_user() {
          var user_database = {}
          var name = document.getElementById('username').value;
          var pass = document.getElementById('password').value;
          user_database[name] = pass;
          document.getElementById("test").innerHTML = "hello";
      }

var user_database = {}
function new_user() {
          var user_name = document.getElementById('username').value;
          var pass = document.getElementById('password').value;
          user_database[user_name] = pass;
          //global.localStorage.setItem("user_database", user_database);
          window.open("doneAcct.html");
      }
        document.getElementById("submit").addEventListener('click', new_user);
