import { Component } from '@angular/core';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/service/casa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  casas: Casa[] = [];

  constructor(private casaService: CasaService){}

  ngOnInit(){
    this.listCasas();
  }

  listCasas():void {
    this.casaService.list().subscribe(
      data => {
        this.casas= data;
      },
      
    );
  }

  //
  borrar(id:number){
    alert('borrar el '+ id);
  }

}
