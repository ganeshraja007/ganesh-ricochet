//Coins Classifications

const coins = document.getElementsByClassName('square');
// console.log(coins)
const allcoins = [];
const ClickedEL = [];
const White = []
const Black = []
const Ricochet = [];
const SemiRicochets = [];
const Titan = [];
const Tank = []
const Canon = []
var MovedSquare = []
var  PossiblePosCanon = [];
let PossiblePosRico = [];
const PossiblePosSemiRico = [];
let PossiblePosTank = [];
let PossibleTitan = [];
var CurrentLoc = 0;
var NewLoc = 0;


const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

for (const x of coins){
    allcoins.push(x.getAttribute('id'));
    }

for(const x of allcoins){
    if(document.getElementById(x).innerHTML.includes('black')){
    Black.push(x)
    }
    if(document.getElementById(x).innerHTML.includes('white')){
        White.push(x)
        }
    if(document.getElementById(x).innerHTML.includes('ricochet')){
    Ricochet.push(x);
    }
    if(document.getElementById(x).innerHTML.includes('semi')){
        SemiRicochets.push(x);
        }
    if(document.getElementById(x).innerHTML.includes('titan')){
            Titan.push(x);
     }
     if(document.getElementById(x).innerHTML.includes('tank')){
        Tank.push(x);

 }
 if(document.getElementById(x).innerHTML.includes('canon')){
    Canon.push(x);

}

 
}



// Ricochet Law
for(const i of Ricochet){
   document.getElementById(i).addEventListener("click", function(){
    CurrentLoc = i
    console.log("Current Location",CurrentLoc)

    
    const movedSquare = [];
    const newAlpha = [];
 
    for( j=-1; j<=1; j++){
        newAlpha.push(alpha[alpha.indexOf(i[0])+j]);
      
    }
    for (const x of newAlpha){
        for(k=-1; k<=1; k++){
            PossiblePosRico.push(x+(parseInt(CurrentLoc[1])+k))
        }
    }
    // if(PossiblePosRico.includes(CurrentPos)){
    //     PossiblePosRico.filter(item => item !== CurrentPos)
    //     console.log("Hi")
    // }
    console.log(PossiblePosRico)
    var  NewRico = PossiblePosRico.filter(item => !(Black.concat(White)).includes(item));
    console.log(NewRico)
     for (const x of NewRico){
        document.getElementById(x).style.backgroundColor = "#9BC4F5";
        document.getElementById(x).addEventListener('click', function(){
        
           document.getElementById(x).innerHTML = document.getElementById(CurrentLoc).innerHTML;
           document.getElementById(CurrentLoc).innerHTML = "";
           CurrentLoc = x;
          
           console.log(NewRico, "After Click")
          
           for(const i of movedSquare){
            document.getElementById(i).removeAttribute('style');
           }
           console.log("New Location", CurrentLoc)
           movedSquare.push(x)
           console.log(movedSquare, "moved Square")
           toggle(x);
    
        })
       
      }
      
    
    

})
}


