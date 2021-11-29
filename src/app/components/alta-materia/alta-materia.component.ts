import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from "../../services/usuarios.service";
import { MateriasService } from "../../services/materias.service";
import { Materia } from 'src/app/clases/materia';
import Swal from 'sweetalert2';
import { AngularFireStorage } from "@angular/fire/storage";
import { DomSanitizer } from '@angular/platform-browser';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {
  
  formMateria:FormGroup;
  nuevaMateria: Materia = new Materia();
  // arrProfesores:Usuario[]=[];
  imagenFile!:File;
  imagenURL:string;
  imagenPreview!:string;

  constructor(private usuarioService:UsuariosService,private materiaService:MateriasService,private af:AngularFireStorage, private sanitizer:DomSanitizer) { 
    this.imagenURL = "";
    this.formMateria = new FormGroup({
      nombre:  new FormControl('',Validators.required),
      costo:  new FormControl('',Validators.required),
      comision: new FormControl('',Validators.required),
      año: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  }

  altaMateria(){
    
    if (this.formMateria.status=="VALID") {
      // this.uploadImagen();
      // if(this.nuevaMateria.profesor != "-1" && this.nuevaMateria.profesor != undefined){

        this.nuevaMateria.nombre = this.formMateria.get('nombre')?.value;
        this.nuevaMateria.costo = this.formMateria.get('costo')?.value;
        this.nuevaMateria.año = this.formMateria.get('año')?.value;
        this.nuevaMateria.comision = this.formMateria.get('comision')?.value;
        this,this.nuevaMateria.cupo = 100;
        // this.nuevaMateria.imagen = this.imagenURL;
        //se agraga a la colección
        this.materiaService.create(this.nuevaMateria)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cripto guardada',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Seleccione una cripto!',
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    // }else{
    //   //alerte de faltan datos por cargar
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: 'Todos los campos deben estar cargados!',
    //     showConfirmButton: false,
    //     timer: 1500
    //   });
    // }

  }

  procesarProfesor($event:any){
    // this.formMateria.setValue({profesor:$event.email});
    this.nuevaMateria.profesor = $event.email;
  }
  
  obtenerImagen($event:any){
    
    this.imagenFile =  $event.target.files[0]; 
    this.extraerBase64(this.imagenFile).then((imagen:any) =>{
      this.imagenPreview = imagen.base;
      console.log(imagen);
    });
   
  }

  async uploadImagen(){
    let storageRef = this.af.storage.ref();
    
    let path = `/${"imagenes"}/${this.imagenFile.name}`;      
    var iRef = storageRef.child(path);
    
    await iRef.put(this.imagenFile).then((snapshot)=>{
      snapshot.ref.getDownloadURL().then(valor=>{
        this.imagenURL = valor;
        // console.log('imagenUrl',valor);
      });
    });
  }
  extraerBase64 = async ($event:any) => new Promise((resolve, rejct) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustHtml(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = ()=>{
        resolve({
          base: reader.result
        });
      }
      reader.onerror = error=>{
        resolve({          
          base: null
        })
      }
    } catch (error) {
      
    }
  });
}
