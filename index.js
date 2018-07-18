function new_user() {
          var user_database = {}
          var name = document.getElementById('username').value;
          var pass = document.getElementById('password').value;
          user_database[name] = pass;
          document.getElementById("test").innerHTML = "hello";
      }

function check_user() {
          var maybe_user = document.getElementById('user-user').value;
          var maybe_pass = document.getElementById('user-pass').value;
          if (user_database[maybe_user] == maybe_pass){
              document.getElementById("test").innerHTML = "You logged in.";
          }
      }
