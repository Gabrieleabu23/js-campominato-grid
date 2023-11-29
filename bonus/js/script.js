
const caselle=100;
const layout= document.createElement("div");
const contenitoreGenerale= document.getElementById("main_container");
function start_game(){
    
    // ASSOCIO LA DIFFICOLTÀ ALLA COSTANTE DIFFICOLTA PER OTTENERE IL VALORE
    const difficolta= parseInt(document.getElementById("opzioni_difficolta").value);
    // DEBUG DIFFICOLTA PER VISUALIZZARE IL CORRETTO FUNZIONAMENTO
    // console.log(difficolta)
    layout.innerHTML=" ";
    layout.classList.add("grid");  
    contenitoreGenerale.append(layout);
    contenitoreGenerale.classList.add("pt-4","pb-4");
    document.querySelector("footer").classList.remove("position-fixed");
    for(let i=1; i<=caselle;i++){
        const div= generateElements("div","square");
        div.append(i);
        onlick_azzurrino(div,i);
        layout.append(div);
    
    }
}


// FUNZIONE CHE GENERA I DIV CON QUALSIASI CLASSE .

function generateElements(tagtype,classname){
    const currentElement= document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
}

// FUNZIONE CHE QUANDO CLICCHI IL COLORE DIVENTA AZZURRINO

function onlick_azzurrino(div,i) {
    div.addEventListener("click",
        function(){
            div.classList.add("clicked");
            console.log("Cella cliccata: ",i);
        }
    )
  }