BulletBoss1=function(game,positionX,positionY,type,posx,posy){


	Phaser.Sprite.call(this,game,positionX,positionY,'bala');
	game.physics.arcade.enable(this);
	this.checkWorldBounds=true;
	this.onOutBoundsKill=true;
	if( type == 2 ){
		//13 - 8 - 5
		ran=game.rnd.integerInRange(1,3);
	if(ran==1)
		this.body.velocity.x=-this.game.width/ 20 *13;
	else if(ran==2)
		this.body.velocity.x=-this.game.width/ 20 *5;
	else if(ran==3)
		this.body.velocity.x=-this.game.width/ 20 *8;

	this.body.velocity.y=-900;
	this.body.allowGravity=true;

	}
	if(type == 1){
	this.body.velocity.x=-posx - positionX;
	this.body.velocity.y = posy - positionY - (game.rnd.integerInRange(0,1) * 100);
	this.body.allowGravity=false;

	}
		
		
		

	this.scale.setTo(0.25);
	game.add.existing(this);
}
BulletBoss1.prototype=Object.create(Phaser.Sprite.prototype);

BulletBoss1.prototype.constructor=BulletBoss1;

