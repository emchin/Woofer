function set_dog() {
  var randomNumber = 0;
  while (localStorage.getItem(randomNumber) != null) {
    randomNumber += 1;

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

  dogName = [document.getElementsByName("dogName").value, zipcode, ownerName, contactInfo, color1, color2, color3, color4, color5, color6, color7, eyecolor, pattern, size, image];
  
  localStorage.setItem(randomNumber, dogName);
  }
