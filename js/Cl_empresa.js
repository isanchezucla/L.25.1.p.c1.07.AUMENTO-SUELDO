export default class Cl_empresa {
    constructor() {
        this.acumAumentos = 0;
        this.porcAdmin = 0.1;
        this.porcObrero = 0.2;
    }
    procesarPersonal(p) {
        if (p.tipoPersonal == "obrero") {
            this.acumAumentos += p.sueldo * this.porcObrero;
        } 
        if (p.tipoPersonal == "administrativo") {
            this.acumAumentos += p.sueldo * this.porcAdmin; 
        }
    }
    montoTotalAdicional() {
        return this.acumAumentos;
    }
}