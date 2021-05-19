function elabora_testo()
{
    var data=controllaInformazioni();
    if(!data==true)
    {
        var punteggio=0;
        if(document.getElementById("linguaggio").value=="SQL")
            punteggio++;
        if(document.getElementById("valori").value=="2")
            punteggio++;
        if(document.getElementById("statiche").checked)
            punteggio++;
        if(document.getElementById("void").checked)
            punteggio++;
        if(document.getElementById("char").checked)
            punteggio++;
        if(document.getElementById("bit").value=="byte")
            punteggio++;
        
        document.getElementById("punteggio").innerHTML=punteggio+" punti!";
}
    else
    {
        alert("Dati utente non corretti!");
    }


}
function controllaInformazioni()
{
    //controllo dati utente
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var giorno=document.getElementById("giorno").value;
    var mese=document.getElementById("mese").value;
    var anno=document.getElementById("anno").value;
    if(cognome=="" || nome=="")
        return true;
    
    if(giorno.length<2)
        giorno="0"+giorno;
    if(anno.length>2)
        anno=anno.substr(2,2);
    console.log(giorno+" "+mese+ " "+anno);
    var data=giorno+"/"+mese+"/"+anno;
    return data;

}
function pulisci()
{
    //pulisci tutti i campi
}
function calcolaUtentePunteggio()
{
    //calcola utente punteggio
}