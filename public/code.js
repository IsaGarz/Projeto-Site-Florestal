const links = document.querySelector(".links-paginas");
const cor = links.style.getPropertyValue("display");

if(cor==style.display("flex")){
    console.log("Oi");
}else{
    console.log("tchau");
    console.log(cor);
}



function mostrarLinks(classe) {



    const estado= links.style.display;
    links.style.display = estado === "none" ? "block" : "none"; 
}