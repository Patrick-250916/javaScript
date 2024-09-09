// condicionales                                                                               
console.log("bievenido a condicionales")

let edad = 21;

if (edad > 22){ // if Uno solo 
    console.log("tienes 21 años")
}else if(edad){ // else if los que yo quiera
    console.log("tienes 21 años")
}else{  // else Uno solo 
    console.log("fin")
}

// HISTORIA DE COFLA
let dineroCofla = prompt("dime tu dinero cofla ");
let dineroRoberto = prompt("dime tu dinero Roberto ");
let dineroPedro = prompt("dime tu dinero Pedro ");

// dinero cofla
if(dineroCofla >= .6 && dineroCofla < 1){
    document.write("comprate el helado de agua ")
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    document.write("comprate el helado de crema ")
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    document.write("comprate el helado de  heladix ")
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    document.write("comprate el helado de heladovich ")
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    document.write("comprate el helado de helardo ")
}
else if(dineroCofla >= 2.9){
    document.write("helado con confites o el pote de 1/4kg ")
}else{
    document.write("lo siento, pobre de mierda, no te alcanzo")
}

// dineroRoberto
if(dineroRoberto >= .6 && dineroRoberto < 1){
    document.write("comprate el helado de agua ")
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    document.write("comprate el helado de crema ")
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    document.write("comprate el helado de  heladix ")
}
else if(dineroRoberto >= 1.7 && dineroRoberto< 1.8){
    document.write("comprate el helado de heladovich ")
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    document.write("comprate el helado de helardo ")
}
else if(dineroRoberto >= 2.9){
    document.write("helado con confites o el pote de 1/4kg ")
}else{
    document.write("lo siento, pobre de mierda, no te alcanzo ")
}

// dinero Pedro
if(dineroPedro >= .6 && dineroPedro < 1){
    document.write("comprate el helado de agua ")
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    document.write("comprate el helado de crema ")
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    document.write("comprate el helado de  heladix ")
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    document.write("comprate el helado de heladovich ")
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    document.write("comprate el helado de helardo ")
}
else if(dineroPedro >= 2.9){
    document.write("helado con confites o el pote de 1/4kg ")
}else{
    document.write("lo siento, pobre de mierda, no te alcanzo ")
}

