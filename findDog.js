// Get a reference to the database service
var database = firebase.database();

//Function to save information of found dog
function saveFoundDog(zipcode_r, owner_name_r, dog_name_r, owner_phone_r, owner_email_r, coat_color_r, size_r, eye_color_r, coat_pattern_r) {
  firebase.database.ref('\found-dog').set ({
    zipcode_r : document.getElementById("zipcode");
    owner_name_r : document.getElementById("owner_name");
    dog_name_r : document.getElementById("dog_name");
}
