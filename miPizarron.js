class Pizarron {
    constructor() {
        this.ancho = 100;
        this.alto = 40;
        this.positionPlumon = (x,y);
    }

    escribirEnPizarron() {
        console.log("Hola, escribí en el pizarron");
        this.positionPlumon = (x=20,y=20)
    }
}

class Persona {
    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.altura = 0.0;
        this.colorFavorito = "";
        this.brincosDados = 0;
    }

    brincar() {
        console.log("Hola,acabo de brincar");
        this.brincosDados++ 
    }
}


const Yael = new Persona()
console.log("Yael brincos dados", Yael.brincosDados)
Yael.brincar()
console.log("Yael brincos dados", Yael.brincosDados)