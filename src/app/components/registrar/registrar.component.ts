import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from "../../clases/usuario";
import { UsuariosService } from "../../services/usuarios.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from "../../services/auth.service";

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

  constructor(private af:AngularFireStorage,private spinner: NgxSpinnerService, private usuarioService:UsuariosService,private router:Router,private auth:AuthService) {
    this.imagenURL = "";
    this.nuevoUsuario = new Usuario();
    this.formRegistro = new FormGroup({
      contraseña:  new FormControl('',Validators.required),
      email:  new FormControl('',[Validators.required,Validators.email]),
      tipo: new FormControl('-1',Validators.required),
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
          // console.log('imagenUrl',valor);
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
          //Muestro el spinner
          this.spinner.show();
          //Cargo la imágen y obtengo la url
          this.uploadImagen();
          //Seteo los datos del usuario
          this.nuevoUsuario.email = this.formRegistro.get('email')?.value;
          this.nuevoUsuario.tipo = this.formRegistro.get('tipo')?.value;
          //Este setInterval se usa para ir revisando si ya esta cargada la url
          var interval = setInterval(()=>{
            this.nuevoUsuario.imagen = this.imagenURL;
          },1000);
          //Escondo spinner y cargo la url
          setTimeout(() => {
            this.spinner.hide();           
            clearInterval(interval);
            console.log(this.nuevoUsuario);
            //Guardo los datos en la db
            this.usuarioService.create(this.nuevoUsuario);
            //Guardo Usuario en auth
            this.auth.registrar(this.nuevoUsuario.email,this.formRegistro.get('contraseña')?.value);
            this.auth.signOut();
            //Envío al usuario al login
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Tus datos se han cargado correctamente!',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigateByUrl('login');
          }, 5000);                  
          
          
        }
      } 
    }
   
  }
}
