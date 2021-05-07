function disegna()
{
    var canvas=document.getElementById("disegno");
    var ctx=canvas.getContext("2d");
    
    var x=canvas.width/2;
    var y=canvas.height/2;
    console.log(x+" " + y);

    ctx.beginPath();
    ctx.moveTo(20,y);
    ctx.lineTo(280,y);

    ctx.moveTo(x,280);
    ctx.lineTo(x,20);

    ctx.stroke();
    /*
      
    ctx.moveTo(150,280);
    ctx.moveTo(150,20);*/
   
    
}