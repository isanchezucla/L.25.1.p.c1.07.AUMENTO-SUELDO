export default class Cl_empresa {
    constructor() {
        this.acumAumentos = 0;
    }
    procesarPersonal(p) {
        this.acumAumentos += p.calcularAumento();
    }
    montoTotalAdicional() {
        return this.acumAumentos;
    }
}