const nameHolder = document.getElementById("nameHolder");
const emailHolder = document.getElementById("emailHolder");
const textHolder = document.getElementById("textHolder");

function formValidator() {
  if (
    nameHolder.value == "" &&
    emailHolder.value == "" &&
    textHolder.value == ""
  ) {
    alert("Please enter your name,email and message");
    nameHolder.style.backgroundColor = "#f27c97";
    emailHolder.style.backgroundColor = "#f27c97";
    textHolder.style.backgroundColor = "#f27c97";
  } else if (nameHolder.value == "") {
    alert("Please enter your name");
    nameHolder.style.backgroundColor = "#f27c97";
  } else if (emailHolder.value == "") {
    alert("Please enter your mail");
    emailHolder.style.backgroundColor = "#f27c97";
  } else if (textHolder.value == "") {
    alert("Please enter your text");
    textHolder.style.backgroundColor = "#f27c97";
  } else {
    console.log(
      " name: " +
        nameHolder.value +
        " mail: " +
        emailHolder.value +
        " message: " +
        textHolder.value
    );
  }
}
