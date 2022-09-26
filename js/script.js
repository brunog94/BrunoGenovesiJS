let ogCush= 'og cush';
let sepaWidow= 'black widow'
let sepaDream = ' blue dream'
let sepaJack='jack here'
let sePa = prompt('elegi tu sepa');

if(sePa==ogCush){

    alert('el precio es 1200')
}else if(sePa==sepaWidow){
    alert('el precio es 1400')
}else if(sePa==sepaDream){
    alert('el precio es 1500')
}else if (sePa==sepaJack){
    alert('el precio es 1100')
}else{
    alert('no elegiste una opcion correcta')
}
console.log(sePa)

for(let i = 1; i <=2;i++){
   prompt('elegi otra sepa')
    if ( i = sePa){
        alert('elegiste la'+' '+ i +'da'+" "+"sepa")
    }
}
    