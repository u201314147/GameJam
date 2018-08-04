GameOver=function(){}
	GameOver.prototype={
		init:function(_score,_nivel){
			score=_score;
			nivel=_nivel;
		},
		create:function(){
			this.game.time.reset();
			if(nivel==0)
				dificultad="Normal";
			else
				dificultad="Parao sin polo";
			background=this.game.add.sprite(0,0,'background');
			background.width=this.game.width;
			background.height=this.game.height;	
			
			text=this.game.add.text(0,0,'GameOver');
			text.anchor.setTo(0.5);
			text.x=400;
			text.y=100;
			text.fill="#FFFFFF";
			text.fontSize=30;
			
			dificultadtext=this.game.add.text(0,0,'Dificultad: '+dificultad);
			dificultadtext.anchor.setTo(0.5);
			dificultadtext.x=400;
			dificultadtext.y=125;
			dificultadtext.fill="#FFFFFF";
			dificultadtext.fontSize=15;
			
			scoretext=this.game.add.text(0,0,'Puntaje: '+score);
			scoretext.anchor.setTo(0.5);
			scoretext.x=400;
			scoretext.y=175;
			scoretext.fill="#FFFFFF";
			scoretext.fontSize=15;

			maxScore = this.game.add.text(0,0,'Max Score: ');
			maxScore.anchor.setTo(0.5);

			maxScore.x = 400;
			maxScore.y = 200;
			maxScore.fontSize=15;
			maxScore.fill = "#FFFFFF";

			if(localStorage.getItem(dificultad)==null){		
				localStorage.setItem(dificultad,score);
				maxScore.text = "Max Score: "+localStorage.getItem(dificultad);

			}

			else{
				if(score>localStorage.getItem(dificultad)){

					localStorage.setItem(dificultad,score);
				}
				maxScore.text = "Max Score: "+localStorage.getItem(dificultad);
			}



			
		},
		update:function(){
			tiempo=Math.round(this.game.time.totalElapsedSeconds()*100)/100;
			if(tiempo>=3)
				this.game.state.start('Menu');

		}
}