//Canon Movement
for (const x of Canon){
    document.getElementById(x).addEventListener('click',function(){
        CurrentLoc = x;
        console.log(CurrentLoc);
    
        for( let i=-1; i<=1; i++){
        PossiblePosCanon.push(alpha[(alpha.indexOf(x[0]))+i] + x[1])
        
    } 
    console.log(PossiblePosCanon.splice(PossiblePosCanon.indexOf(CurrentLoc)))
    console.log(CurrentLoc)
    
    // const NewEL = PossiblePosCanon.filter(item => !Titan.includes(item)) && PossiblePosCanon.filter(item => item !== CurrentLoc);
    console.log(PossiblePosCanon)
   
     for(const x of PossiblePosCanon){
        
        document.getElementById(x).addEventListener('click', function(){
        NewLoc = x;
        document.getElementById(x).innerHTML = document.getElementById(CurrentLoc).innerHTML;
        document.getElementById(CurrentLoc).innerHTML = "";
       
        
        CurrentLoc = NewLoc;
        console.log(CurrentLoc)
        let t = parseInt(CurrentLoc[1])
        
        var BulletPath = [];
        if(document.getElementById(CurrentLoc).innerHTML.includes('white')){
            for(i=0; i<8; i++){
                console.log(CurrentLoc[0]+(parseInt(CurrentLoc[1])+i));
                BulletPath.push(CurrentLoc[0]+(parseInt(CurrentLoc[1])+i));
            }
        }else{
            for(i=0; i<8; i++){
                console.log(CurrentLoc[0]+(parseInt(CurrentLoc[1])-i));
                BulletPath.push(CurrentLoc[0]+(parseInt(CurrentLoc[1])-i));
            }
        }
        
        BulletPath.shift();
        console.log(BulletPath.length)
        console.log(BulletPath)
    
        var Bulletinserted = [];
        const delay = 100;
        console.log(CurrentLoc)


        var intervalId = setInterval(function() {
            console.log(BulletPath,"Before");
            
            console.log(BulletPath.length);
            createCircle(BulletPath[0]);
            Bulletinserted.push(BulletPath[0]);
            BulletPath.shift();
            console.log(BulletPath, "After")
            console.log(Bulletinserted);
            setTimeout(function(){
                console.log(Bulletinserted)
                console.log(document.getElementById(Bulletinserted[0]))
                document.getElementById(Bulletinserted[0]).innerHTML="";
                Bulletinserted.shift()
                // document.getElementById(Bulletinserted[0])
            },200)
            
              if (BulletPath.length == 0) {
                console.log("Bullet");
                clearInterval(intervalId); 
            }
            
            
        }, delay);
        
        
       
        for(const i of MovedSquare){
            document.getElementById(i).removeAttribute('style');
           }
        })
        
  
    
    // console.log(MovedSquare)
   
    }
    MovedSquare.push(x);

    console.log(PossiblePosCanon)
    console.log(PossiblePosCanon.filter(item => item !== CurrentLoc));

   
 
    for (const x of PossiblePosCanon){
        document.getElementById(x).style.backgroundColor = "#90EE90"
        
    }
})
PossiblePosCanon.filter(item => item !== CurrentLoc)
}

//Titan Law
// let result = [];
// for(const x of Titan){
//  document.getElementById(x).addEventListener('click', function(){
//     CurrentLoc = x;
//     ClickedEL.push(x);
//     console.log(CurrentLoc)
//     console.log(ClickedEL);
//     if(ClickedEL.length = 2){
//         ClickedEL[0];
//     }
//     console.log(ClickedEL);
//     for( let i=-1; i<=1; i++){
//         PossibleTitan.push(alpha[(alpha.indexOf(x[0]))+i] + x[1])
        
//     }
  
//     PossibleTitan.splice(PossibleTitan.indexOf(CurrentLoc), 1);
//     for(const i of PossibleTitan){
//         if(!allColr.includes(i)){
//          result.push(i)
//         }
//     }
//     if(PossibleTitan.length >3){
//         PossibleTitan = [];
//     }
//     console.log(result)
    
//     for(const x of result){
//         document.getElementById(x).addEventListener('click', function(){
//         document.getElementById(x).innerHTML = document.getElementById(CurrentLoc).innerHTML;
//         document.getElementById(CurrentLoc).innerHTML = "";
//         for(const i of MovedSquare){
//             document.getElementById(i).removeAttribute('style');
//            }
//         })
//         for (const x of result){
//             document.getElementById(x).style.backgroundColor = "#90EE90"
            
//         result.length = 0;
//         }
   
//      NewLoc = x
//     }
    
//    CurrentLoc = NewLoc

//  })
// }
//SemiRicochets Law
for ( const i of SemiRicochets){
    document.getElementById(i).addEventListener('click', function(){
        let CurrentPos = i
        console.log(i)
    
    const newAlpha = [];
    
    for( j=-1; j<=1; j++){
        newAlpha.push(alpha[alpha.indexOf(i[0])+j]);
       
        
    }
    for (const x of newAlpha){
        for(k=-1; k<=1; k++){
            PossiblePosSemiRico.push(x+(parseInt(CurrentPos[1])+k))
        }
    }
    const newSemiRi = PossiblePosSemiRico.filter(item => !(Black.concat(White)).includes(item));
    for (const x of newSemiRi){
        document.getElementById(x).style.backgroundColor = "#9BC4F5";
        document.getElementById(x).addEventListener('click', function(){
           console.log(x);
           document.getElementById(x).innerHTML = document.getElementById(CurrentPos).innerHTML;
           document.getElementById(CurrentPos).innerHTML = "";
           for(const i of MovedSquare){
            document.getElementById(i).removeAttribute('style');
           }
           
        })
        MovedSquare.push(x)
      }
    })
}

