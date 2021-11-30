import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CriptoMoneda } from 'src/app/clases/cripto-moneda';
import Swal from 'sweetalert2';
import { CriptoService } from "../../services/cripto.service";
@Component({
  selector: 'app-alta-cripto-moneda',
  templateUrl: './alta-cripto-moneda.component.html',
  styleUrls: ['./alta-cripto-moneda.component.css']
})
export class AltaCriptoMonedaComponent implements OnInit {

  formMateria:FormGroup;
  nuevaMoneda:CriptoMoneda;
  constructor(private criptoService:CriptoService) { }

  ngOnInit(): void {
    this.formMateria = new FormGroup({
      nombre:  new FormControl('',Validators.required),
      costo:  new FormControl('',Validators.required),
      comision: new FormControl('',Validators.required),
      año: new FormControl('',Validators.required),
    });
  }

  altaCripto(){
    if (this.formMateria.status=="VALID") {
      this.nuevaMoneda = new CriptoMoneda();
        console.log(this.formMateria.get('nombre')?.value);
        console.log(this.nuevaMoneda);
        
        this.nuevaMoneda.nombre = this.formMateria.get('nombre').value;
        this.nuevaMoneda.costoActual = this.formMateria.get('costo').value;
        this.nuevaMoneda.año = this.formMateria.get('año')?.value;
        this.nuevaMoneda.comision = this.formMateria.get('comision').value;
        //se agraga a la colección
        this.criptoService.create(this.nuevaMoneda)
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
      
  }
}
