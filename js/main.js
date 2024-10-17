// ! TRACCIA
/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

const emails = [
  "ema@email.com",
  "deb@email.com",
  "sis@email.com",
  "tiz@email.com",
  "enr@email.com",
];

// ! SVOLGIMENTO

let isMailAccepted = false;
let userMail = prompt("Inserisci la tua email:");
while (!isMailAccepted) {
  userMail.includes("@" && ".")
    ? (isMailAccepted = true)
    : (userMail = prompt("Inserisci una mail valida!"));
}

console.log(
  emails.includes(userMail)
    ? "Login effettuato!"
    : "Email non presente nei nostri database, registrati prima di accedere"
);

// ! TRACCIA
/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// ! SVOLGIMENTO

const userNumber = Math.ceil(Math.random() * 6);
const pcNumber = Math.ceil(Math.random() * 6);
let result = "";

if (userNumber > pcNumber) {
  result = "Complimenti, hai vinto!          ";
} else if (pcNumber > userNumber) {
  result = "Sfortunato, ha vinto il computer!";
} else {
  result = "Finisce in pareggio!             ";
}

// ! OUTPUT

console.log(`
|*************************************************|
|************| PC |*************| TU |************|
|************|  ${pcNumber} |*************|  ${userNumber} |************|
|*************************************************|
|   RISULTATO: ${result}  |
`);

/* l'ho voluto fare "carino" */
