function calcolaPesi()
{
    var altezza=parseInt(document.getElementById("altezza").value);
    var eta=parseInt(document.getElementById("eta").value);
    var sesso=document.getElementById("sesso").value;
    var peso=parseInt(document.getElementById("peso").value);
    var lorenz;
    var broca;
    var wan;
    var bmi;
    //formula lorenz
    if(sesso=="maschio")
        lorenz=altezza-100-(altezza-150)/4;
    else if(sesso=="femmina")
        lorenz=altezza-100-(altezza-150)/2;
    //formula broca
    if(sesso=="maschio")
        broca=altezza-100;
    else if(sesso=="femmina")
        broca=altezza-104;
    //formula wan
    wan=((altezza-150)*0.75)+50;
    //bmi
    bmi=peso/((altezza/100)*(altezza/100));
    //display pesi forma
    document.getElementById("lorenz").innerHTML=" "+lorenz.toFixed(2);
    document.getElementById("broca").innerHTML=" "+broca.toFixed(2);
    document.getElementById("wan").innerHTML=" "+wan.toFixed(2);
    document.getElementById("bmi").innerHTML=" "+bmi.toFixed(2);
}