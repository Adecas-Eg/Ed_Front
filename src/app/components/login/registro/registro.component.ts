import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  email: string="";
  name: string="";
  password: string="";
  fecha: string="";
  edad: string="";
  sexo: string="";
  pais: string="";
  ciudad: string="";
  telefono: string="";

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router:Router){}

    // onCreate():void{
    //   this.userService.save(user).subscribe(
    //     data => {
    //       this.toastr.success('Casa creado!!!!', 'OK',{
    //         timeOut: 3000,positionClass: 'toast-top-center'
    //       });

    //       this.router.navigate(['/']);
    //     },
    //     err => {
    //       this.toastr.error(err.error.mensaje, 'faild',{
    //         timeOut: 3000,positionClass: 'toast-top-center'
    //       });
    //       this.router.navigate(['/']);
    //     }
    //   );

}
