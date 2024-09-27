export class Camion {
    private color:string;
    private marca:string;
    private modelo:number;

    constructor(color:string , marca:string , modelo:number) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    public infoCamion():string {
        return `Info: -${this.getColor()} -${this.getMarca()} -${this.getModelo()}`
    }
    public getColor():string {
        return this.color;
    }
    public getMarca():string {
        return this.marca;
    }
    public getModelo():number {
        return this.modelo;
    }

    public setColor(newColor : string):void {
        if (newColor != "violeta") {
            this.color = newColor;
        }
    }
    public setMarca(newMarca:string):void {
        this.marca = newMarca;
    }
    public setModelo( newModelo:number):void {
        this.modelo = newModelo;
    }
}