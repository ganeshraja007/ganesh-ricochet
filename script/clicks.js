const allsquares = document.getElementsByClassName('square');

const clickElements =[];

const semiricochets = [];
for(const x of allsquares){
    x.addEventListener('click', function(){
    console.log(x);
   
    const idofElement =  x.getAttribute("id");
    console.log(idofElement);
   
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
   
    const ricochets = [];
   const innerhtmlofElement =  document.getElementById(idofElement).innerHTML;
  

   if(clickElements.length>0){
    clickElements[0].removeAttribute('style');
    clickElements.length=0;
   
        }
   if(innerhtmlofElement.includes('black') || (innerhtmlofElement.includes('white'))){
   
    console.log("It is White");
   
    document.getElementById(idofElement).style.backgroundColor = "#90EE90";
    
    clickElements.push(x);
   }

   //Ricochet Movment
   

    });
  

}

// for (const x of allsquares){

// }

