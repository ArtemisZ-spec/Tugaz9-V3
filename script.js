function tambah() {
  var input1 = document.getElementById("inputfield").value;
  var input2 = document.getElementById("inputfield2").value;
  var result = parseInt(input1) + parseInt(input2);
  document.getElementById("result").innerHTML = "Hasil: " + result;
}
function kurang() {
  var input1 = document.getElementById("inputfield").value;
  var input2 = document.getElementById("inputfield2").value;
  var result = parseInt(input1) - parseInt(input2);
  document.getElementById("result").innerHTML = "Hasil: " + result;
}
function kali() {
  var input1 = document.getElementById("inputfield").value;
  var input2 = document.getElementById("inputfield2").value;
  var result = parseInt(input1) * parseInt(input2);
  document.getElementById("result").innerHTML = "Hasil: " + result;
}
function bagi() {
  var input1 = document.getElementById("inputfield").value;
  var input2 = document.getElementById("inputfield2").value;
  var result = parseInt(input1) / parseInt(input2);
  document.getElementById("result").innerHTML = "Hasil: " + result;
}
function Modulos() {
  var input1 = document.getElementById("inputfield").value;
  var input2 = document.getElementById("inputfield2").value;
  var result = parseInt(input1) % parseInt(input2);
  document.getElementById("result").innerHTML = "Hasil: " + result;
}
function reset() {
  document.getElementById("inputfield").value = "";
  document.getElementById("inputfield2").value = "";
  document.getElementById("result").innerHTML = "";
}
