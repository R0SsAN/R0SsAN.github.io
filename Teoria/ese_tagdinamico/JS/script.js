function inizializzaSelection()
{
    //inserimento opzioni sesso
    var s1=document.createElement("option");
    s1.value="maschio";
    s1.innerHTML="Maschio";
    var s2=document.createElement("option");
    s2.value="femmina";
    s2.innerHTML="Femmina";
    document.getElementById("sesso").appendChild(s1);
    document.getElementById("sesso").appendChild(s2);
    //inserimento opzioni occhi
    var o1=document.createElement("option");
    o1.value="nero";
    o1.innerHTML="Nero";
    document.getElementById("occhi").appendChild(o1);
    var o2=document.createElement("option");
    o2.value="castano";
    o2.innerHTML="Castano";
    document.getElementById("occhi").appendChild(o2);
    var o3=document.createElement("option");
    o3.value="verde";
    o3.innerHTML="Verde";
    document.getElementById("occhi").appendChild(o3);
    var o4=document.createElement("option");
    o4.value="blu";
    o4.innerHTML="Blu";
    document.getElementById("occhi").appendChild(o4);
    var o5=document.createElement("option");
    o5.value="ambra";
    o5.innerHTML="Ambra";
    document.getElementById("occhi").appendChild(o5);
    //inserimento opzioni provincia
    var p1=document.createElement("option");
    p1.value="bg";
    p1.innerHTML="BG";
    document.getElementById("provincia").appendChild(p1);
    var p2=document.createElement("option");
    p2.value="bs";
    p2.innerHTML="BS";
    document.getElementById("provincia").appendChild(p2);
    var p3=document.createElement("option");
    p3.value="co";
    p3.innerHTML="CO";
    document.getElementById("provincia").appendChild(p3);
    var p4=document.createElement("option");
    p4.value="cr";
    p4.innerHTML="CR";
    document.getElementById("provincia").appendChild(p4);
    var p5=document.createElement("option");
    p5.value="lc";
    p5.innerHTML="LC";
    document.getElementById("provincia").appendChild(p5);
    var p6=document.createElement("option");
    p6.value="lo";
    p6.innerHTML="LO";
    document.getElementById("provincia").appendChild(p6);
    var p7=document.createElement("option");
    p7.value="mn";
    p7.innerHTML="MN";
    document.getElementById("provincia").appendChild(p7);
    var p8=document.createElement("option");
    p8.value="mi";
    p8.innerHTML="MI";
    document.getElementById("provincia").appendChild(p8);
    var p9=document.createElement("option");
    p9.value="mb";
    p9.innerHTML="MB";
    document.getElementById("provincia").appendChild(p9);
    var p10=document.createElement("option");
    p10.value="pv";
    p10.innerHTML="PV";
    document.getElementById("provincia").appendChild(p10);
    var p11=document.createElement("option");
    p11.value="so";
    p11.innerHTML="SO";
    document.getElementById("provincia").appendChild(p11);
    var p12=document.createElement("option");
    p12.value="va";
    p12.innerHTML="VA";
    document.getElementById("provincia").appendChild(p12);
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
