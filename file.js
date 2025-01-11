const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove",(event)=>{

const xPos = event.offsetX;
const yPos = event.offsetY;
const spanEl = document.createElement("span");
spanEl.style.left = xPos + "px"; //since xPos is only a number
spanEl.style.top = yPos + "px";

const size = Math.random()*100; //since rand no is between 0 and 1 we multiply by 100
spanEl.style.width =size + "px";
spanEl.style.height =size + "px"; 
//this allows for random sizes of hearts

bodyEl.appendChild(spanEl);


setTimeout(()=>{
spanEl.remove();
}, 3000); //setting time for the heart to be removed from the page

});