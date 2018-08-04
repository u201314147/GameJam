Nivel3=function(game){}
Nivel3.prototype={

    create:function(){
	

	if(localStorage.getItem('Nivel3Pasado')==0)
				nivel3=this.game.add.sprite(0,0,'Nivel3');
			else if(localStorage.getItem('Nivel3Pasado')==1)
					nivel3=this.game.add.sprite(0,0,'Nivel3_progra2');
			else if(localStorage.getItem('Nivel3Pasado')==2)
					nivel3=this.game.add.sprite(0,0,'Nivel3_algoritmos');
			else if(localStorage.getItem('Nivel3Pasado')==3)
					nivel3=this.game.add.sprite(0,0,'Nivel3_complejidad');

	},


}


Nivel3.prototype.update=function(){


		if(keys.right.isDown){
			
		if(localStorage.getItem('Nivel3Pasado')==0)
			localStorage.setItem('Nivel3Pasado', 1)
			else if(localStorage.getItem('Nivel3Pasado')==1)
				localStorage.setItem('Nivel3Pasado', 2)
			else if(localStorage.getItem('Nivel3Pasado')==2)
				localStorage.setItem('Nivel3Pasado', 3)
			else if(localStorage.getItem('Nivel3Pasado')==3)
				localStorage.setItem('Nivel3Pasado', 4)


			this.game.state.start("Game");

		}


	}