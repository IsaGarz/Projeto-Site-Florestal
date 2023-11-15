import "../styles/navBar.css";
import Logo from "../img/NavBar/logo.png";


export default function(){
    return <>
        <header>
            <nav class="container-links-nav">
                <img src={Logo} alt="" class="logo"/>
                <ul class="links">
                    <li>Início</li>
                    <li>
                        <hr class="margem-links"/>
                    </li>                    
                    <li>Pesquisas</li>
                    <li>
                        <hr class="margem-links"/>
                    </li>
                    <li>Projetos</li>
                    <li>
                        <hr class="margem-links"/>
                    </li>
                    <li>Prêmios e títulos</li>
                    <li>
                        <hr class="margem-links"/>
                    </li>
                    <li>Trabalhos e artigos</li>
                </ul>
            </nav>
            <button class="botao-mobile" onclick="mostrarLinks()">⋮</button>
        </header>
    </>
} 