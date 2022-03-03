var ctx;
onload=function(){
    ctx=document.getElementById("card").getContext("2d");
     //ctx.arc(x,y,radius,start,end,clockwise direction);
     ctx.arc(250,250,200,(Math.PI/180)*0,(Math.PI/180)*360,false);
     ctx.stroke();
     
     ctx.beginPath();
     ctx.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*360,false);
     ctx.closePath();
     ctx.stroke();

     ctx.beginPath();
     ctx.arc(200,150,50,(Math.PI/180)*0,(Math.PI/180)*360,false);
     ctx.closePath();
     ctx.stroke();
}