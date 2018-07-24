var num = 0
function id_num() {
  if (localStorage.hasOwnProperty(num)) {
    num += 1;
  } else {
    return num;
  }
}

function set_dog() {
  var dogName = document.getElementsByName("dogName").value;
  var zipcode = document.getElementsByName("zipcode").value;
  var ownerName = document.getElementsByName("ownerName").value;
  var contactInfo = document.getElementsByName("contactInfo").value;
  var color1 = document.getElementsByName("color1").checked;
  var color2 = document.getElementsByName("color2").checked;
  var color3 = document.getElementsByName("color3").checked;
  var color4 = document.getElementsByName("color4").checked;
  var color5 = document.getElementsByName("color5").checked;
  var color6 = document.getElementsByName("color6").checked;
  var color7 = document.getElementsByName("color7").checked;
  var eyecolor = document.getElementsByName("dog-eye-colors").value;
  var pattern = document.getElementsByName("dog-pattern").value;
  var size = document.getElementsByName("dog-size").value;
  var img = document.getElementById("output_image");
  var image = img.src;
  var index = id_num();

  dogName = [document.getElementsByName("dogName").value, zipcode, ownerName, contactInfo, color1, color2, color3, color4, color5, color6, color7, eyecolor, pattern, size, image];
  return dogName;
  localStorage.setItem(index, dogName);
  window.open("congrats_added.html");
  }

function retrieve_dog() {
  //var message = '<h2> You added <h1>' + dogName[0] + '</h1> to our database!</h2> <br> <p> Well done! Now if ' + dogName[0] + ' happens to wander (or sneak) away, anyone with Internet access can use Woofer to get them home! </p>';
  var message = id_num();
  document.getElementById('congrats').innerHTML = message;
}
