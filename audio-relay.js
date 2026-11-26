document.addEventListener("click",event=>{
    const clickedElement = event.target instanceof Element
        ? event.target.closest(
            "button, [role='button'], .cell, .passCell, .pieza, .piece"
        )
        : null;

    if(!clickedElement || window.parent === window){
        return;
    }

    window.parent.postMessage({
        type:"game-audio-request",
        sound:clickedElement.matches(".pieza, .piece")
            ? "object"
            : "button"
    },"*");
},true);
