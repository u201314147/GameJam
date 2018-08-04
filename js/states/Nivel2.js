Nivel2=function(game){}
Nivel2.prototype={

    create:function(){
	if(localStorage.getItem('Nivel2Pasado')==0)
		nivel2=this.game.add.sprite(0,0,'Nivel2');
			else if(localStorage.getItem('Nivel2Pasado')==1)
			nivel2=this.game.add.sprite(0,0,'Nivel2_cal1');
			else if(localStorage.getItem('Nivel2Pasado')==2)
			nivel2=this.game.add.sprite(0,0,'Nivel2_cal2');
	},


}


Nivel2.prototype.update=function(){


		if(keys.right.isDown){
			
			if(localStorage.getItem('Nivel2Pasado')==0)
			localStorage.setItem('Nivel2Pasado', 1)
			else if(localStorage.getItem('Nivel2Pasado')==1)
				localStorage.setItem('Nivel2Pasado', 2)
			else if(localStorage.getItem('Nivel2Pasado')==2)
				localStorage.setItem('Nivel2Pasado', 3)


			this.game.state.start("Game");

		}


	}