{
function playGame(argPlayerMove){

    clearMessages 

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

        
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + move);

    const argPlayerMove = getMoveName (move);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == argPlayerMove ){
    printMessage('Remis!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    if( argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz cyfrę od 1 do 3!');
    }
    }
}
document.getElementById('play-kamień').addEventListener('click', function(){
    playGame(playerInput);
  });
document.getElementById('play-papier').addEventListener('click', function(){
    playGame(playerInput);
  });
document.getElementById('play-nożyce').addEventListener('click', function(){
    playGame(playerInput);
  });

}