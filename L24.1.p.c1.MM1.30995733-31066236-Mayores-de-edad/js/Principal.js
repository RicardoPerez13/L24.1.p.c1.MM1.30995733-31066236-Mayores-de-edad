
import Cl_Grupo from "./Cl_Grupo.js";
import Cl_Persona from "./Cl_Persona.js";

let persona1=new Cl_Persona ("Luis", 15);
let persona2=new Cl_Persona ("Ana", 19);
let persona3=new Cl_Persona ("José", 21);
let persona4=new Cl_Persona ("Carmen", 17);
let persona5=new Cl_Persona ("Rosa", 18);
let persona6=new Cl_Persona ("José", 22);
let persona7=new Cl_Persona ("María", 17);
let persona8=new Cl_Persona ("Luz", 19);
let persona9=new Cl_Persona ("Rafael", 23);
let persona10=new Cl_Persona ("Liz", 15);
let persona11=new Cl_Persona ("Marcos", 20);
let persona12=new Cl_Persona ("Leo", 16);

let grupo=new Cl_Grupo();

grupo.procesar(persona1);
grupo.procesar(persona2);
grupo.procesar(persona3);
grupo.procesar(persona4);
grupo.procesar(persona5);
grupo.procesar(persona6);
grupo.procesar(persona7);
grupo.procesar(persona8);
grupo.procesar(persona9);
grupo.procesar(persona10);
grupo.procesar(persona11);
grupo.procesar(persona12);

let salida=document.getElementById("salida");
salida.innerHTML="Resultados del Grupo";
salida.innerHTML+="<br> El número de personas es: "+grupo.devolverPersonas();
salida.innerHTML+="<br> El número de personas Mayores de edad es: "+grupo.devolverMayores();
salida.innerHTML+="<br> El porcentaje de Personas Mayores de edad es: "+grupo.porcMayores()+"%";
