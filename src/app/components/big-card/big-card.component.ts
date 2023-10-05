import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string ="https://s2-techtudo.glbimg.com/S8ei00JGHti7zm18TQz3JwZUzEY=/0x0:995x560/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/J/6/OYDoBRSfOFGfZkQ8wbBg/captura-de-tela-2020-06-26-as-13.00.25.png"
  @Input()
  cardTitle: string="NOVO HOMEM DE FERRO ANUNCIADO"
  @Input()
  cardDescription: string ="Marvel Studios anuncia novo filme do homem de Ferro!"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
