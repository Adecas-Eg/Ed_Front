import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { InicioComponent } from './components/login/inicio/inicio.component';
import { InfoComponent } from './components/casas/info/info.component';
import { CardSliderComponent } from './components/casas/card-slider/card-slider.component';
import { CreateComponent } from './components/casas/create/create.component';
import { EditComponent } from './components/casas/edit/edit.component';
import { ImgSliderComponent } from './components/casas/img-slider/img-slider.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexComponent } from './components/index/index.component';
import { NuevoCasaComponent } from './components/casas/nuevo-casa/nuevo-casa.component';
import { Routes,RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ComentComponent } from './components/casas/coment/coment.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { FooterComponent } from './components/footer/footer.component';

const routes:Routes=[
  {
    path: '',component: IndexComponent
  },
  {
    path: 'user/config',component:NuevoCasaComponent
  },
  {
    path:'casa/detalle/:id',component: InfoComponent
  },
  {
    path: 'casa/create',component: CreateComponent
  },  
  {
    path: 'casa/edit/:id',component: EditComponent
  },
  
  {
    path: 'user/detail/:id/casa',component: EditComponent
  },
  {
    path: 'login',component: InicioComponent
  },
  {
    path: 'registro',component: RegistroComponent
  },
  {
    path: '**',redirectTo:'',pathMatch:'full'
  },

];
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InfoComponent,
    CardSliderComponent,
    ImgSliderComponent,
    NavComponent,
    NuevoCasaComponent,
    IndexComponent,
    EditComponent,
    CreateComponent,
    ComentComponent,
    PqrsComponent,FooterComponent,
    InicioComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
