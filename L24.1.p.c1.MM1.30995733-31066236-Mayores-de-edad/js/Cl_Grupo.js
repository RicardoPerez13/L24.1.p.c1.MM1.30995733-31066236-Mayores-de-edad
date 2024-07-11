export default class Cl_Grupo{
 constructor(){
    this.cont_personas=0;
    this.aux_mayores=0;
 }
 procesar(p){
    this.cont_personas++;
   
    if(p.edad>=18){
        this.aux_mayores++;
    }
 }
 devolverMayores(){
    return this.aux_mayores
}

 devolverPersonas(){
    return this.cont_personas}

 porcMayores(){
    return (this.aux_mayores/this.cont_personas)*100
 }
}