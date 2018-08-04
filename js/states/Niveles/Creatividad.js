Creatividad=function(game){}
Creatividad.prototype={
	
    create:function(){
	
	this.game.time.reset();
   
	background=this.game.add.sprite(0,0,'background');
	background.height=this.game.height;
	background.width=this.game.width;
	

	piso=this.game.add.sprite(0,0,'piso');
	piso.width=this.game.width+70;
	piso.y=this.game.height-piso.height;
    this.game.physics.arcade.enable(piso);
	piso.body.allowGravity=false;
	piso.body.immovable=true;
	piso.body.setSize(piso.width,piso.height,0,83);

	plataforma=this.game.add.sprite(0,100,'plataforma');
	plataforma2=this.game.add.sprite(0,0,'plataforma');

	plataforma.scale.setTo(0.25);
	plataforma2.scale.setTo(0.25);
	plataforma.anchor.setTo(0.5);
	plataforma2.anchor.setTo(0.5);
	plataforma.x=150;
	plataforma.y=380;

	plataforma2.x=450;
	plataforma2.y=380;


	
    this.game.physics.arcade.enable(plataforma);
	plataforma.body.allowGravity=false;
	plataforma.body.immovable=true;
	plataforma.body.setSize(plataforma.width+290,plataforma.height,110,83);

    this.game.physics.arcade.enable(plataforma2);
	plataforma2.body.allowGravity=false;
	plataforma2.body.immovable=true;
	plataforma2.body.setSize(plataforma2.width+290,plataforma2.height,110,83);


	bulletsBoss=this.game.add.group();
	bullets=this.game.add.group();

	player=new Player(this.game,bullets);
	player.body.collideWorldBounds=true;
	bossCreatividad=new BossCreatividad(this.game,bulletsBoss,player);

	plataforma.body.checkCollision.down = false;
	plataforma2.body.checkCollision.down = false;
	plataforma.body.checkCollision.right = false;
	plataforma2.body.checkCollision.right = false;
	plataforma.body.checkCollision.left = false;
	plataforma2.body.checkCollision.left = false;
	



	vidaBoss=500;


	},
	hitBoss:function(bala,boss){
		console.log(vidaBoss);
		boss.kill();
		vidaBoss-=1;
		if(vidaBoss==450){

			bala.kill();
				localStorage.setItem('Nivel1Pasado', 1)
			this.game.state.start("Game");

		}	
	},
	update:function(){
	this.game.physics.arcade.collide(player,piso);
	this.game.physics.arcade.collide(player,plataforma);
	this.game.physics.arcade.collide(player,plataforma2);
	this.game.physics.arcade.overlap(bullets,bossCreatividad,this.hitBoss,null,this);



	}



}
 