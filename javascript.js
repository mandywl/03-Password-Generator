function clearFields() {
  console.log("clear");
  document.getElementById("text").innerHTML = "";
}

function makeid(characters) {
  var result = "";
  var charactersLength = characters.length;
  var randomLength = Math.floor(Math.random() * 128);
  console.log(randomLength);
  for (var i = 0; i < randomLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function myFunction() {
  // var characters;
  // var eightCharacters = document.getElementById("moreThanEightCharacters");
  // var lowercase = document.getElementById("lowercase");
  // var uppercase = document.getElementById("uppercase");
  // var numeric = document.getElementById("numeric");
  // var special = document.getElementById("specialCharacters");

  // if (
  //   lowercase.checked &&
  //   uppercase.checked &&
  //   numeric.checked &&
  //   special.checked
  // ) {
  //   characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()~_+";
  // } else if (lowercase.checked && uppercase.checked && numeric.checked) {
  //   characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  // } else if (lowercase.checked && special.checked && numeric.checked) {
  //   characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()~_+";
  // } else if (special.checked && uppercase.checked && numeric.checked) {
  //   characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()~_+";
  // } else if (lowercase.checked && uppercase.checked) {
  //   characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // } else if (lowercase.checked && numeric.checked) {
  //   characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  // } else if (lowercase.checked && special.checked) {
  //   characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()~_+";
  // } else if (uppercase.checked && numeric.checked) {
  //   characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  // } else if (uppercase.checked && special.checked) {
  //   characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~_+";
  // } else if (numeric.checked && special.checked) {
  //   characters = "1234567890!@#$%^&*()~_+";
  // } else if (uppercase.checked == true) {
  //   characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // } else if (numeric.checked == true) {
  //   characters = "1234567890";
  // } else if (special.checked == true) {
  //   characters = "!@#$%^&*()~_+";
  // } else if (lowercase.checked == true) {
  //   characters = "abcdefghijklmnopqrstuvwxyz";
  // } else {
  //   alert("You must select one option from Character Types");
  // }
  // var passwordResult = makeid(characters);
  // $("#text").append(passwordResult);

  var lowercaseEl = document.getElementById("lowercase");
  var uppercaseEl = document.getElementById("uppercase");
  var numericEl = document.getElementById("numeric");
  var specialEl = document.getElementById("specialCharacters");

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var specialCharacters = "!@#$%^&*()~_+";
  var selection = lowercase;

  if (uppercaseEl.checked) {
    selection = selection + uppercase;
  }
  if (lowercaseEl.checked) {
    selection = selection;
  }
  if (numericEl.checked) {
    selection = selection + number;
  }
  if (specialEl.checked) {
    selection = selection + specialCharacters;
  }
  var passwordResult = makeid(selection);
  $("#text").append(passwordResult);
}
