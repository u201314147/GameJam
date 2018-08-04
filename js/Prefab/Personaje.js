Personaje=function(game){	
	

	this.game=game;

	Phaser.Sprite.call(this,game,game.world.centerX,game.world.centerY,'personaje')
	keys = this.game.input.keyboard.createCursorKeys();
	this.collideWorldBounds=true;
	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(this);
   
	this.body.allowGravity=false;
	
	game.add.existing(this);
    	this.body.collideWorldBounds=true;


}

Personaje.prototype=Object.create(Phaser.Sprite.prototype);

Personaje.prototype.constructor=Personaje;

Personaje.prototype.update=function(){

personaje.body.velocity.x=0;
personaje.body.velocity.y=0;

		if(keys.right.isDown){
			
			personaje.body.velocity.x=180;
		}

		if(keys.up.isDown){
			personaje.body.velocity.y=-180;		
		}
		if(keys.left.isDown){
		personaje.body.velocity.x=-180;	
		}
		if(keys.down.isDown){
		personaje.body.velocity.y=180;		
		}


	}