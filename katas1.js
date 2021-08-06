function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   let meuRetorno = []
   let contador = 0

   for (let counter = 1; counter <= 20; counter++){
    meuRetorno[contador] = counter
    contador += 1
    
    
    
  }
  return meuRetorno
}
console.log(oneThroughTwenty())

function evensToTwenty() {
    

  let numerosPares = []
  let par = 2

  for (let counter = 0; counter < 10; counter++){
   
     numerosPares[counter] = par
     par = par + 2
   }
 return numerosPares
}
console.log(evensToTwenty())

function oddsToTwenty() {
  
  let impar = []
  let numero = 1

  for (let i = 0; i < 10; i++){
    impar[i] = numero
    numero = numero + 2
  }

   return impar
}

console.log(oddsToTwenty())

function multiplesOfFive() {
    
  let multiplesOfFive = []
  let contador = 0
  

  for (let i = 1; i <= 100; i++){
    if(i % 5 === 0){
      
      multiplesOfFive[contador] = i
      contador = contador + 1
    }
  }
  return multiplesOfFive

}

console.log(multiplesOfFive())

function squareNumbers() {
    
 let vetorNumeros = []
 let numeroQuadrado
 let contador = 0

 

  for (let i = 1; i <= 10; i++) {
    numeroQuadrado = (i*i)
    
    if (numeroQuadrado/i === i){
      contador = i - 1
      vetorNumeros[contador] = numeroQuadrado
    }
   }
       return vetorNumeros

}

console.log(squareNumbers())

function countingBackwards() {
    
  let vetorNumeros = []
  let contador = 0
 
  for (let i = 20; i > 0; i--){
     vetorNumeros[contador] = i
     contador += 1
  }
  return vetorNumeros
 }
 
 console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
    
  let vetorNumeros = []
  let contador = 0

  for (let i = 20; i >=1 ; i--){
    if(i % 2 == 0){
      vetorNumeros[contador] = i
      contador += 1
    }
    
  
  }
  return vetorNumeros
    
}
 
 console.log(evenNumbersBackwards())


function oddNumbersBackwards() {
    let vetorNumeros = []
    let contador = 0

    for (let i = 20; i >0 ; i--) {
      if(i % 2 !== 0){
        vetorNumeros[contador] = i
        contador += 1
      
      }
      
    }
    return vetorNumeros
}
    
  
console.log(oddNumbersBackwards())    
    
function multiplesOfFiveBackwards() {
    
 let vetorNumeros = []
 let contador = 0

 for(let i = 100; i >= 5; i--){
    if(i % 5 === 0){
        vetorNumeros[contador] = i
        contador += 1
    }
 }
 return vetorNumeros
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
  let vetorNumeros = []
  let numeroQuadrado = 0
  let contador = 0
 
  
 
   for (let i = 10; i >= 1; i--) {
     numeroQuadrado = (i*i)
     
     if (numeroQuadrado/i === i){
       vetorNumeros[contador] = numeroQuadrado
        contador += 1
     }
    }
        return vetorNumeros
}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
