
function desenhaQuadrado(x, y, cor){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50); //Faz um contorno
    
}


desenhaQuadrado(0, 0, 'green');
desenhaQuadrado(50, 0, 'green');
desenhaQuadrado(100, 0, 'green');




