function calculimc(){
    let size = document.getElementById("size").value;
    let weight = document.getElementById("weight").value;  
    let advise = document.getElementById("advise");
    let imc=weight /(size*size);
    document.getElementById("result").innerHTML = imc;
    if ( imc<18.5 ){
        advise.textContent ='vous ête en inssufisance pondérale!!!';
        
        advise.style.color = 'red' ;
  }
  else if ( imc<25 ){
    advise.textContent ='vous avez une corpulance normale';
    advise.style.background = 'red';
    advise.style.color = 'white';
}

 else if ( imc<30 ){
        advise.textContent ='vous ête en surpoids';
        advise.style.background = 'red';
        advise.style.color = 'white' ;
  }
   else if ( imc<35 ){
    advise.textContent ='vous ête en obesité moderer';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
else if ( imc<40 ){
    advise.textContent ='vous ête en obesité sevère';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
else if ( imc>40 ){
    advise.textContent ='vous ête en obesité morbide ou massive';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
}
