// imagens e sons do jogo
let caminhoDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//sons do jogo
let somDaTrilha;
let somdosPontos;
let somDaColisao;

function preload(){
  caminhoDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  
somDaTrilha = loadSound("sons/trilha.mp3");
somDosPontos = loadSound("sons/pontos.wav");
somDaColisao = loadSound("sons/colidiu.mp3");
}
