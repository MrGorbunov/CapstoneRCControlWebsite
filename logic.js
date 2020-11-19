var slideVisionPan = document.getElementById("sliderVisionPan");
var textVisionPan = document.getElementById("spanVisionPan");
var valVisionPan = 0;

var slideVisionTilt = document.getElementById("sliderVisionTilt");
var textVisionTilt = document.getElementById("spanVisionTilt");
var valVisionTilt = 0;

var slideShovel = document.getElementById("sliderShovelServo");
var textShovel = document.getElementById("spanShovelServo");
var valShovel = 0;

var slideLeftMotor = document.getElementById("sliderLeftMotor");
var textLeftMotor = document.getElementById("spanLeftMotor");
var valLeftMotor = 0;

var slideRightMotor = document.getElementById("sliderRightMotor");
var textRightMotor = document.getElementById("spanRightMotor");
var valRightMotor = 0;


// This populates the empty spans (starts with text displayed)
textVisionPan.innerHTML = valVisionPan;
textVisionTilt.innerHTML = valVisionTilt;
textShovel.innerHTML = valShovel;
textLeftMotor.innerHTML = valLeftMotor;
textRightMotor.innerHTML = valRightMotor;


// This code could definitely be rewriten but it works so imm not gonna worry
slideVisionPan.oninput = function() {
  textVisionPan.innerHTML = this.value;
  valVisionPan = this.value;
  sendData();
}

slideVisionTilt.oninput = function() {
  textVisionTilt.innerHTML = this.value;
  valVisionTilt = this.value;
  sendData();
}

slideShovel.oninput = function() {
  textShovel.innerHTML = this.value;
  valShovel = this.value;
  sendData();
}

slideLeftMotor.oninput = function() {
  textLeftMotor.innerHTML = this.value;
  valLeftMotor = this.value;
  sendData();
}

slideRightMotor.oninput = function() {
  textRightMotor.innerHTML = this.value;
  valRightMotor = this.value;
  sendData();
}


// The exciting code
async function sendData () {
  let valuesString = `leftmotorspeed=${valLeftMotor}&rightmotorspeed=${valRightMotor}` +
    `&shovelservo=${valShovel}&visionPan=${valVisionPan}&visiontilt=${valVisionTilt}`;

  console.log(valuesString);

  fetch(`mc-grind.ix.tc:8000/bg.html?` + valuesString)
  .then(response => {console.log("[RESPONSE] " + response} )
  .catch(error => {console.log("[ERROR] " + error)} );
}
