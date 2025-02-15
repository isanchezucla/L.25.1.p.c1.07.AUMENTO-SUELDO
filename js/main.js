/*AUMENTO SUELDO
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional
que deberá pagar en la próxima quincena.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:
Juan tiene un aumento de $20
Ana tiene un aumento de $24
Lin tiene un aumento de $20
Mary tiene un aumento de $10
Carlos tiene un aumento de $15
El total de monto adicional que debe pagar la empresa es de $89
*/
import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let empleado1 = new Cl_personal("Juan", 100, "obrero");
let empleado2 = new Cl_personal("Ana", 120, "obrero");
let empleado3 = new Cl_personal("Lin", 200, "administrativo");
let empleado4 = new Cl_personal("Mary", 50, "obrero");
let empleado5 = new Cl_personal("Carlos", 150, "administrativo");

let empresa = new Cl_empresa();
empresa.procesarPersonal(empleado1);
empresa.procesarPersonal(empleado2);
empresa.procesarPersonal(empleado3);
empresa.procesarPersonal(empleado4);
empresa.procesarPersonal(empleado5);

salida.innerHTML = `${empleado1.nombre} tiene un aumento de ${empleado1.calcularAumento()}$
<br>${empleado2.nombre} tiene un aumento de ${empleado2.calcularAumento()}$
<br>${empleado3.nombre} tiene un aumento de ${empleado3.calcularAumento()}$
<br>${empleado4.nombre} tiene un aumento de ${empleado4.calcularAumento()}$
<br>${empleado5.nombre} tiene un aumento de ${empleado5.calcularAumento()}$
<br>El total de monto adicional que debe pagar la empresa es de ${empresa.montoTotalAdicional()}$`;
