import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.page.html',
  styleUrls: ['./instruments.page.scss'],
})
export class InstrumentsPage  {

  instruments=[
    {
      name: "GUITARRA",
      imgSrc: 'assets/instruments/guitar.png',
      route: "/instruments/guitar"
    },
    {
      name: "VIOLIN",
      imgSrc: 'assets/instruments/fiddle.png',
      route: "/instruments/guitar"
    },
    {
      name: "TECLADO",
      imgSrc: 'assets/instruments/keyboard.png',
      route: "/instruments/guitar"
    },
    {
      name: "BAJO",
      imgSrc: 'assets/instruments/bass.png',
      route: "/pages/guitar"
    }
  ]

}
