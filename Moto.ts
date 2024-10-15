import { Vehiculo } from "./Registro";
export class Moto extends Vehiculo {
    constructor(color: string, marca: string, modelo: number) {
        super(color, marca, modelo);
    }

    public getInfo(): string {
        return (`Info: color: ${this.color}, marca: ${this.marca}, modelo: ${this.modelo}`);
    }
}