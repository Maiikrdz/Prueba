import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage {

  animales=
    [
      {
        nombre: 'PERRO',
        imgSrc: 'assets/animales/imagenes/pug.jpg',
        soundSrc: 'assets/animales/sonidos/perro.mp3'
      },
      {
        nombre: 'ELEFANTE',
        imgSrc: 'assets/animales/imagenes/efelante.jpg',
        soundSrc: 'assets/animales/sonidos/elefante.mp3'
      },
      {
        nombre: 'GATO',
        imgSrc: 'assets/animales/imagenes/gatito.jpg',
        soundSrc: 'assets/animales/sonidos/gato.mp3'
      },
      {
        nombre: 'CERDO',
        imgSrc: 'assets/animales/imagenes/cerdo.jpg',
        soundSrc: 'assets/animales/sonidos/cerdo.mp3'
      },
    ]
    
    playSound(animal){
    //alert('Suena el animal'); //Prueba 1
    //console.log(animal); //Prueba 2
    let sonido = new Audio();
    sonido.src = animal.soundSrc;
    sonido.load();
    sonido.play();
    }

}
