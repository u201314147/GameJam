Player=function(game,bullets){	
	

	this.game=game;
	this.bullets=bullets;

	Phaser.Sprite.call(this,game,game.world.centerX,game.world.centerY,'player')
	keys = this.game.input.keyboard.createCursorKeys();
	this.collideWorldBounds=true;
	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(this);
    escala=2.5;
    saltoy=650;
    this.lad=0;

    this.scale.setTo(escala);
	game.physics.arcade.gravity.y=1200;
	this.anchor.setTo(0.5);
	game.add.existing(this);
    	//console.log(playerArr);
	this.animations.add('walking',[0,1,2,3],13,true);
	this.frame=0;
	salto={space:game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)}
	shootingTimeP=100;
	shootingElapsedP=shootingTimeP;
	balas={Z:game.input.keyboard.addKey(Phaser.Keyboard.Z)};
}

Player.prototype=Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor=Player;
Player.prototype.shoot=function(){
	bullet=this.bullets.getFirstDead();
	if(bullet){
		bullet.reset();
	}
	else{
		bullet=new Bullet(this.game,this.x,this.y-30,this.lad);
		this.bullets.add(bullet);
	}
	
};
Player.prototype.update=function(){


player.body.velocity.x=0;
	shootingElapsedP+=this.game.time.elapsed;

		if(keys.right.isDown){
			this.lad=1;

			player.body.velocity.x=250;
			player.animations.play("walking");
			player.scale.setTo(-escala,escala);
			if(salto.space.isDown && (player.body.touching.down|| player.body.blocked.down)){
			player.body.velocity.y=-saltoy;	
				
			}
			}
			else if(keys.left.isDown){
			this.lad=0;

			player.body.velocity.x=-250;	
			player.animations.play("walking");	
			player.scale.setTo(escala);
			if(salto.space.isDown && (player.body.touching.down|| player.body.blocked.down)){
			player.body.velocity.y=-saltoy;
			}
			}//||mapas tiles bloced down
			else if(salto.space.isDown && (player.body.touching.down|| player.body.blocked.down)){
			player.body.velocity.y=-saltoy;		
				
			}
			else{
				player.animations.stop();
				player.frame=4;
			}
			if(keys.down.isDown){
					player.body.velocity.y=700;
			} 
			if(balas.Z.isDown &&shootingElapsedP>=shootingTimeP){
					this.shoot('balaP');
					shootingElapsedP=0;

			}

	}