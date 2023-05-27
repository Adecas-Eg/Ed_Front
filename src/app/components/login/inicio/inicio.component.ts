import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  email:string = "";
  password:string ="";

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ){}


  onLogin():void{
    const user = new LoginUsuario(this.email,this.password);
    this.userService.login(user).subscribe(
      data => {
        this.toastr.success('Bienvenido a enden life!!!', 'OK',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
      
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Contraseña o usuario incorrecto',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
        this.router.navigate(['/login']);
      }
    )


  }


}
