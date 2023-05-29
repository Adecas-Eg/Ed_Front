import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user!: User;
  email= sessionStorage.getItem('email')

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ){}


  ngOnInit(){
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.detail(id).subscribe(
      data => {
      this.user = data
      },
      err => {
        this.toastr.error(err.error.mensaje, 'faild',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }

    )
  }
  onUpdate():void {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.update(this.user,id).subscribe(
      data => {
        sessionStorage.setItem("email",this.user.email!);
        this.toastr.success('Producto actualizado!!!!', 'OK',{
          timeOut: 2000,positionClass: 'toast-top-center'
          
        });
      
        this.router.navigate(['/user/config/edit']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'faild',{
          timeOut: 2000,positionClass: 'toast-top-center'
        });
      }
    );
  }


}
