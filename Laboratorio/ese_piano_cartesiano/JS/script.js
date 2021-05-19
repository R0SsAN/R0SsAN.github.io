function disegna()
{
    var canvas=document.getElementById("disegno");
    var ctx=canvas.getContext("2d");
    
    var x=canvas.width/2;
    var y=canvas.height/2;

    ctx.beginPath();
    //imposto colore fill e stroke
    ctx.fillStyle="red";
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    //asse x
    ctx.moveTo(20,y);
    ctx.lineTo(280,y);
    //asse y
    ctx.moveTo(x,280);
    ctx.lineTo(x,20);
    //freccia x
    ctx.moveTo(280,y-10);
    ctx.lineTo(280,y+10);
    ctx.lineTo(290,y);
    ctx.lineTo(280,y-10);
    //freccia y
    ctx.moveTo(x-10,20);
    ctx.lineTo(x+10,20);
    ctx.lineTo(x,10);
    ctx.lineTo(x-10,20);
    //zero centrale
    ctx.moveTo(155,160);
    ctx.fillText("0",155,160);

    ctx.stroke();


    
}