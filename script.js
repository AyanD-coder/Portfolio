let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let result= document.querySelector("#res")
let msg= document.querySelector(".msg")
let turnO = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [1,4,7],
    [0,3,6],
];


const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
      
    }
}

const enable = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText="";
       
    }
}

const resetgame = ()=>{
 turnO = true;
enable();
msg.classList.add("hide");
showturn(); 



}

const tie = ()=>{
    result.innerText = `Its a tie!`;
    msg.classList.remove("hide");
    disable();
    }

const showwinner = (winner)=>{
res.innerText = `Congratulations, Winner is ${winner}`;
msg.classList.remove("hide");
disable();

}
 const showturn = ()=>{
    if(turnO){
        msg.classList.remove("hide");
result.innerText = `Turn : O`
result.style.backgroundColor ="purple";
 
}
else{
    msg.classList.remove("hide");
    result.innerText = `Turn : X` 
    result.style.backgroundColor="red"
}
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
      

     if(turnO){
        box.innerText = "O";
        box.style.color = "purple";
        turnO = false;
     }else{
        box.innerText = "X";
        box.style.color = "red";
        turnO = true;
     }
     box.disabled = true;

     checkwinner();
    });
});


const checkwinner =  () => {
  
    let winner = null;
    for (pattern of winpattern){
       
            let pos1= boxes[pattern[0]].innerText;
            let pos2= boxes[pattern[1]].innerText;
            let pos3= boxes[pattern[2]].innerText;
          
        
            if(pos1 !="" && pos2 != "" && pos3 !=""){
                if(pos1==pos2 && pos2==pos3){
                   
                    showwinner(pos1);
                    winner = pos1;
                }
            }
    }
    let fill=true;
    for(let box of boxes){
    if(box.innerHTML ==""){
        fill=false;
        break;
    }}
    if (!winner && fill) {
        tie();
       
    }
    if (winner === "O") {
        result.style.backgroundColor = "purple";
    } else if (winner === "X") {
        result.style.backgroundColor = "red";
    } else if (!winner && fill) {
        result.style.backgroundColor = "blue";
    }
    else{
        
            showturn(); // ✅ Show current turn if the game isn't over
        
    }
    
}


newbtn.addEventListener("click", resetgame );
resetbtn.addEventListener("click", resetgame );
showturn(); 