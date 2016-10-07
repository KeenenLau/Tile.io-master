var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var blockRowCount = 3;
var blockColumnCount = 3;
var blockWidth = 100;
var blockHeight = 100;
var blockPadding = 10;
var blockOffsetTop = 30;
var blockOffsetLeft = 30;

var score=0;

var blocks = [];
for(c=0; c<blockColumnCount; c++) {
    blocks[c] = [];
    for(r=0; r<blockRowCount; r++) {
        blocks[c][r] = { x: 0, y: 0, z: 0};
    }
}


function drawBlocks(){
  for(c=0; c<blockColumnCount; c++) {
        for(r=0; r<blockRowCount; r++) {
          var blockX = (c*(blockWidth+blockPadding))+blockOffsetLeft;
var blockY = (r*(blockHeight+blockPadding))+blockOffsetTop;
            blocks[c][r].x = blockX;
            blocks[c][r].y = blockY;
            blocks[c][r].z=Math.floor(Math.random()*1.1);
            ctx.beginPath();
            ctx.rect(blockX, blockY, blockWidth, blockHeight);
          if(blocks[c][r].z==0){
          ctx.fillStyle = "#000000";
          } else if (blocks[c][r].z==1){ctx.fillStyle="#FF0000"}
            ctx.fill();
            ctx.closePath();
         
          
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlocks();
    drawScore();
} 
setInterval(draw, 1000);

$('#Canvas').click(function (e) {
    var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;
            
           for(c=0; c<blockColumnCount; c++) {
        for(r=0; r<blockRowCount; r++) {
      if ((clickedX>blocks[c][r].x)&&(clickedX<(blocks[c][r].x+blockWidth))&&(clickedY>blocks[c][r].y)&&(clickedY<(blocks[c][r].y+blockHeight))){
        //alert ('clicked number ' + (c + 1)+'&'+(r+1)+"&"+blocks[c][r].z);
        if(blocks[c][r].z==1){score++;
ctx.beginPath();                             ctx.rect(blocks[c][r].x, blocks[c][r].y, blockWidth, blockHeight);
                             ctx.fillStyle="#FF00FF";
ctx.fill();            ctx.closePath();            
                             }
        
        else {score--;}
      }    
            }
           }
          });