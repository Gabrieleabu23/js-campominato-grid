
let caselle;
const layout= document.createElement("div");
const contenitoreGenerale= document.getElementById("main_container");
function start_game(){
    
    // ASSOCIO LA DIFFICOLTÀ ALLA COSTANTE DIFFICOLTA PER OTTENERE IL VALORE
    const difficolta= parseInt(document.getElementById("opzioni_difficolta").value);
    // DEBUG DIFFICOLTA PER VISUALIZZARE IL CORRETTO FUNZIONAMENTO
    console.log(difficolta)
    layout.innerHTML=" ";
    layout.classList.add("grid");  
    contenitoreGenerale.append(layout);
    contenitoreGenerale.classList.add("pt-4","pb-4");
    document.querySelector("footer").classList.remove("position-fixed");
    caselle= numeroCaselle(difficolta,caselle);
    for(let i=1; i<=caselle;i++){
        const div= generateElements("div","square",difficolta);
        div.append(i);
        onlick_azzurrino(div,i);
        layout.append(div);
    
    }
}

function numeroCaselle(difficolta,caselle){
    if(difficolta === 0){
        caselle=100;
    }
    else if(difficolta === 1){
        caselle=81;
    }else if( difficolta ===2){
        caselle=49;
    }
    return caselle;
}



// FUNZIONE CHE GENERA I DIV CON QUALSIASI CLASSE .

function generateElements(tagtype,classname,difficolta){
    const currentElement= document.createElement(tagtype);
    currentElement.classList.add(typeSquare(difficolta,classname));
    return currentElement;
}

function typeSquare(difficolta,classname){
    if(difficolta === 0){
        classname= "square";
    }
    else if(difficolta === 1){
        classname= "square_medio";
    }else if( difficolta ===2){
        classname= "square_difficile";
    }
    return classname;
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