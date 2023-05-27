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
  email: string = "";
  nombre: string = "";
  password: string = "";
  fecha: string = "";
  edad: string = "";
  sexo: string = "";
  pais: string = "";
  ciudad: string = "";
  telefono: string = "";
  ftPerfil: string = "";
  tipo_u: string = "";

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) { }

  onCreate(): void {
    const user = new User(this.email,this.nombre,this.password,this.fecha,this.edad,this.sexo,
      this.pais,this.ciudad,this.telefono,this.ftPerfil,this.tipo_u);

    this.userService.save(user).subscribe(
      data => {
        this.toastr.success('Usuario creado!!!!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/login']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'faild', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/registro']);
      }
    );
  }
}
