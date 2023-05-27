import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginU?: LoginUsuario;
  userUrl = 'http://localhost:8080/user/'
  constructor(private httpUser:HttpClient) { }

  public list():Observable<User[]>{
    return this.httpUser.get<User[]>(this.userUrl+'show');
    
  }
  public detail(id:number):Observable<User>{
    return this.httpUser.get<User>(this.userUrl+`detail/${id}`);
  }
  
  public login(login:LoginUsuario):Observable<any>{
    return this.httpUser.post<any>(this.userUrl+'login', login);
  }

  public save(user:User):Observable<any>{
    return this.httpUser.post<any>(this.userUrl+ `create`,user);
  }


  public update(user:User,id:number):Observable<any>{
    return this.httpUser.put<any>(this.userUrl+ `update/${id}`,user);
  }


  public delete(id:number):Observable<any>{
    return this.httpUser.delete<any>(this.httpUser+ `delete/${id}`);
  }
}
