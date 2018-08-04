Bullet=function(game,positionX,positionY,lad){


	Phaser.Sprite.call(this,game,positionX,positionY,'balaP');
	game.physics.arcade.enable(this);
	this.checkWorldBounds=true;
	this.onOutBoundsKill=true;
	if(lad==1)
			this.body.velocity.x=800;
		else
			this.body.velocity.x=-800;
		
		
		
	this.body.allowGravity=false;

	this.scale.setTo(0.25);
	game.add.existing(this);
}
Bullet.prototype=Object.create(Phaser.Sprite.prototype);

Bullet.prototype.constructor=Bullet;

