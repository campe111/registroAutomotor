import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor {
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    public getInfoRegistro(): string {
        return `Información del Registro:\nAutos:\n${this.getAutosInfo()} \nMotos:\n${this.getMotosInfo()} \nCamiones:\n${this.getCamionesInfo()}`;
    }

    // Métodos para agregar vehículos
    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    // Métodos para dar de baja vehículos
    public darDeBajaAuto(auto: Auto): void {
        const index = this.autos.indexOf(auto);
        if (index !== -1) {
            this.autos.splice(index, 1);
        }
    }

    public darDeBajaCamion(camion: Camion): void {
        const index = this.camiones.indexOf(camion);
        if (index !== -1) {
            this.camiones.splice(index, 1);
        }
    }

    public darDeBajaMoto(moto: Moto): void {
        const index = this.motos.indexOf(moto);
        if (index !== -1) {
            this.motos.splice(index, 1);
        }
    }

    // public getAutos(): Auto[] {
    //     return this.autos;
    // }

    // public getMotos(): Moto[] {
    //     return this.motos;
    // }

    // public getCamiones(): Camion[] {
    //     return this.camiones;
    // }
    private getAutosInfo(): string {
        if (this.autos.length === 0) return "No hay autos registrados.";
        let info = "";
        for (let i = 0; i < this.autos.length; i++) {
            info += this.autos[i].getInfo();
            if (i < this.autos.length - 1) info += "\n"; // Añade un salto de línea excepto en la última iteración
        }
        return info;
    }
    
    private getMotosInfo(): string {
        if (this.motos.length === 0) return "No hay motos registradas.";
        let info = "";
        for (let i = 0; i < this.motos.length; i++) {
            info += this.motos[i].infoMoto();
            if (i < this.motos.length - 1) info += "\n";
        }
        return info;
    }
    
    private getCamionesInfo(): string {
        if (this.camiones.length === 0) return "No hay camiones registrados.";
        let info = "";
        for (let i = 0; i < this.camiones.length; i++) {
            info += this.camiones[i].infoCamion();
            if (i < this.camiones.length - 1) info += "\n";
        }
        return info;
    }
}
