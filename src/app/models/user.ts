export class User {
    email?: string;
    nombre?: string;
    password?: string;
    fecha?: string;
    edad?: string;
    sexo?: string;
    pais?: string;
    ciudad?: string;
    telefono?: string;
    ftPerfil?:string;
    tipo_u?:string;


    constructor(email:string,nombre:string,password:string,fecha:string,edad:string,sexo:string,pais:string,ciudad:string,telefono:string,
      ftPerfil:string,tipo_u:string){
      this.email=email;
      this.nombre=nombre;
      this.password=password;
      this.fecha= fecha;
      this.edad=edad;
      this.sexo=sexo;
      this.pais=pais;
      this.ciudad=ciudad;
      this.telefono=telefono;
      this.ftPerfil=ftPerfil;
      this.tipo_u=tipo_u;
    }



}
