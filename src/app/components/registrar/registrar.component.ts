import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  imagenFile!:File;
  imagenURL:string;
  formRegistro:FormGroup;
  nuevoUsuario:Usuario;
  constructor(private af:AngularFireStorage) {
    this.imagenURL = "";
    this.nuevoUsuario = new Usuario();
    this.formRegistro = new FormGroup({
      contraseña:  new FormControl('',Validators.required),
      email:  new FormControl('',[Validators.required,Validators.email]),
      tipo: new FormControl('-1',[Validators.required]),
    });
   }

  ngOnInit(): void {
    
  }

  abtenerImagen($event:any){
    
    this.imagenFile =  $event.target.files[0]; 
   
  }

  uploadImagen(){
    let storageRef = this.af.storage.ref();
    
      let path = `/${"imagenes"}/${this.imagenFile.name}`;      
      var iRef = storageRef.child(path);
      
      iRef.put(this.imagenFile).then((snapshot)=>{
        snapshot.ref.getDownloadURL().then(valor=>{
          this.imagenURL = valor;
          console.log('imagenUrl',valor);
        });
      });

  }

  validarSelect(){
    let valorSelect = this.formRegistro.get('tipo')?.value;
    if (valorSelect != -1) {
      return true;
    }else{
      return false;
    }
  }

  validarImagen(){
    if(this.imagenFile){
      return true;
    }else{
      return false;
    }
  }

  registrar(){
    
    if (this.formRegistro.status == "VALID") {
      if (this.validarSelect()) {
        if (this.validarImagen()) {
          //Cargo la imágen y obtengo la url
          this.uploadImagen();
          //Cargo los vaolres en la db
          this.nuevoUsuario.email = this.formRegistro.get('email')?.value;
          this.nuevoUsuario.tipo = this.formRegistro.get('tipo')?.value;
          this.nuevoUsuario.imagen = this.imagenURL;
          console.log(this.nuevoUsuario);
          
        }
      } 
    }
   
  }
}
