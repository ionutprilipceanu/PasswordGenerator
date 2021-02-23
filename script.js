// Declare buttons
document.getElementById("btn1").onclick = function () {
  getPassword();
};

document.getElementById("btn2").onclick = function () {
  copyPassword();
};

//Generate Password Button
function getPassword() {
  const chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>:;/?";
  let passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randInt = Math.floor(Math.random() * chars.length);
    password += chars.substring(randInt, randInt + 1);
  }

  document.getElementById("Password").value = password;
}

// Copy Password Button

function copyPassword() {
  let copiedPass = document.getElementById("Password");

  copiedPass.select();

  document.execCommand("copy");

  alert('Your password is copied:' + '  ' + copiedPass.value);


}
