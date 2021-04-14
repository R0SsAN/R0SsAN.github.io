function calcolaPrezzo()
{
    var km=parseInt(document.getElementById("km").value);
    var nPersone=parseInt(document.getElementById("nPersone").value);
    var costo;
    if(document.getElementById("c1").checked)
        costo=0.43*km*nPersone;
    else
        costo=0.20*km*nPersone;
    document.getElementById("risultato").innerHTML="Il costo totale e' di: "+costo.toString()+" €";
    
}