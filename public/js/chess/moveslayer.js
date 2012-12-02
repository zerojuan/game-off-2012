define('MovesLayer',[
	'easel'
], function(){
	var MovesLayer;

	MovesLayer = function(){
		this.tiles = [];

		this.possibles = [];

		this.graphics = new createjs.Container();

		for(var i = 0; i < 32; i++){
			var tile = {
				row : 0,
				col : 0,
				graphics : null,
				visible : false,
				setPosition : function(row, col){
					console.log('Setting Position: ' + row + ', ' + col);
					this.row = row;
					this.col = col;
					this.graphics.y = row * 64;
					this.graphics.x = col * 64;
				},
				setVisible : function(visible){
					this.visible = visible;
					if(this.visible){
						this.graphics.alpha = .5;
					}else{
						this.graphics.alpha = 0;
					}
				}
			};
			var graphics = new createjs.Graphics();
			graphics.beginFill('#cc0');
			graphics.drawRect(0, 0, 64, 64);
			graphics.endFill();

			tile.graphics = new createjs.Shape(graphics);
			tile.graphics.x = i * 5;
			tile.graphics.alpha = 0;
			this.tiles.push(tile);
			this.graphics.addChild(tile.graphics);
		}
	}

	MovesLayer.prototype = {
		initialize : function(){

		},
		setPossibleMoves : function(possibles){
			this.possibles = possibles;
			for(var i  = 0; i < this.tiles.length; i++){
				var tile = this.tiles[i];
				if(possibles != null && i < possibles.length){
					var possible = possibles[i];					
					console.log('Printing: ' + possible.row + ',' + possible.col);
					tile.setPosition(possible.row, possible.col);
					tile.setVisible(true);	
				}else{
					tile.setVisible(false);
				}
			}
		},
		isPossibleMove : function(row, col){
			for(var i in this.possibles){
				var possible = this.possibles[i];
				if(possible.row == row && possible.col == col){
					return true;
				}
			}
			return false;
		},
		activate : function(){
			//tween possible moves

		},
		deactivate : function(){
			this.setPossibleMoves(null);
		}
	}

	return MovesLayer;
});