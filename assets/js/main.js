// VARIABILI
// var nome
var nome = prompt("inserisci il tuo nome")
    // var cognome
var cognome = prompt("inserisci il tuo cognome")
    // var colore
var colore = prompt("inserisci il tuo colore preferito")

// OUTPUT
// output nome
document.getElementById("nome").innerHTML = nome
    // output cognome
document.getElementById("cognome").innerHTML = cognome
    // output colore
document.getElementById("colore").innerHTML = colore

// print
document.getElementById("print").innerHTML = nome + cognome + colore + "21"