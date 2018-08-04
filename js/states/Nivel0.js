Nivel0=function(game){}
Nivel0.prototype={

    create:function(){
	barrelsTime=0;
	barrelsFreq=5;
		nivel0=this.game.add.sprite(0,0,'Nivel0');
	personaje=new Personaje(this.game);
	enemy = new BossLenguaje(this.game,'yellow1');

	barrels=this.game.add.group();
	barrels.enableBody=true;
	barrelsVel=100;
	this.generateBarril();
	},

generateBarril:function(){
		var barrel=barrels.getFirstDead();


		if(!barrel){
			barrel=this.game.add.sprite(0,0,'yellow1');
			barrels.add(barrel);

		}
		else{
			barrel.reset();
		}
		barrel.body.velocity.x=barrelsVel;
		barrel.body.velocity.y=barrelsVel;
		
		barrel.body.collideWorldBounds=true;
		barrel.body.bounce.setTo(1);
		
	},
}


Nivel0.prototype.update=function(){

barrelsTime++;
	barrelsTime+=this.game.time.elapsed;
		if(barrelsTime>=barrelsFreq){
			barrelsTime=0;
			//this.generateBarril();
		}
		if(keys.right.isDown){
			
			//localStorage.setItem('Nivel0Pasado', 1)
			//this.game.state.start("Game");

		}


	}