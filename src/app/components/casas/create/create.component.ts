import { Component } from '@angular/core';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name:string = "";
  tipoVenta:string = "";
  ciudad:string = "";
  descripcion:string = "";
  pais:string = "";
  img:string = "";
  video:string = "";
  estrato:string = "";
  piso:string = "";
  habitaciones:string = "";
  area:string = "";
  parqueadero:string = "";
  balcon:string = "";
  antiguedad:string = "";
  dirrecion:string = "";
  idUser:string = "";
  

  constructor(
    private casaService:CasaService,
    private toastr: ToastrService,
    private router:Router
    ){}

  onCreate():void{
    const casa = new Casa(this.name,this.descripcion,this.tipoVenta,this.ciudad,this.pais,
      this.img,this.video,this.estrato,this.piso,this.habitaciones,this.balcon,this.area,this.antiguedad,this.parqueadero,this.dirrecion);
    this.casaService.save(casa).subscribe(
      data => {
        this.toastr.success('Casa creado!!!!', 'OK',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
      
        this.router.navigate(['/user/config']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'faild',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
        this.router.navigate(['/user/config']);
      }
    );
  }
}
