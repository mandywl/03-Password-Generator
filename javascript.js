function clearFields() {
  console.log("clear");
  document.getElementById("text").innerHTML = "";
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function myFunction() {
  var checkBox = document.getElementById("moreThanEightCharacters");
  var passwordResult = makeid(8);
  if (checkBox.checked == true) {
    console.log("hello");
    $("#text").append(passwordResult);
  }
}
