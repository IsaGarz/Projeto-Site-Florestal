import imgPerfil1 from "../img/main/perfil1.jpg"
import imgPerfil2 from "../img/main/perfil2.jpg"
import "../styles/style.css";

export default function(){
    return <>
        <main>  
            <section class="apresentacao">
                <div class="carrossel-container">
                    <div class="carrossel-imagens">
                        <img src={imgPerfil1} alt="" class="fotoPerfil"/>
                        <img src={imgPerfil2} alt="" class="fotoPerfil"/>
                    </div>
                </div>
            
                <div class="texto-apresentacao">
                    <h1>
                        Olá, tudo bem?
                    </h1>
                    <p>
                        Meu nome é Gilmara de Oliveira Machado e atualmente sou professora Associado A na Universidade Estadual do Centro-Oeste (UNICENTRO), 
                        no departamento de Engenharia Florestal. Possuo graduação (1997) em Ciências Exatas habilitação em Química, mestrado (2000) e 
                        doutorado (2004) na área de Ciências e Engenharia de Materiais. Na pesquisa de mestrado e doutorado atuei principalmente nos seguintes temas: 
                        modificação química de derivados de celulose, eletrólitos sólidos poliméricos a base de polissacarídeos e caracterização física e química de filmes 
                        condutores e seus componentes. Ambas as pesquisas - de mestrado e doutorado - foram desenvolvidas no Laboratório de Físico-Química Orgânica do Instituto 
                        de Química de São Carlos (IQSC). Nesta mesma área realizei estágio de doutorado na Université Laval no centro de estudo e pesquisa de macromoléculas 
                        CERSIM (Centre de Recherche en Sciences et Ingénierie des Macromolécules), Quebec/Canadá em 2003. 
                    </p>
                    <br/>
                    <p>
                        De 2004 a 2007 realizei pesquisa de pós doutorado no Laboratório de Madeiras e Estrutura de Madeiras (LaMEM), 
                        na Escola de Engenharia de São Carlos (EESC) também na USP. No pós-doutorado atuei principalmente na área de preservação de madeira 
                        tendo realizado estágio de pós-doutorado no CSIRO (Commonwealth Scientific and Industrial Research Organization) em Melbourne/Austrália 
                        em 2006. Em 2010 passei a ser docente permanente do Programa de Pós-Graduação Stricto Sensu em Ciências Florestais atuando nesta área 
                        até julho de 2011. Em 2014 passei a ser docente permanente do Programa de Pós-Graduação Stricto Sensu em Bioenergia, na linha de Pesquisa 
                        Geração e Caracterização de Matéria-Prima, na área de Concentração de Biocombustíveis e Energias Renováveis, finalizando a minha participação 
                        em 2022. No presente momento, me encontro em Licença Sabática no grupo do Prof. Dr. Pedro Henrique Santin Brancalion, USP - ESALQ, no 
                        departamento de Ciências Florestais, na área de Tecnologia da Madeira e recursos Florestais, sob o título Avaliando a dimensão fractal da 
                        floresta Amazônica por meio de simulação e sensoriamento remoto LiDAR aerotransportado (Light Detection and Ranging) para a estimativa de 
                        Biomassa e estoque de carbono, com início em 15 de maio de 2023 a 14 de maio de 2024, período de doze meses. 
                    </p>
                </div>
            </section>
            
            <section class="livro-container">
                <h2>
                    Livro Publicado
                </h2>
                <h3>
                    Química da Madeira no Contexto Energético
                </h3>
                <p>
                Este livro apresenta a fundamentação teórica de Química da Madeira no Contexto Energético, bem como 
                vários exemplos de projetos, dimensionamento e detalhes construtivos de fogões à lenha, produzidos 
                com materiais de fácil acesso, seguindo os princípios da tecnologia de fogões “Rocket Stove”. 
                </p>
            </section>
        </main>
    </>

}