Curso=function(game,x,y){	
	

	this.game=game;

	Phaser.Sprite.call(this,game,x,y,'punto')
	keys = this.game.input.keyboard.createCursorKeys();
	this.collideWorldBounds=true;
	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(this);
   
	this.body.allowGravity=false;
	
	game.add.existing(this);
    

}

Curso.prototype=Object.create(Phaser.Sprite.prototype);

Curso.prototype.constructor=Curso;

Curso.prototype.update=function(){

		

	}