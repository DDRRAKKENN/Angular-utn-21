import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detailTitle:String="5) Area de detalles";
  producto: any;
  loading=false;
  constructor(
    private productosSrv:ProductosService,
    private activatedRoute:ActivatedRoute
  ) { }

  async ngOnInit(){
    try{
      const id= this.activatedRoute.snapshot.paramMap.get("id")
      console.log(id);
      
      this.producto = await this.productosSrv.getProducto(id) 
      console.log(this.producto);
      this.loading=true;

    }catch(e){
    }
  }

}
