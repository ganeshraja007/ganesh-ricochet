const arrayoftank = [];
//default tank position
arrayoftank.push(document.getElementById("e2"));
arrayoftank.push(document.getElementById("d7"));



for (const i of arrayoftank){
    
    i.addEventListener("click",()=>{
        console.log(i)

        const ClickedElements = i
        const currentId = i.getAttribute("id");
        // console.log(currentId);
    //  var currentID = i.getAttribute("id");
    //  console.log(currentID);
    let change = parseInt(currentId[1]);
    console.log(change)
     
     const addCircleToELements = [];
    if(currentId =="e2"){
        for (let i=0; i<1; i++){
            change+=1
            addCircleToELements.push(document.getElementById(currentId[0]+change));
         }
    }else{
        change = change -1
        addCircleToELements.push(document.getElementById(currentId[0]+change))
    }
     console.log(addCircleToELements)
     highlightCircle(addCircleToELements, ClickedElements);
    //  if(currentID == "e2"){
    //     console.log("It is white tank")
    //     let changeWhite = parseInt(currentID[1]);
     
    //  for(let i =0; i<1; i++){
    //      changeWhite += 1;
    //      tanksquare.push(document.getElementById(currentID[0]+changeWhite)); 
    //  }
        
    //  }else{
    //     console.log("It is Black Tank")
    //     let changeBlack = parseInt(currentID[1]);
    //     changeBlack = changeBlack-1
    //     tanksquare.push(document.getElementById(currentID[0]+changeBlack))

    //  }
    
    // console.log(tanksquare)
    //  highlight(tanksquare, clickElements);
     
    });
}
const insertedCircle = [];

const highlightCircle = function(attatchCircles, ClickedElements){
if (insertedCircle.length !=0){
    removeMyCircle(insertedCircle);
}
attatchCircles.forEach((i)=>{

i.addEventListener("click", function(){
   
    i.innerHTML = ClickedElements.innerHTML;
   
    
    
    ClickedElements.innerHTML ="";
});
i.innerHTML = '<div class ="circle"></div>';
insertedCircle.push(i);
});
};

const removeMyCircle = function(removalArray){
    removalArray.forEach((i)=>{
        i.innerHTML = "";
       })
}

