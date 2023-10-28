function mostrarLinks(classe) {
    const links = document.querySelector(".links-paginas");
    const estado= links.style.display;
    links.style.display = estado === "none" ? "block" : "none";
    
}