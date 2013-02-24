define("MovesHistory",["ChessPiece","easel","tween"],function(e){var t;return t=function(){this.graphics=new createjs.Container,this.whiteSpriteSheetData={animations:{K_up_awake:{frames:[2]},K_up_selected:{frames:[4,3,0,1],frequency:2},Q_up_awake:{frames:[8]},Q_up_selected:{frames:[10,9,6,7],frequency:2},P_up_awake:{frames:[20]},P_up_selected:{frames:[22,19,18,21],frequency:2}},frames:{width:56,height:76},images:["assets/white-piece.png"]},this.blackSpriteSheetData={animations:{K_up_awake:{frames:[3]},K_up_selected:{frames:[5,4,1,2],frequency:2},Q_up_awake:{frames:[8]},Q_up_selected:{frames:[10,9,6,7],frequency:2},N_up_awake:{frames:[14]},N_up_selected:{frames:[16,15,17,13],frequency:2},P_up_awake:{frames:[18]},P_up_selected:{frames:[19,20,23,22],frequency:2}},frames:{width:56,height:76},images:["assets/black-piece.png"]};var e=new createjs.Graphics;e.beginFill("#0c0"),e.drawRect(0,0,64,64),e.endFill(),this.checkerStart=new createjs.Shape(e),this.checkerStart.alpha=0,this.checkerEnd=new createjs.Shape(e),this.checkerEnd.alpha=0},t.prototype={_addPiece:function(t,n,r,i){var s=t.charAt(0),o=null;s=="B"?o=new createjs.SpriteSheet(this.blackSpriteSheetData):o=new createjs.SpriteSheet(this.whiteSpriteSheetData);var t=new e({type:t.charAt(1),row:n.row,col:n.col,color:t.charAt(0),spriteSheet:o});r?(t.activate(),createjs.Tween.get(t.graphics,{override:!0,loop:!0}).to({x:i.col*64,y:i.row*64},500).wait(500),this.checkerStart.alpha=.5,this.checkerStart.x=n.col*64,this.checkerStart.y=n.row*64+20,this.checkerEnd.alpha=.5,this.checkerEnd.x=i.col*64,this.checkerEnd.y=i.row*64+20,this.graphics.addChild(this.checkerStart),this.graphics.addChild(this.checkerEnd)):t.deactivate(),this.graphics.addChild(t.graphics),t.alpha=.5},_createBoard:function(e,t,n){var r=!1;this.checkerStart.alpha=0,this.checkerEnd.alpha=0;for(var i=0;i<e.length;i++)for(var s=0;s<e[i].length;s++){r=s==t.col&&i==t.row;var o=e[i][s];o!="0"&&this._addPiece(o,{row:i,col:s},r,n)}this.graphics.alpha=.5},hideMove:function(){this.graphics.removeAllChildren()},showMove:function(e,t,n){this.graphics.removeAllChildren();for(var r=t.length-1;r>=0;r--){var i=t[r],s=n[i.to.row][i.to.col];i.moveType=="promote"&&(s=s.charAt(0)+"P"),i.moveType=="capture"?n[i.to.row][i.to.col]=i.captured:n[i.to.row][i.to.col]="0",n[i.from.row][i.from.col]=s;if(i._id==e){this._createBoard(n,i.from,i.to);break}}}},t});