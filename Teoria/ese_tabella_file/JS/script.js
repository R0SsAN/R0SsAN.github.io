document.getElementById("grafico").style.display="none";
function readSingleFile(e) {
    var contents = "";
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        elaboraContents(contents);
    };
    reader.readAsText(file);
}
function elaboraContents(contents) {
    var element = document.getElementById('file-content');
    var lines = contents.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        //splitto la stringa con carattere ';'
        let elements = line.split(";");
        //creo l'elemento riga della tabella
        var linea = document.createElement("tr");
        //se è l'intestazione creo vari th e li aggiungo al tr
        //alla fine appendo il tr al thead della tabella
        if (i == 0) {
            for (let j = 0; j < elements.length; j++) {
                var cella = document.createElement("th");
                cella.innerHTML = elements[j];
                linea.appendChild(cella);
            }
            document.getElementById("intestazione-tabella").appendChild(linea);
        }
        //se è il contenuto creo vari td e li aggiungo al tr
        //alla fine appendo il tr al tbody della tabella
        else {
            for (let j = 0; j < elements.length; j++) {
                var cella = document.createElement("td");
                cella.innerHTML = elements[j];
                linea.appendChild(cella);
            }
            document.getElementById("contenuto-tabella").appendChild(linea);
        }
    }
    creaGrafico(lines);
}
function creaGrafico(dati)
{
    document.getElementById("grafico").style.display="block";
    var grafico=document.getElementById("grafico").getContext("2d");
    var myData=[];
    var myLabels=[];
    for(let i=1;i<dati.length;i++)
    {
        let valore=(dati[i].split(";"))[2];
        myData.push(valore);
        valore=(dati[i].split(";"))[0];
        myLabels.push(valore);
    }
    var chart=new Chart(grafico,{
        type:"bar",
        data: {
            labels: myLabels,
            datasets: [{
                label: "Popolazione",
                data: myData,
                backgroundColor:"lightsalmon",
                borderWidth:1,
                borderColor:"black",
            }]
        }
    })

}

// associazione all'evento "onChange" dell'elemento 'file-input' della funzione readSingleFile()
document.getElementById('file-input').addEventListener('change', readSingleFile, false);