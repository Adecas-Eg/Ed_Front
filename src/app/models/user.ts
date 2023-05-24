export class User {
    email?: string;
    name?: string;
    password?: string;
    fecha?: string;
    edad?: string;
    sexo?: string;
    pais?: string;
    ciudad?: string;
    telefono?: string;
    constructor(email:string,name:string,password:string,fecha:string,edad:string,sexo:string,pais:string,ciudad:string,telefono:string){
      this.email=email;
      this.name=name;
      this.password=password;
      this.fecha= fecha;
      this.edad=edad;
      this.sexo=sexo;
      this.pais=pais;
      this.ciudad=ciudad;
      this.telefono=telefono;
    }
}
