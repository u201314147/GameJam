Game=function(game){}
Game.prototype={

    create:function(){
	
		background=this.game.add.sprite(0,0,'background');
	
		personaje=new Personaje(this.game);
	text=this.game.add.text(0,0,localStorage.getItem("playerName"));


		if(localStorage.getItem('Nivel0Pasado')==0)
		{
			text=this.game.add.text(440,440,'Lenguaje');
		curso0=new Curso(this.game,440,440);
		}

		if(localStorage.getItem('Nivel1Pasado')==0)
		{
			text=this.game.add.text(40,40,'Creatividad');
		curso=new Curso(this.game,40,40);
		}
 
		/*if(localStorage.getItem('Nivel2Pasado')==0)
		{
			text=this.game.add.text(110,110,'Mate Basica');
		curso2=new Curso(this.game,110,110);
		}

		if(localStorage.getItem('Nivel3Pasado')==0)
		{
			text=this.game.add.text(350,200,'Progra 1');
		curso3=new Curso(this.game,350,200);
		}
		if(localStorage.getItem('Nivel3Pasado')==1)
		{
			text=this.game.add.text(400,250,'Progra 2');
		curso3=new Curso(this.game,400,250);
		}
		if(localStorage.getItem('Nivel3Pasado')==2)
		{
			text=this.game.add.text(400,250,'Algoritmos');
		curso3=new Curso(this.game,400,250);
		}
		if(localStorage.getItem('Nivel3Pasado')==3)
		{
			text=this.game.add.text(400,250,'Complejidad');
		curso3=new Curso(this.game,400,250);
		}



		if(localStorage.getItem('Nivel2Pasado')==1)
		{
			text=this.game.add.text(150,150,'Calculo 1');
		curso2=new Curso(this.game,150,150);
		}
	if(localStorage.getItem('Nivel2Pasado')==2)
		{
			text=this.game.add.text(200,200,'Calculo 2');
		curso2=new Curso(this.game,200,200);
		}*/
	},

	update:function(){

	this.game.physics.arcade.collide(personaje,curso0);
	this.game.physics.arcade.collide(personaje,curso);
	/*this.game.physics.arcade.collide(personaje,curso2);
	this.game.physics.arcade.collide(personaje,curso3);
	*/
	},
   choque0:function(personaje,curso0){
		this.game.state.start("Nivel0");
	},
	choque:function(personaje,curso){
		this.game.state.start("Creatividad");
	},
	choque2:function(personaje,curso2){
		this.game.state.start("Nivel2");
	},
	choque3:function(personaje,curso3){
		this.game.state.start("Nivel3");
	},
	update:function(){
this.game.physics.arcade.collide(personaje,curso0,this.choque0,null,this);
	this.game.physics.arcade.collide(personaje,curso,this.choque,null,this);
	/*this.game.physics.arcade.collide(personaje,curso2,this.choque2,null,this);
	this.game.physics.arcade.collide(personaje,curso3,this.choque3,null,this);
	*/
	},
}
 