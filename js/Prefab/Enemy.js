Enemy=function(game,en){
	Phaser.Sprite.call(this,game,0,0,en);
	movx=0;
	movy=0;
	this.checkWorldBounds=true;
	this.onOutBoundsKill=true;
	this.anchor.setTo(0.5);
	if(en=="red1"||en=="red2"){
		this.x=0;
		this.y=game.rnd.realInRange(this.height*0.5,this.game.height-(this.height*0.5));
		movx=200;
		movy=0;
	}
	else if(en=="yellow1"||en=="yellow2"||en=="yellow3"){
		this.x=this.game.width;
		this.y=game.rnd.realInRange(this.height*0.5,this.game.height-(this.height*0.5));
		movx=-200;
		movy=0;
	}
	else if(en=="cream1"||en=="cream2"||en=="cream3"){
		this.x=game.rnd.realInRange(this.width*0.5,this.game.width-(this.width*0.5));
		this.y=10;
		movx=0;
		movy=200;
	}
	else if(en=="fly1"||en=="fly2"||en=="fly3"||en=="fly4"||en=="fly5"){
		if(game.rnd.integerInRange(0,1)==0){
			this.x=this.game.width;
			movx=-200;
		}
		else{

			this.x=0;
			movx=200;
		}

		this.y=game.rnd.realInRange(this.height*0.5,this.game.height-(this.height*0.5));;
			movy=0;
	}	
	else if(en=="brown1"||en=="brown2"||en=="brown3"){

		this.x=game.rnd.realInRange(this.width*0.5,this.game.width-(this.width*0.5));
		this.y=this.game.height;
		movx=0;
		movy=-200;
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

	
