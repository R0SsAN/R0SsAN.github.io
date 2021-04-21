function caricaVettore()
{
    var vettoreRisposteCorrette=["RISP1","RISP2_2","RISP3_1","RISP4_1","RISP4_3","RISP5"];
}
function elabora()
{
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var giorno=parseInt(document.getElementById("giorno").value);
    var mese=document.getElementById("mese").value;
    var anno=parseInt(document.getElementById("anno").value);
    var punteggio=0;
    if(!controllaCampi(cognome,nome,giorno,mese,anno))
    {
        //controllo le risposte alle domande
        if(document.getElementById("linguaggio").value=="SQL")
            punteggio++;
        if(document.getElementById("valori").value=="2")
            punteggio++;
        if(document.getElementById("r1").checked)
            punteggio++;
        if(document.getElementById("c1").checked)
            punteggio++;
        if(document.getElementById("c3").checked)
            punteggio++;
        if(document.getElementById("bit").value=="1 byte")
            punteggio++;
        //visualizzo la somma dei punti
        document.getElementById("punteggio").innerHTML=punteggio.toString();
    }
    else
        alert("Campi non inseriti o inseriti non correttamente!");

}
function controllaCampi(cognome,nome,giorno,mese,anno)
{
    var check=false;
    if(cognome=="" || nome=="")
        check=true;
    if(giorno=="" || anno=="")
        check=true;
    return check;
}
function reset()
{
    document.getElementById("cognome").value="";
    document.getElementById("nome").value="";
    document.getElementById("giorno").value="";
    document.getElementById("anno").value="";
    document.getElementById("linguaggio").value="";
    document.getElementById("bit").value="";
    document.getElementById("r1").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("c1").checked=false;
    document.getElementById("c2").checked=false;
    document.getElementById("c3").checked=false;
}
function generaCodice()
{
    var codice="";
    codice+=(document.getElementById("cognome").value).substring(0,3);
    codice+=(document.getElementById("nome").value).substring(0,3);anno
    codice+=(document.getElementById("mese").value).substring(0,3);
    codice+=(document.getElementById("anno").value).substring(2,4);
    codice+=(parseInt(document.getElementById("punteggio").innerHTML)*10).toString();
    document.getElementById("utente_punteggio").innerHTML=codice;
}