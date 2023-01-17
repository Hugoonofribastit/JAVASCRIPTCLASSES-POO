const mensajeLindo = {
    mostrarMensaje : () =>{
        console.log("Este auto está a la venta");
    }
}


class Vehiculos{
    #velocidad = 0;
   #marca = "";
   #tipo = "Combustion interna";
   #color = "gris";

   constructor(marca,tipo,color){
    this.marca = marca;
    this.tipo = tipo;
    this.color= color;

   }

   frenar() {
    this.velocidad--;
   }

   acelerar() {
    this.velocidad++;
   }

}

class VW extends Vehiculos {
#year  = new Date().getFullYear();
#precio = 2000;
#modelo = "";

constructor(marca,tipo,color){
    super(marca,tipo,color)
}

set _year(y){this.#year = y;}
get _year(){return this.#year}


set _precio(p){this.#precio = p;}
get _precio(){return this.#precio}


set _modelo(m){this.#modelo = p;}
get _modelo(){return this.#modelo}
}

//MixIn
Object.assign(VW.prototype, mensajeLindo)
const polo = new VW("VW","combustion interna","negro");
polo.mostrarMensaje();