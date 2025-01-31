import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  estados: any[] = [
    {
    username:'Joss',
    message: 'Hace 11 minutos',
    avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alex',
      message: '10:03 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Sandra',
      message: '11:20 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Madai',
      message: 'Justo ahora',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jazmin',
      message: '01:00 a.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Teo',
      message: '14:00 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Aaron',
      message: '05:56 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Tano',
      message: '11:00 a.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jenni',
      message: '18:23 a.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Gael',
      message: '22:00 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alejandro',
      message: '20:00 p.m.',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    
  ];

  constructor() {}
  
ngOnInit() {
  }

}