//Tank Laws
for ( const i of Tank){
    document.getElementById(i).addEventListener('click', function(){
        let CurrentPos = i
        console.log(i)
    
    const newAlpha = [];
    
    for( j=-1; j<=1; j++){
        newAlpha.push(alpha[alpha.indexOf(i[0])+j]);
       
    }
    for (const x of newAlpha){
        for(k=-1; k<=1; k++){
            PossiblePosTank.push(x+(parseInt(CurrentPos[1])+k))
        }
    }
    const NewTank = PossiblePosTank.filter(item => !(Black.concat(White)).includes(item));
    for (const x of NewTank){
        document.getElementById(x).style.backgroundColor = "#9BC4F5";
        document.getElementById(x).addEventListener('click', function(){
           console.log(x);
           document.getElementById(x).innerHTML = document.getElementById(CurrentPos).innerHTML;
           document.getElementById(CurrentPos).innerHTML = "";
           for(const i of MovedSquare){
            document.getElementById(i).removeAttribute('style');
           }
           
        })
        MovedSquare.push(x)
      }
    })
}

const bullet = function(){
let circle = document.createElement('div');
document.body.appendChild(circle)
}
const speed = 5;


function createCircle(circleID){
    var div = document.createElement('div')
    div.className = 'circle';
    document.getElementById(circleID).appendChild(div);
    
    return div;
    
}

function removeCircle(circleID){
    if(document.getElementById(circleID).innerHTML.includes('circle')){
    document.getElementById(circleID).innerHTML ="";
    console.log("Remove Circle Works")
    }
       
    
}

// var Titanways = [];
// let isHighlighted = false;
// let currentElementId = null;
// let currentElementInnerHTML = null;
// for (const tileID of Titan){
//     document.getElementById(tileID).addEventListener('click', function clickHandler(){
//         console.log("Function Working")
//         // clearHighlightedTiles();
//         if (!isHighlighted) {
//             highlightMoves(tileID);
//             isHighlighted = true;
//             currentElementId = tileID;
//             currentElementInnerHTML = this.innerHTML;
//         }
//         else {
//             if(currentElementId === tileID){
//                 clearHighlightedTiles();
//                 highlightMoves(tileID);
//             }
           
           
//         }
//         // this.removeEventListener('click', clickHandler);

      
//     });
// }

// function highlightMoves(tileID){
//     clearHighlightedTiles();
//     const PossibleTiles = [];
//     for( let i=-1; i<=1; i++){
//         PossibleTiles.push(alpha[(alpha.indexOf(tileID[0]))+i] + tileID[1])
//     };
//     PossibleTiles.shift();
//     console.log(PossibleTiles);
//     for(const move of PossibleTiles){
//     const newTileId = move;
//     const newTile = document.getElementById(newTileId);
//     if(newTile){
//         newTile.style.backgroundColor = "yellow";
//         newTile.addEventListener('click', titleClickHandler);
//     }
//     }
// }

// function moveElement(currentTileId, newTileId){
//     const currentTile = document.getElementById(currentTileId);
//     const newTile = document.getElementById(newTileId);
//     console.log(currentTile, newTile);
//     if(newTile.innerHTML == ''){
//         newTile.innerHTML = currentElementInnerHTML;
//         currentTile.innerHTML = '';
//         clearHighlightedTiles();
//         isHighlighted = false;
//         currentElementId = null;
//         currentElementInnerHTML = null;
//     }
//     // newTile.innerHTML = currentTile.innerHTML;
//     // currentTile.innerHTML ='';
//     // clearHighlightedTiles();
//     // newTile.addEventListener('click', function(){
//     //     highlightMoves(newTileId);
//     // })

// }

// function clearHighlightedTiles(){
//     for(const tileId of Titan){
//         const tile = document.getElementById(tileId);
//        if(tile){
//         tile.style.backgroundColor="";
//         tile.removeEventListener('click', titleClickHandler);
//        }
//     }
// }

// function titleClickHandler(event){
//     const targetTileId = event.target.id;
//     if(targetTileId !== currentElementId){
//         moveElement(currentElementId, targetTileId);
//     }

// }

function toggle(idof){
    const toggleDislay1 = document.getElementById('toggle');
    const toggleDislay2 = document.getElementById('toggle2');
    if(document.getElementById(idof).innerHTML.includes('white')){
        toggleDislay1.innerHTML = "Black's Turn"
        toggleDislay2.innerHTML = "Black's Turn"
        clearInterval(int1);
        PauseTimer2();
        console.log("Its Working")
    }
    if(document.getElementById(idof).innerHTML.includes('black')){
        toggleDislay1.innerHTML = "White's Turn"
        toggleDislay2.innerHTML = "White's Turn"
        clearInterval(int2)
        PauseTimer2();

        
    }
}