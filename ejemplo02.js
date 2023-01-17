


class Animal{

   peso = 0;
   estado = false;
   sexo = "hembra"
   habitat = "";
   nombre = "";

    constructor(sexo,peso,habitat){
        
        this.sexo = sexo;
        this.peso = peso;
        this.habitat = habitat;
    }

   comer(comida) {
    if(new Date().getHours === 12 || new Date().getHours() === 18){
        return `está comiendo ${comida}`;
    }
   }
   dormir() {
    if(new Date().getHours === 21){
        return `está durmiendo`
    }else{
        return "No está durmiendo"
    }
   }
}

const animal  = new Animal("Mark", "Macho", 21, "domestico");
console.log(animal.dormir())

class Perro extends Animal {
    #nombre = "";
    constructor(sexo,peso,habitat){
        super(sexo,peso,habitat)
        
    }

    moverLaCola(){
        return `${this.nombre} está perreando`;
    }


    0
    // si no lo defino en el constructor
     set name(n) {
       this.#nombre = n || "";
    } 

    get name() {
        return this.#nombre;
    }


}

const Tom = new Perro("macho", 10, "domestico")
Tom.moverLaCola();
Tom.name = "Tom";
console.log(Tom.nombre);
console.log(Tom.name);
