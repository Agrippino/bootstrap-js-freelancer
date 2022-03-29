function pressioneBottone(event) {
    event.preventDefault();
    let oreDiLavoro =parseInt(document.getElementById("oreLavoroRichieste").value);
    let costoSenzaSconto=calcoloOre(oreDiLavoro);
    console.log(costoSenzaSconto)
    let risultatoSconto=controlloSconto(costoSenzaSconto);
    console.log(risultatoSconto)
    document.getElementById("demo").innerHTML = costoSenzaSconto;

}
function calcoloOre(oreDiLavoro) {
    
    const sceltaLavoro=document.getElementById("tipoDiLavoro").value;
    let calcoloOrediLavoro;
         

    if (sceltaLavoro=="BD"){
        calcoloOrediLavoro= oreDiLavoro * 20.5;
        console.log("il costo del lavoro selezione per ora è: " + calcoloOrediLavoro);
        
    }
    else if (sceltaLavoro=="FD") {
      calcoloOrediLavoro=  oreDiLavoro * 15.3;
    console.log("il costo del lavoro selezione per ora è: " + calcoloOrediLavoro );
        
        
    }
    else if (sceltaLavoro=="PA") {
        calcoloOrediLavoro= oreDiLavoro * 33.6;
        console.log("il costo del lavoro selezione per ora è: " + calcoloOrediLavoro );
}    return(calcoloOrediLavoro);
}    

let codiceScontoAccettato = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
function controlloSconto(costo1) {
    let codiceSconto = document.getElementById("codiceSconto").value;
    let verificaSconto = false;
    let calcoloConSconto= (costo1);
    for (let i=0; i < codiceScontoAccettato.length;i++){
    if(codiceScontoAccettato[i]==codiceSconto){  
        calcoloConSconto= costo1*0.25;
        calcoloConSconto= costo1 - calcoloConSconto;
        console.log(calcoloConSconto)
        console.log("codice sconto presente: " + codiceScontoAccettato);
        verificaSconto==true
    }
    else if
        (codiceScontoAccettato[i]!=codiceSconto){
        verificaSconto = false
        codiceSconto=("Codice sconto non utilizzabile");
        }
    } return(calcoloConSconto);
}





//ciclo for per confronto con il server


/*if (verificaSconto == 0){
    alert(verificaSconto= "Codice sconto non utilizzabile");
}

//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailRisultato;*/
