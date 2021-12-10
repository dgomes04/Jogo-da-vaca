//variaveis do Ator
let yAtor = 369;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3
    }
  }
}


function verificaColisao(){
  
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 30);
    if (colisao){
      colidiu();
      somDaColisao.play();
      if  (meusPontos > 0){
      meusPontos -= 1; 
      }
    }
  }  
}

function colidiu(){
  yAtor = 369;
}


function incluiPontos(){
  fill(255, 240, 0)
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width / 5, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    yAtor = 366;
    somDosPontos.play();
  }

}


function podeSeMover(){
  return yAtor < 369;
}




