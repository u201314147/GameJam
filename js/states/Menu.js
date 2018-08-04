//extends
Menu=function(game){}
	Menu.prototype={
		//nombre de la funcion:function para segunda funcion se usa,
		create:function(){
			menu=this.game.add.sprite(0,0,'menu');
			menu.width=this.game.width;
			menu.height=this.game.height;	
	text=this.game.add.text(0,0,'UPC RPG PLUS ULTRA');

			text.anchor.setTo(0.5);
			text.x=400;
			text.y=100;
			text.fill="#FFFFFF";
			text.fontSize=24;
			subtext=this.game.add.text(0,0,'Jugar');
			subtext.anchor.setTo(0.5);
			subtext.x=400;
			subtext.y=150;
			subtext.fill="#FFFFFF";
			subtext.fontSize=15;
			subtext.inputEnabled=true;
			subtext.events.onInputDown.add(this.goMenu,this);

		},
		goMenu:function(){
			this.game.state.start("Menu2");
		}
	}
