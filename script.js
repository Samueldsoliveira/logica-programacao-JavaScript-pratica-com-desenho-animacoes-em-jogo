var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgrey'; //Seleciona a cor do pincel
pincel.fillRect(0, 0, 600, 400); //Seleciona o caminho em que o pincel irá preencher

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = 'red';
pincel.fillRect(400, 0, 200, 400)

pincel.fillStyle = 'yellow';
pincel.beginPath(); //Inicia a escrita do caminho
pincel.moveTo(300,200); //moveTo = "Mova-se até"
pincel.lineTo(200, 400);
//        eixo X || Y
pincel.lineTo(400, 400);
pincel.fill();