define("PieceManager",["ChessPiece"],function(e){var t;return t=function(e){this.color=e.color,this.pieces=[],this.bitmap=e.bitmap;var t;this.color=="W"?this.spriteSheetData={animations:{K_up_idle:{frames:[5]},K_up_awake:{frames:[2]},K_up_selected:{frames:[4,3,0,1],frequency:2},Q_up_idle:{frames:[11]},Q_up_awake:{frames:[8]},Q_up_selected:{frames:[10,9,6,7],frequency:2},P_up_idle:{frames:[23]},P_up_awake:{frames:[20]},P_up_selected:{frames:[22,19,18,21],frequency:2},P_up_promote:{frames:[20,8,20,8,20,8,20,8],frequency:4,next:"Q_up_awake"},Q_up_promote:{frames:[20,8,20,8,20,8,20,8],frequency:4,next:"Q_up_awake"}},frames:{width:56,height:76},images:["assets/white-piece.png"]}:this.spriteSheetData={animations:{K_up_idle:{frames:[0]},K_up_awake:{frames:[3]},K_up_selected:{frames:[5,4,1,2],frequency:2},Q_up_idle:{frames:[11]},Q_up_awake:{frames:[8]},Q_up_selected:{frames:[10,9,6,7],frequency:2},N_up_idle:{frames:[12]},N_up_awake:{frames:[14]},N_up_selected:{frames:[16,15,17,13],frequency:2},P_up_idle:{frames:[21]},P_up_awake:{frames:[18]},P_up_selected:{frames:[19,20,23,22],frequency:2},P_up_promote:{frames:[18,8,18,8,18,8,18,8],frequency:4,next:"Q_up_awake"},Q_up_promote:{frames:[18,8,18,8,18,8,18,8],frequency:4,next:"Q_up_awake"}},frames:{width:56,height:76},images:["assets/black-piece.png"]},this.graphics=e.container},t.prototype={initialize:function(){},addPiece:function(t,n,r){var i=new createjs.SpriteSheet(this.spriteSheetData),s=new e({type:t,row:n,col:r,color:this.color,spriteSheet:i});this.graphics.addChild(s.graphics),this.pieces.push(s)},findSelectedGamePiece:function(e,t){for(var n in this.pieces){var r=this.pieces[n];if(r.row==e&&r.col==t)return r}return null},movePiece:function(e,t,n){var r=this.findSelectedGamePiece(e.row,e.col);r?(console.log("Piece moved"),r.move(t.row,t.col,n)):console.log("Piece not found")},removePiece:function(e){var t=this.findSelectedGamePiece(e.row,e.col);t&&t.remove()},updateTurn:function(e){console.log("My Turn: "+e+" "+this.color);for(var t in this.pieces){var n=this.pieces[t];n.updateTurn(e==this.color)}},updateWinner:function(e){console.log("Result: "+e+" "+this.color);for(var t in this.pieces){var n=this.pieces[t];n.updateWinner(e)}}},t});