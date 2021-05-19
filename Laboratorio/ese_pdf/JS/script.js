function creaPdf()
{
    var doc=new jsPDF();
    doc.setFont("Verdana");
    var temp=document.getElementById("nome").value;
    doc.text(100,20,temp);
    temp=document.getElementById("cognome").value;
    doc.text(100,30,temp);
    temp=document.getElementById("data").value;
    doc.text(20,40,"La data è:"+temp);
    temp=document.getElementById("testo").value;
    doc.text(20,50,"Quello che voglio scrivere è:"+temp);

    doc.addImage(document.getElementById("indirizzo").value, "JPEG", 15, 60, 90, 90);

    doc.save("prova.pdf");
}