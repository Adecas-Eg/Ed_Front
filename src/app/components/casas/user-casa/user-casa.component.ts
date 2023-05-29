import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-casa',
  templateUrl: './user-casa.component.html',
  styleUrls: ['./user-casa.component.css']
})
export class UserCasaComponent {
  casas: Casa[] = [];
  email=sessionStorage.getItem('email');

  constructor(
    private userService: UserService,
    private toastr : ToastrService,
    private router: Router,
    private casa: CasaService,
  ){}

  ngOnInit(){
    this.getCasasUser()
  }

  borrar(id:number){
    this.casa.delete(id).subscribe(
      data => {
      this.toastr.success('Casa Elimindada!!!!', 'OK',{
        timeOut: 3000,positionClass: 'toast-top-center'
      });
      this.router.navigate(['/']);
      }
    );
  }

  getCasasUser(){
    this.userService.getCasaUser(this.email!).subscribe(
      data => {
        this.casas =data;
      })
  }

}
