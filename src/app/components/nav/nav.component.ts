import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  estado = sessionStorage.getItem('estado');
  email = sessionStorage.getItem('email');
  user!: User;

  
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {

  }
 

  ngOnInit() {
      this.userService.detaile(this.email!).subscribe(
        data => {
          this.user = data;
        }
      );
  }

  onLogout = () => sessionStorage.clear();

}
