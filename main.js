console.log("JS OK");

console.log("Vue OK", Vue);


// Così si costruisce il metodo createApp
const { createApp } = Vue;

// Inizializziamo l'app Vue
const app = createApp({
  data() {
    return {
      letterainiziale: 'Lezione su AXIOS',
      Imgsample: "img/christopher.jpg",
      traccia: 'inserisci il nome',
      colorClass: 'text-danger',
      NomeeCognome: 'Erminio Cicchetti'
    }
  },
  methods: {
    welcome() {
      alert(`testo`)
    },

    lol() {
      alert(`testo`)
    },















  }
})
// La monto nel mio id chiamato 'prova'
app.mount('#prova');

// Inizializziamo l'app Vue
const app2 = createApp({
  data() {
    return {
      emails1: '',
      emails2: '',
      emails3: '',
      emails4: '',
      emails5: '',
      emails6: '',
      emails7: '',
      emails8: '',
      emails9: '',
      emails10: '',
      
    }
  },
  methods: {
    
  },
created() {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails1 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails2 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails3 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails4 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails5 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails6 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails7 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails8 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails9 = res.data.response;
  })
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(res => {
  this.emails10 = res.data.response;
  })
}

  
})
// La monto nel mio id chiamato 'prova'
app2.mount('#grid');