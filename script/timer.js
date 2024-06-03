document.getElementById('undo').addEventListener('click',()=>{
    alert('Sorry Undo function yet to Program')
} )

const Totalminutes = 10;
let totalseconds1 = Totalminutes*60;
let totalseconds2 = Totalminutes*60;
const timer1 = document.getElementById('counter1');
const timer2 = document.getElementById('counter2')
let int1 =null;
let int2 = null;

function PauseTimer1(){
    if(int1 !== null){
    clearInterval(int1);
 }
 int1 = setInterval(Timer1, 1000)
}
function PauseTimer2(){
    if(int2 !== null){
    clearInterval(int2);
 }
 int2 = setInterval(Timer2, 1000)
}


function Timer1(){
    var minutes = Math.floor(totalseconds2/60);
    var seconds = totalseconds2 % 60;
   
   

    if(seconds<10){

        seconds = "0"+seconds
    }
    if(totalseconds1<=0){
        timer1.innerHTML = "00:00:00"
        clearInterval(int1);
        
    }
    timer1.innerHTML = "00:" + "0"+minutes+":" +seconds;
    totalseconds2--;
}

function Timer2(){
    var minutes = Math.floor(totalseconds2/60);
    var seconds = totalseconds2 % 60;

    if(seconds<10){

        seconds = "0"+seconds
    }
    if(totalseconds2<=0){
        timer2.innerHTML = "00:00:00"
        clearInterval(Interval2);
        
    }
    timer2.innerHTML = "00:" + "0"+minutes+":" +seconds;
    totalseconds2--;
}




//Selection 
const arrayOfFiles = document.querySelectorAll('.column');
const fileNameArray = ["a","b","c", "d", "e", "f", "g", "h"];

let fileNumber = 0;
for(const i of arrayOfFiles){
    
    let counter = 1;

    for(const el of i.children ){
    
       var peices = el.setAttribute("id", fileNameArray[fileNumber]+counter);
        counter++;
      
        
        
    }
    fileNumber++;
}



