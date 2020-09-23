function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;
playerMove = 'papier';
computerMove = 'kamień';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');