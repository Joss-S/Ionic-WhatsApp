import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit{

  chats: any[] = [
    {
    username:'Joss',
    message: 'Oliis',
    date:'12:00',
    avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alex',
      message: 'Sacate',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Sandra',
      message: 'Extraño a mi ex :(',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Madai',
      message: 'Jooosss',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jazmin',
      message: 'Hola amistad',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Teo',
      message: 'Juguemos',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Aaron',
      message: 'Vamos a tu ranchito',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Tano',
      message: 'Pasa la tareaa',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jenni',
      message: 'Chisme',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Gael',
      message: 'La rachaa',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alejandro',
      message: 'Jugemos fornais',
      date:'12:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    
  ];

  constructor() {}
  
ngOnInit() {
  }

}
