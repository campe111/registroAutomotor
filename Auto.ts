export class Auto {
    private color:string;
    private marca:string;
    private modelo:number;

    constructor(color:string , marca:string , modelo:number ) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    public getInfo():string {
        return `info : color: ${this.getColor()} marca:  ${this.getMarca()} modelo: ${this.getModelo()}`
    }
    public getColor() : string {
        return this.color;
    }

    public getMarca() : string {
        return this.marca;
    }

    public getModelo() : number {
        return this.modelo;
    }
    // creamos los set
    public setColor(newColor : string): void{
        this.color = newColor;
    }

    public setMarca(newMarca : string):void {
        this.marca = newMarca;
    }

    public setModelo(newModelo : number):void {
        this.modelo = newModelo;
    }
}
