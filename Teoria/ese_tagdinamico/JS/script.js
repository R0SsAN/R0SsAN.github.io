function inizializzaSelection()
{
    //inserimento opzioni sesso
    var sesso=["Maschio","Femmina"];
    for(var i=0;i<2;i++)
    {
        var s=document.createElement("option");
        s.value=sesso[i];
        s.innerHTML=sesso[i];
        document.getElementById("sesso").appendChild(s);
    }
    //inserimento opzioni occhi
    var coloreOcchi=["Nero","Castano","Verde","Blu","Ambra"];
    for(var i=0;i<5;i++)
    {
        var o=document.createElement("option");
        o.value=coloreOcchi[i];
        o.innerHTML=coloreOcchi[i];
        document.getElementById("occhi").appendChild(o);
    }
    //inserimento opzioni provincia
    var provincia=["BG","BS","CO","CR","LC","LO","MN","MI","MB","PV","SO","VA"];
    for(var i=0;i<12;i++)
    {
        var p=document.createElement("option");
        p.value=provincia[i];
        p.innerHTML=provincia[i];
        document.getElementById("provincia").appendChild(p);
    }
}
function attivaOfferta()
{
    var check=false;
    if(document.getElementById("nome").value=="")
        check=true;
    if(document.getElementById("cognome").value=="")
        check=true;
    if(document.getElementById("luogoNascita").value=="")
        check=true;
    if(document.getElementById("dataNascita").value=="")
        check=true;
    if(!check)
        alert("Offerta attivata!");
    else
        alert("Dati non inseriti!");
}
