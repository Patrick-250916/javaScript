class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        //this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert('celular encendido');
        }else{
            alert('celular apagado');
            this.encendido == false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert('reiniciando celular')
        }else{
            alert('el celular esta apagado')
        }
    }
    tomarFotos(){
        alert('foto tomado en una resolucion de: ' + this.resolucionDeCamara)
    }
    grabarVideo(){
        alert('grabando video en ' + this.resolucionDeCamara)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br> 
        Peso: <b>${this.peso}</b><br> 
        Tamaño: <b>${this.tamaño}</b><br> 
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br> 
        Memoria Ram: <b>${this.memoriaRam}</b><br>  ` 
    }

}

class CelularAltaGama extends Celular{ // Forma haremos la herencia
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert('estas granbando en camara lenta');
    }
    reconocimientoFacial(){
        alert('vamos a iniciar un reconocimento facial')
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}<br>`
    }
}


// celular1 = new Celular('Rojo', '150g', '5', 'HD', '1GB');
// celular2 = new Celular('Negro', '155g', '5.4', 'full hd', '2GB');
// celular3 = new Celular('Blanco', '15046g', '5.9', 'Full hd', '4GB');
// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>
// `);


celular1 = new CelularAltaGama('Rojo', '130g', '5.2', '4K', '5GB', 'full hd');
celular2 = new CelularAltaGama('Negro', '142g', '6', '4K', '6GB', 'full hd');
document.write(`
         ${celular1.infoAltaGama()} <br><br>
         ${celular2.infoAltaGama()} <br>
`);