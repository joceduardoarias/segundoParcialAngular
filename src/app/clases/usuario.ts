import { CriptoMoneda } from "./cripto-moneda";

export class Usuario {
    nombre!:string;
    email!: string;
    imagen!:string;
    tipo!:string;
    id!:string;
    nota!:string;
    fecha!:any;
    habilitado!:boolean;
    criptos:string[];
    criptosCompra:CriptoMoneda[];
}
