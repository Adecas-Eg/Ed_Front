import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../models/casa';

@Injectable({
  providedIn: 'root'
})
export class CasaService {
  casaUrl='http://localhost:8080/casa/';

  constructor(private httpClient:HttpClient) { }

  public list():Observable<Casa[]>{
    return this.httpClient.get<Casa[]>(this.casaUrl+'show');
  }

  
  public detail(id:number):Observable<Casa>{
    return this.httpClient.get<Casa>(this.casaUrl+ `detail/${id}`);
  }
  
  public save(casa:Casa):Observable<any>{
    return this.httpClient.post<any>(this.casaUrl+ `create`,casa);
  }
  
  public update(casa:Casa,id:number):Observable<any>{
    return this.httpClient.put<any>(this.casaUrl+ `update/${id}`,casa);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.casaUrl+ `delete/${id}`);
  }
  
}
