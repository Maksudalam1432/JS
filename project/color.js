
let random=document.querySelector(".ir")
let apply=document.querySelector(".ir2")
let input=document.querySelector("input")

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "gold",
  "silver"
];

const randomcolor=()=>{
    const ans=Math.floor((Math.random()*colors.length))
    return colors[ans]
}   
randomcolor()
 
const randombtn=()=>{
    let md=randomcolor()
    changecolor(md)
    
}

let body=document.querySelector("body")
 const changecolor=(color)=>{
     body.style.backgroundColor=color
 }

function inputdata(){
}   
 function btn(){
    changecolor(input.value)
 }
changecolor("green")

input.addEventListener("input",inputdata)
apply.addEventListener("click",btn)
random.addEventListener("click",randombtn)
