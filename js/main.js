// ! TRACCIA
/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

const invitedUsers = ["Emanuele", "Antonio", "Tiziano", "Giuseppe", "Enrico"];

// ! SVOLGIMENTO

/* console.log(
  invitedUsers.includes(prompt("Inserisci il tuo nome:"))
    ? "Congratulazioni, sei invitato alla festa"
    : "Mi dispiace non sei invitato"
);
 */
// ! TRACCIA
/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// ! SVOLGIMENTO

const userNumber = Math.ceil(Math.random() * 6);
const pcNumber = Math.ceil(Math.random() * 6);

console.log(userNumber);
