document.getElementById('p1').ondrag = function() { // Wait for a click to be detected on p1

alert('I have been dragged!'); // Display a message
let ele = document.getElementById('p1');

ele.innerHTML = 'I have been dragged! Alert the police!'; // 'Heard' a click so print out a message
}

document.getElementById('p2').onmousedown = function() { 
alert('I have been pressed!'); 
let ele = document.getElementById('p2');
ele.innerHTML = 'I have been pressed! Alert the police!';

}

document.getElementById('p3').onmouseover = function() { 
alert('I have been hovered!'); 
let ele = document.getElementById('p3');
ele.innerHTML = 'I have been hovered! Alert the police!';
}

document.getElementById('p4').onmouseup = function() { 
alert('I have been released!'); 
let ele = document.getElementById('p4');
ele.innerHTML = 'I have been released! Alert the police!';
}
