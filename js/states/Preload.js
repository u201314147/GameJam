 Preload = function(game){}

Preload.prototype = {
    preload:function(){
localStorage.setItem('Nivel0Pasado', 0);
	localStorage.setItem('Nivel1Pasado', 0);
		localStorage.setItem('Nivel2Pasado', 0);
		localStorage.setItem('Nivel3Pasado', 0);




    this.game.load.image("personaje","assets/Personaje.png");
    this.game.load.image("background","assets/background.png");
  this.game.load.image("menu","assets/menu.png");
this.game.load.image("Nivel0","assets/Nivel0.png");
 this.game.load.image("Nivel1","assets/Nivel1.png");
 this.game.load.image("Nivel2","assets/Nivel2.png");
  this.game.load.image("Nivel2_cal1","assets/Nivel2_cal1.png");
   this.game.load.image("Nivel2_cal2","assets/Nivel2_cal2.png");
 this.game.load.image("Nivel3","assets/Nivel3.png");
  this.game.load.image("Nivel3_progra2","assets/Nivel3_progra2.png");
  this.game.load.image("Nivel3_algoritmos","assets/Nivel3_algoritmos.png");
  this.game.load.image("Nivel3_complejidad","assets/Nivel3_complejidad.png");













	this.game.load.image("yellow1","assets/yellow/flyMan_fly.png");









this.game.load.image("background","assets/fondo.png");
    this.game.load.image("piso","assets/plataformas.png");
    this.game.load.image("plataforma","assets/plataformas.png");
    this.game.load.image("bala","assets/brown.png");
    this.game.load.image("balaP","assets/brown.png");


	this.game.load.spritesheet("player","assets/dude.png",32,48,9);
	this.game.load.image("bossCreatividad","assets/bossCreatividad.png");








    this.game.load.image("punto","assets/punto.png");
	//nul se cambia por el formato

	this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
	this.game.scale.pageAlignHorizontally=true;
	this.game.scale.pageAlignVertically=true;


	},
	create:function(){
		this.game.state.start("Menu");
	}

}


