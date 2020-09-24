function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



var computerMove, playerMove;
playerMove = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + playerMove);
if (playerMove  == '1') {
  computerMove = 'kamień';
} else if (playerMove  == '2'){
    computerMove = 'papier';
}
else if (playerMove  == '3'){
    computerMove = 'nożyce';
}
else {
  computerMove = 'remis';
}
printMessage('Mój ruch: ' + computerMove);



var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'nożyce';
}  else if (playerInput == '3'){
    playerMove = 'papier';
}
else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);