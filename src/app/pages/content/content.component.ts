import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/12/Pictures/_ca1ae8d6-bcf4-11e9-9bc9-c6f10a5dc6e3.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "Fala com a minha mão"
  private id:string | null =  "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
const result = dataFake.filter(article => article.id == id)[0]

this.contentTitle = result.title
this.contentDescription = result.description
this.photoCover = result.photoCover
  }


}
