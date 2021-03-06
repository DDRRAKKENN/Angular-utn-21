import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:String="Area de home - Productos."
  //name:String="Coloque su nombre aqui"
  buyed:Boolean=false;
  products:any=[]
  constructor(private productosSrv:ProductosService) {
    this.productosSrv.getProductos()
    .subscribe(data=>{
      this.products=data;

    })
  }

  async ngOnInit(){
    try{
      this.products = await this.productosSrv.getProductos().toPromise();
    }catch(e){
      console.log("Error",e)
    }
  }
}
