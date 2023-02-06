const options=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let current_color;
let clickMe=document.getElementById("changeColor");
clickMe.addEventListener("click",changeColor);

function changeColor(){
    current_color="#";
    for (let index = 0; index < 6; index++) {
        let i=Math.floor(Math.random()*16);
        current_color+=options[i];
    }
    document.querySelector(".current_color").textContent="background color : "+current_color;
    document.querySelector("#main").style.backgroundColor=current_color;    
}




