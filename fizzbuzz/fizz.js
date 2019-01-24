let numero = 100

for (let index = 1; index <= 100; index++) {
    
    if (esDivisible(index,3) && esDivisible(index,5)) {
        document.write("fizzbuzz");
        
    }
    
    else if (esDivisible(index,3)) {
        document.write("fizz")        
    }
     
    else if (esDivisible(index,5)){
        document.write("buzz");
    }
    else{

        document.write("" + index)
    }
    document.write("</br>")
 
}

function esDivisible(numero, divisor){
    if (numero % divisor == 0) {
        return true;
    }else{
        return false;
    }
}