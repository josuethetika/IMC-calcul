function calculimc(){
    let size = document.getElementById("size").value;
    let weight = document.getElementById("weight").value;  
    let advise = document.getElementById("advise");
    document.getElementById("result").innerHTML = weight /(size*size);
    if ( weight /(size*size)<18.5 ){
        advise.textContent ='vous ête en inssufisance pondérale';
        advise.style.background = 'red';
        advise.style.color = 'white' ;
  }
  else if ( weight /(size*size)<25 ){
    advise.textContent ='vous avez une corpulance normale';
    advise.style.background = 'red';
    advise.style.color = 'white';
}

 else if ( weight /(size*size)<30 ){
        advise.textContent ='vous ête en surpoids';
        advise.style.background = 'red';
        advise.style.color = 'white' ;
  }
   else if ( weight /(size*size)<35 ){
    advise.textContent ='vous ête en obesité moderer';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
else if ( weight /(size*size)<40 ){
    advise.textContent ='vous ête en obesité sevère';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
else if ( weight /(size*size)>40 ){
    advise.textContent ='vous ête en obesité morbide ou massive';
    advise.style.background = 'red';
    advise.style.color = 'white' ;
}
}