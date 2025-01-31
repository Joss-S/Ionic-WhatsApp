import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit{

  llamadas: any[] = [
    {
    username:'Joss',
    message: 'Hoy, 5:17 a.m',
    avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alex',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Sandra',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Madai',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jazmin',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Teo',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Aaron',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Tano',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jenni',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Gael',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alejandro',
      message: 'Hoy, 5:17 a.m',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    
  ];

  constructor() {}
  
ngOnInit() {
  }

}