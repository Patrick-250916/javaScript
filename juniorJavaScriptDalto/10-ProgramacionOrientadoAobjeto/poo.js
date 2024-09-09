// Programacion orientado a objetos
// metodo es una funcion dentro de una clase
// POO 5 palabras Objecto, Atributo, Metodo, Clases, Instancia
/* 
    POO
    -- Clase
    -- Objeto
    -- Atributo
    -- Metodo
    -- Constructor
*/
/* 
    CARACTERISTICAS DE LA POO
    -- Abstraccion
    -- Modularidad
    -- Jerarquiar
*/
class Animal{
    constructor(especie, edad, color){    // son parametros ()
        // this es el objeto que voy a crear
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, Tengo ${this.edad} Años y soy  de color ${this.color} `;
    }
    // Metodo  verInfo = () =>
    verInfo(){
        document.write(this.info +"<br>")
        console.log(this.info +"<br>")
    }
    ladrar(){
        if(this.especie == "perro"){
            document.write("¡WAW!"+ "<br>")
        }else {
            document.write("No puede ladrar  " + this.especie + "<br>")
        }
    }
}

class Perro extends Animal{ 
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
}
// los objetos definir con const
const perro = new Perro('perro', 1, 'rojo', 'doberman');
const gato = new Animal('gato', 2, 'negro');
const pajaro = new Animal('pajaro', 4, 'verde');
// perro.verInfo()
// gato.verInfo()
// pajaro.verInfo()

perro.verInfo();
gato.verInfo();

//document.write(perro.especie)
