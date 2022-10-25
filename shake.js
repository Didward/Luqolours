// When the user shakes the device, the website will create a new random color
// and change the background color of the website to that color.

// The following code is from the p5.js library
// https://p5js.org/reference/#/p5.Acceleration

// Create a new p5 object
var myp5 = new p5();

// Create a new Acceleration object
var acceleration = new p5.Acceleration();

// Use the Acceleration object to get the acceleration of the device
var accelerationX = acceleration.x;
var accelerationY = acceleration.y;
var accelerationZ = acceleration.z;

// If the acceleration of the device is greater than 30, then change the background color of the website
if (accelerationX > 30 || accelerationY > 30 || accelerationZ > 30) {
    // Create a new random color
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // Change the background color of the website to the random color
    document.body.style.backgroundColor = "#" + randomColor;
}

// End of code from the p5.js library
