const layout= document.getElementById("grid");

const caselle=100;
for(let i =1; i<=100;i++){
    const div= document.createElement("div");
    div.classList.add("square");
    div.append(i);
    div.addEventListener("click",
        function(){
            div.style.background="#7FFFD4";
        }
    )
    layout.append(div);

}