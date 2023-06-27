#Consegna
Apriamo la repo e facciamo subito un commit con il solito boilerplate.
Importiamo Vue tramite CDN (possiamo copiarlo dalle slide, da CDNjs oppure dal questa pagina della documentazione ufficiale).
Inizializziamo e montiamo un'app Vue.
Mettiamo in pagina un h1 il cui contenuto testuale deve derivare dai data di Vue.
BONUS: proviamo ad aggiungere un'immagine, derivante anch'essa dai dati di methods: {
    scrivosutext1() {

    }

  }

  <img v-bind:src ="Imgsample"> metodo 1 per stampare in un attributo html il contenuto, una variabile data
  <img class="imageclassic" v-bind:src ="Imgsample">