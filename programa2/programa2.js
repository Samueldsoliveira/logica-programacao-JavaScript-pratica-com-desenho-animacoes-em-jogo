var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaQuadradoVerde(){

    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 50, 50);
    pincel.fillRect(0, 0, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(0, 0, 50, 50); //Faz um contorno
    
    pincel.fillRect(50, 0, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(50, 0, 50, 50);
    
    pincel.fillRect(100, 0, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(100, 0, 50, 50);
}




