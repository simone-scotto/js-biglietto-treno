/********************
il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60
******************************/
/********************
tools

-number(prompt)
-variabili 
- if, else if, else
- .toFixed(2)

************************/

// chiedere al passeggero il numero di km che si desiderano percorrere e l'età e ottenere 2 variabili numeriche

        // kilometraggio
        // età 


let età = Number(prompt("La tua età"));
console.log(età);

let kilometraggio = Number(prompt("quanti kilometri percorrerai?"));
console.log(kilometraggio);

// tariffe

let tariffa_base = 0.21

// calcolare variabile tariffa base 

let prezzo_base = (tariffa_base * kilometraggio).toFixed(2);

// tariffe scontate

let sconto_under18 = (prezzo_base/100)*20

let sconto_over65 = (prezzo_base/100)*40


// calcolo variabile tariffa under 


let prezzo_under18 = (prezzo_base - sconto_under18).toFixed(2);

//calcolo variabil tariffa over 

let prezzo_over65 = (prezzo_base - sconto_over65).toFixed(2);



        // prezzo = 0.21€ * tot Km 

// prezzo base 0.20€ al km 
if (età < 18) {
    console.log(prezzo_under18);
    
} else if (età > 65) {
    console.log(prezzo_over65);
    
} else {
    console.log(prezzo_base);
    
}



        // if erà < 18
                // prezzo= 20% di (0.21 * tot km)
        
        // else if età > 65 
                // prezzo 40% di (0.21 * km)

        // else prezzo intero

