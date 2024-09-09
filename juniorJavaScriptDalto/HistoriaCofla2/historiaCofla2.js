// funciones
let cantidad = prompt('¿Cuantos alumnos son? ');
let alumnosTotales = [];

for (i=0; i<cantidad; i++){
    alumnosTotales[i] = [prompt('Nombre de alumno '+(i+1)),0]
}

const tomarAsistencia = (nombre, p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "p"){
        alumnosTotales[p][1]++;
    }
}

for (i=0; i<30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _____Presentes: ${alumnosTotales[alumno][1]}:<br>
    _____Ausencia: ${30 - parseInt(alumnosTotales[alumno][1])}:<br>`; // 30 veces
    if(30 -alumnosTotales[alumno][1] > 18){
        resultado +="<b style='color:#f00'>REPROBADO POR INASISTENCIA</b> <br></br>";
    }else{
        resultado += "<br></br>";
    }document.write(resultado); 
    //alert(resultado)
    console.log(resultado)
}