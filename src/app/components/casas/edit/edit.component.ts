import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  casa!: Casa;

  constructor(
    private casaService:CasaService,
    private activatedRoute: ActivatedRoute,
    private toastr:ToastrService,
    private router:Router
  ){}
  ngOnInit(){
    const id = this.activatedRoute.snapshot.params.id;
    this.casaService.detail(id).subscribe(
      data => {
      this.casa = data
      },
      err => {
        this.toastr.error(err.error.mensaje, 'faild',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
        this.router.navigate(['/user/config']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params.id;
    this.casaService.update(this.casa,id).subscribe(
      data => {
        this.toastr.success('Producto actualizado!!!!', 'OK',{
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
