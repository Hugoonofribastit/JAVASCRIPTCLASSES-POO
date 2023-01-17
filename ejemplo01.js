//Programación orientada a objetos ( POO )
// JS no es un lenguaje orientado a objetos (sino a prototipos)
// ES6 -> Sigar Syntax



//Molde a partir del cual se pueden crear objetos

class Persona{
    //entidad
    //atributos (variables)
     
    //metodos (funciones)
    nombre = ""
    apellido = ""
    edad = 0
    constructor(nombre, apellido, edad = 0){
        //patrones -> creacional constructor()
        //se llama automaticamente cuando se instancia la clase
        //no retorna datos
        //es un metodo reservado para todas las clases

        //this siempre hace referencia a propiedades/variables/ metodos que estan dentro de la clase
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.respirar()
    }
    verificaredad(){
        this.edad>=18 ? console.log("es mayor de edad") : console.log("es menor de edad")
    }
    presentacion(){
        console.log(
            `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
            );
    }
    respirar(){
        setInterval(()=>{
            console.log("respirando");
        },4000)
    }
}

class Programador extends Persona{
    leng=[];
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad) // instancia el constructor de la clase Persona
        
    }
    //getters y setters
        set lenguaje(l) {
            this.leng.push(l);
        }
        get lenguaje(){
            return this.leng;
        }

        mostrarLenguajes(l){
            for (l of this.leng){
                console.log(l);
            }
        }
}

const Huguito = new Programador("Hugo", "Onofri Bastit",29)
Huguito.lenguaje = "JavaScript"
Huguito.lenguaje = "ReactJS"

const lenguajesAprendidos = Huguito.lenguaje;
console.log(lenguajesAprendidos);
// const arr = new Array();
const hugo = new Persona("Hugo", "Onofri Bastit",29 ); // creando un obj hugo" de la clase Persona


console.log(hugo instanceof Persona) //debe dar true
console.log(typeof hugo) //objeto
/* hugo.respirar(); */
hugo.presentacion();
hugo.verificaredad();
Huguito.mostrarLenguajes();
