console.log("JS OK");

console.log("Vue OK", Vue);


// Così si costruisce il metodo createApp
const { createApp } = Vue;

// Inizializziamo l'app Vue
const app = createApp({
  data() {
    return {
      letterainiziale: 'In attesa video lezione . . .',
      Imgsample: "img/christopher.jpg",
      traccia: 'inserisci il nome',
      colorClass: 'text-danger',
      NomeeCognome: 'Erminio Cicchetti'
    }
  },
  methods: {
    welcome() {
      alert(`Una mela cade dall’albero. Altre due rimaste sui rami, scoppiano a ridere. Allora quella caduta, esclama in modo severo: "Cosa c’è da ridere? Siete proprio immature"”.
      
      “La vorrei da boscaiolo”.
      
      “Che taglia?”.
      
      “Alberi”.`)
    },

    lol() {
      alert(`Un genovese torna a casa presto dal lavoro. Nel giardino di casa vede parcheggiato il furgoncino di un idraulico. 
      Alzando lo sguardo al cielo esclama: “Ti prego, Signore, fa che sia il suo amante…””.`)
    },















  }
})
// La monto nel mio id chiamato 'prova'
app.mount('#prova');

// Inizializziamo l'app Vue
const app2 = createApp({
  data() {
    return {
      letterainiziale: 'QUI il Testo da stampare con Vue, a destra il bonus: carica immagine con Vue',
      Imgsample: "img/christopher.jpg",
      traccia: 'inserisci il nome',
      colorClass: 'text-danger'
    }
  },
  methods: {
    
  }
})
// La monto nel mio id chiamato 'prova'
app2.mount('#grid');