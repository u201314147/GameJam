window.onload=function(){
	var dimension=getGameLandscapeDimensions(800,600);
	var game=new Phaser.Game(dimension.w,dimension.h,Phaser.Auto,'');
	//preload menu y game son nombre de la clase no el archivo 
	game.state.add('Preload',Preload);
	game.state.add('Game',Game);
	game.state.add('Menu',Menu);
	game.state.add('Menu2',Menu2);
	game.state.add('Nivel0',Nivel0);
	game.state.add('Nivel1',Nivel1);
	game.state.add('Nivel2',Nivel2);
	game.state.add('Nivel3',Nivel3);


	game.state.add('Preload',Preload);

 	game.state.add('Creatividad',Creatividad);
	game.state.add('Game',Game);
	game.state.add('GameOver',GameOver);
	game.state.start('Preload');
}