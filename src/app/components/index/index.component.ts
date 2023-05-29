import { Component } from '@angular/core';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  casas: Casa[] = [];

  constructor(private casaService:CasaService,
    private toastr: ToastrService,
    private router:Router){}

  ngOnInit(){
    this.listCasas();
  }

  listCasas():void {
    this.casaService.list().subscribe(
      data => {
        this.casas= data;
      },
    );
  }

  //
  borrar(id:number){
    this.casaService.delete(id).subscribe(
      data => {
      this.toastr.success('Casa Elimindada!!!!', 'OK',{
        timeOut: 3000,positionClass: 'toast-top-center'
      });
      this.router.navigate(['/']);
      }
    );
  }

}
