import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nuevo-casa',
  templateUrl: './nuevo-casa.component.html',
  styleUrls: ['./nuevo-casa.component.css']
})
export class NuevoCasaComponent {
  user!: User;
  email= sessionStorage.getItem('email')

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ){}


  ngOnInit(){
    sessionStorage.getItem('email');
    this.userService.detaile(this.email!).subscribe(
      data => {
      this.user=data;
    })
  }

}
