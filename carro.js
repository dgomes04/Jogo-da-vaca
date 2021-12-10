//Váriaveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 311];
let velocidadeCarros = [3, 3.5, 4.2, 5, 2.3, 3.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  
  for(let i = 0; i < imagemCarros.length; i++){
  
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}


function movimentaCarro(){
  
  for (let i = 0; i < xCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoCarro(){
  
  for(let i = 0; i < xCarros.length; i++){
    
  if (PassouATela(xCarros[i])){
    xCarros[i] = 600

  }
  }
}

function PassouATela(xCarros){
  return xCarros < -50; 
}
