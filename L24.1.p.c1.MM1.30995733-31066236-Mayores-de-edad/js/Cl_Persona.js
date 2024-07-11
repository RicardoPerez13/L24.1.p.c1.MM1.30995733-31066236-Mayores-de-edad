export default class Cl_Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    set nombre(no){
        this._nombre=no;
    }
    get nombre(){
        return this._nombre;
    }
    set edad(ed){
        this._edad=ed;
    }
    get edad(){
        return this._edad;
    }
}

