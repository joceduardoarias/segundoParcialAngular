import { Materia } from "./materia";
import { Usuario } from "./usuario";

export class Examen {
    alumno!:Usuario[];
    profesor!:Usuario;
    materia!:Materia;
    fecha!:any;
    id!:string;
}
