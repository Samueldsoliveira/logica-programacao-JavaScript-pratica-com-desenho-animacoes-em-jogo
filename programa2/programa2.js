
function desenhaQuadrado(x, y, cor){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50); //Faz um contorno
    
}
/*
var x = 0;
var y = 0;
while(x < 600 && y < 600){
    desenhaQuadrado( x, y, 'red');
    desenhaQuadrado( x, y, 'blue');
    desenhaQuadrado( x, y, 'white');
    x += 50;
    y += 0;
}
*/

for(var x = 0; x < 600; x + 50){
    desenhaQuadrado( x, 0, 'red');
}






