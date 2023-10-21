function getMoveName(move){
    if(move == 1) {
        return 'kamień';}
    if(move == 2) {
        return 'papier';}
    if(move == 3) {
        return 'nożyce';}
    else {
        printMessage( 'Nie znam ruchu o id ' + move + '.');
        return 'Nieznany ruch';
    }
        }
        
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
computerMove = 'papier';
}
else if (randomNumber == 3){
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

*/

let move = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + move);

let playerMove = getMoveName (move);

/*

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
}
else if (playerInput == '3'){
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

*/

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }
if( computerMove == playerMove ){
    printMessage('Remis!');
  }
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
if( playerMove == 'nieznany ruch'){
    printMessage('Wybierz cyfrę od 1 do 3!');
  }