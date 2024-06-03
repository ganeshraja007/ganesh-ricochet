const clickedTIle = [];
let currentPos = null;
let MovesofTitan = [];
const Difference  = [];
for ( const x of Titan){
    
    console.log(x, "from Titan Page")
    document.getElementById(x).addEventListener('click', function(){
        
        console.log("CurrentPosition", x)
        currentPos = x;

        clickedTIle.push(currentPos);
        document.getElementById(currentPos).style.backgroundColor = "#9BC4F5";
        for( let i=-1; i<=1; i++){
        MovesofTitan.push(alpha[(alpha.indexOf(currentPos[0]))+i] + currentPos[1])
        };
        
        function arrayDiff(a, b) {
            for (let i = 0; i < a.length; i++) {
                if (b.indexOf(a[i]) === -1) {
                    Difference.push(a[i]);
                }
            } 
            return Difference;
        };
        if(document.getElementById(currentPos).innerHTML.includes('black')){
            arrayDiff(MovesofTitan, Black)
         }
         if(document.getElementById(currentPos).innerHTML.includes('white')){
            arrayDiff(MovesofTitan, White)
         }
       
        if(Difference.length >3){
          
            // document.getElementById(Document[0]).removeAttribute('style');
            Difference.length = 0;
        }
        console.log(Difference)
        if(clickedTIle.lenth>1){
            document.getElementById(clickedTIle[0]).removeAttribute('style')
            clickedTIle =[];
        }
        if(MovesofTitan.length>3){
            console.log("Moves Exceed")
            MovesofTitan = [];
        }
        console.log(clickedTIle);
        console.log(MovesofTitan);
        for(const x of Difference){
            document.getElementById(x).style.backgroundColor = "#9BC4F5";
         }
           
    })
}
