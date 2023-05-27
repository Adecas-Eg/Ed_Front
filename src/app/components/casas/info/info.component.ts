import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  casa?: Casa;
  constructor(
    private casaService:CasaService,
    private activatedRoute: ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute
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
        this.router.navigate(['/']);
      }

    )
  }

}
