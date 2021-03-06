import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  catalogTitle:string="2) Area de catalogo"
  constructor() { }

  ngOnInit(): void {
  }

}
