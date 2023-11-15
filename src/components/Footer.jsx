import linkedin from "../img/Footer/linkedin.png";
import unicentro from "../img/Footer/unicentro.png";
import lattes from "../img/Footer/lattes.png";

import "../styles/footer.css";


export default function(){
    return <>
        <details>
            Endereço: Universidade Estadual do Centro-Oeste, Departamento de Engenharia Florestal. PR 153 Km 7,  
            Riozinho, 84500000 - Irati, PR - Brasil Contato: (42) 34213088 
        </details>
        <footer>
            <section class="footer-content">
                <section>
                    <p>
                        Redes sociais: 
                    </p>
                </section>

                <section class="links-footer">
                    <a href="#"><img src={linkedin} class="social-link" alt/></a>
                    <a href="#"><img src={lattes} class="social-link" alt/></a>
                    <a href="#"><img src={unicentro} class="social-link" alt/></a>
                    
                </section>
            </section>
        </footer>
    </>
}