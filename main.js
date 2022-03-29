function pressioneBottone(event) {
    event.preventDefault();
    let oreDiLavoro =parseInt(document.getElementById("oreLavoroRichieste").value);
    calcoloOre(oreDiLavoro);
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
        
  }
}


let codiceSconto = document.getElementById("codiceSconto").value;
let codiceScontoAccettato = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
let verificaSconto;
let variabileZero = false;
//ciclo for per confronto con il server
for (let i=0; i < codiceScontoAccettato.length;i++){
    if(codiceScontoAccettato[i]!==codiceSconto){  
        console.log("codice sconto presente: " + codiceScontoAccettato);
        variabileZero==true
    }
    else {
        variabileZero = false
    alert(emailRisultato="Codice sconto non utilizzabile");
    break;
    }
}
function calcoloConSconto
/*if (variabileZero == 0){
    alert(verificaSconto= "Codice sconto non utilizzabile");
}

//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailRisultato;*/
