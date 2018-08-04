BossLenguaje=function(game,en){
	Phaser.Sprite.call(this,game,0,0,en);
	movx=0;
	movy=0;


	this.checkWorldBounds=true;
	this.onOutBoundsKill=true;
	this.anchor.setTo(0.5);
	
	if(en=="yellow1"||en=="yellow2"||en=="yellow3"){
		this.x=520;
		this.y=420;

	}
	
	this.en=en;
	game.physics.arcade.enable(this);
	this.scale.setTo(0.5);
	this.body.allowGravity=false;
this.body.collideWorldBounds=true;
	this.body.velocity.x=200;
	this.body.bounce.setTo(1,0);
	game.add.existing(this);
}
BossLenguaje.prototype=Object.create(Phaser.Sprite.prototype);

BossLenguaje.prototype.update=function(){
	if(this.y>=this.game.height+(this.height*0.5)|| this.y<=-100 || this.x<=-100|| this.x>=this.game.width+(this.width*0.5)){
		this.kill();
	}
	


	

}

	
