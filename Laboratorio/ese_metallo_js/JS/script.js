function calcolaPeso()
{
    var volume=parseInt(document.getElementById("volume").value);
    var materiale=document.getElementById("materiale").value;
    var peso;
    if(materiale=="acciaio")
        peso=volume*8200;
    else if(materiale=="ottone")
        peso=volume*8730;
    else if(materiale=="alluminio")
        peso=volume*2700;
    else if(materiale=="rame")
        peso=volume*8960;
    document.getElementById("risultato").innerHTML="Il peso e' di "+peso.toString()+" kg";
}
function resetPeso()
{
    document.getElementById("risultato").innerHTML="";
}