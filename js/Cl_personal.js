export default class Cl_personal {
    constructor(nombre, sueldo, tipoPersonal) {
        this._nombre = nombre;
        this._tipoPersonal = tipoPersonal;
        this._sueldo = sueldo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipoPersonal(tipoPersonal) {
        this._tipoPersonal = tipoPersonal;
    }
    get tipoPersonal() {
        return this._tipoPersonal;
    }
    set sueldo(sueldo) {
        this._sueldo = +sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    calcularAumento() {
        if (this._tipoPersonal == "obrero") {
            return this._sueldo * 0.2;
        }
        if (this._tipoPersonal == "administrativo") {
            return this._sueldo * 0.1;
        }
    }
}