Enemy=function(game,en){
	Phaser.Sprite.call(this,game,0,0,en);
	movx=0;
	movy=0;
	this.checkWorldBounds=true;
	this.onOutBoundsKill=true;
	this.anchor.setTo(0.5);
	
if(en=="yellow1"||en=="yellow2"||en=="yellow3"){
		this.x=this.game.width;
		this.y=300;
		movx=-50;
		movy=0;
	}
	
	this.en=en;
	game.physics.arcade.enable(this);
	this.scale.setTo(0.5);
	this.body.allowGravity=false;

	this.body.velocity.y=movy;
	this.body.velocity.x=movx;
	game.add.existing(this);
}
Enemy.prototype=Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor=Enemy;
Enemy.prototype.update=function(){
	if(this.y>=this.game.height+(this.height*0.5)|| this.y<=-100 || this.x<=-100|| this.x>=this.game.width+(this.width*0.5)){
		this.kill();
	}
	


	

}

	
