import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/miltomm-morro-4887986_12801.png'
import './App.css'

function App() {

  return (
    <>
      <header class="navbar">
        <div class="nav-container">

          <div class="logo">
            <img src="logo.png" alt="Logo" />
          </div>

          <nav class="nav-menu">
            <a href="#" class="active">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Produtos</a>
            <a href="#">Contatos</a>
          </nav>

        </div>
      </header>
      <div >

        <section class="hero">
          <div class="overlay"></div>

          <div class="hero-content">
            <h1>
              Produzido na<br />
              nossa terra
              <span>para nossa gente</span>
            </h1>

            <p>
              Levando o melhor do campo cearense para a sua mesa com respeito à natureza
              e dedicação em cada detalhe
            </p>

            <div class="hero-buttons">
              <a href="#" class="btn primary">NOSSOS PRODUTOS</a>
              <a href="#" class="btn secondary">NOSSA HISTÓRIA</a>
            </div>
          </div>
        </section>
        <section class="section-produto">
          <div class="container">

            <div class="produto-grid">

              <div class="produto-img">
                <img src="ovo-caipira.jpg" alt="Ovo caipira" />
              </div>

              <div class="produto-texto">
                <span class="tag">PRODUÇÃO DIÁRIA</span>

                <h2>
                  Ovo caipira<br />
                  <span>TRADIÇÃO</span>
                </h2>

                <p>
                  A essência da nossa granja em cada bandeja. Nossos ovos tradicionais vêm de aves que desfrutam do clima generoso de Palhano, resultando em um alimento nutritivo e com o sabor autêntico da roça que sua família merece.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section class="section-card">
          <div class="container">

            <div class="card-destaque">

              <div class="card-grid">

                <div class="card-texto">
                  <span class="tag">ORGULHO DE PALHANO</span>

                  <h2>
                    Nosso Ovo<br />
                    <span>Caipira Premium</span>
                  </h2>

                  <p>
                    A granja mais antiga, o frescor de quem colhe todos os dias e o sabor inconfundível de aves criadas com liberdade.
                  </p>
                </div>

                <div class="card-3d">
                  <div class="mock-3d">3D</div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <section class="section-heranca">
          <div class="container">

            <div class="heranca-grid">


              <div class="heranca-texto">
                <h2>Nossa Herança</h2>
                <p>
                  Fundada em 2019 na localidade do Salgadinho, em Palhano, a Agroriopalhano nasceu da inspiração de uma ligação única entre terra e água.
                </p>
                <p>
                  Nosso  nome é uma homenagem direta ao Rio Palhano, que banha nossas terras e  corta a cidade, sendo nossa fonte constante de fertilidade e inspiração.
                </p>
                <p>

                  Iniciamos nossa jornada na avicultura de postura comercial focados na produção autêntica de ovos caipiras. Desde então, mantemos um propósito inabalável: proporcionar dignidade  às pessoas da terra, destacando suas habilidades e contribuindo  ativamente para o desenvolvimento sustentável de toda a região.
                </p>
                <p>
                  Nossa identidade visual reflete essa alma. As  linhas sinuosas da nossa logo remetem ao curso do rio e ao movimento  contínuo da vida no campo. Nossas cores contam nossa história: o Verde representa a natureza e a esperança; o Azul, a confiabilidade e a fé.
                </p>
                <p>

                  Juntos, eles ressaltam a ordem proveniente da  unidade entre terra e água — a base fundamental de tudo o que  desenvolvemos.
                </p>
                <p>
                  Trabalhamos pelo futuro próspero de Palhano,  respeitando nossos recursos naturais e cultivando raízes profundas.  Somos uma marca que une funcionalidade e emoção, reforçando que o amanhã se constrói hoje, com o trabalho sério da nossa gente.
                </p>

                <h3>Em memória de Frank Souto Maior</h3>
              </div>


              <div class="heranca-visual">

                <div class="card-verde"></div>

                <div class="card-branco">
                  <div>
                    <strong>VERDE</strong>
                    <span>Natureza & Crescimento</span>
                  </div>

                  <div>
                    <strong>AZUL</strong>
                    <span>Confiança & Fé</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <section class="section-contato">
          <div class="container">

            <div class="contato-grid">

              <div class="contato-info">
                <h2>Fale com a<br /> Nossa Granja</h2>

                <p>
                  Estamos localizados no coração de Palhano. Atendemos pedidos locais e parcerias iniciais.
                </p>

                <div class="info-item">
                  <span>WHATSAPP</span>
                  <strong>(85) 9-9999-9999</strong>
                </div>

                <div class="info-item">
                  <span>LOCALIZAÇÃO</span>
                  <strong>Sítio Salgadinho, Palhano - CE</strong>
                </div>
              </div>

              <div class="contato-form">
                <form>

                  <div class="form-row">
                    <input type="text" placeholder="NOME" />
                    <input type="text" placeholder="CIDADE" />
                  </div>

                  <input type="email" placeholder="E-MAIL" />

                  <textarea placeholder="MENSAGEM"></textarea>

                  <button type="submit">ENVIAR MENSAGEM</button>

                </form>
              </div>

            </div>

          </div>
        </section>
        <section class="section-equipe">
          <div class="container">

            <div class="section-header">
              <span>QUEM FAZ ACONTECER</span>
              <h2>Nossa Equipe</h2>
              <p>
                Unindo o conhecimento tradicional com as melhores práticas para garantir a qualidade que chega à sua mesa.
              </p>
            </div>

            <div class="equipe-grid">

              <div class="card-equipe">
                <h3>Logística</h3>
                <p>
                  Garantindo que a colheita do dia chegue fresca e segura em cada ponto de entrega da região.
                </p>
              </div>

              <div class="card-equipe">
                <h3>Produção</h3>
                <p>
                  O coração da nossa granja. Manejo humanizado e cuidado diário com nossas aves e colheita.
                </p>
              </div>

              <div class="card-equipe">
                <h3>Administrativo</h3>
                <p>
                  Planejamento e gestão sustentável para fortalecer nossa presença em Palhano e no Ceará.
                </p>
              </div>

            </div>

          </div>
        </section>
        <footer class="footer">
          <div class="footer-container">

            <div class="footer-brand">
              <h2>Agrioriopalhano<span>🌿</span></h2>

              <p>
                Honrando a terra e a água de Palhano para levar o melhor ovo caipira à sua mesa.
                Desde 2019 cultivando dignidade e sabor.
              </p>

              <div class="footer-icons">
                <a href="#">🟢</a>
                <a href="#">📷</a>
                <a href="#">📍</a>
              </div>
            </div>

            <div class="footer-nav">
              <h4>NAVEGAÇÃO</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Herança e História</a></li>
                <li><a href="#">Formulário</a></li>
              </ul>
            </div>

            <div class="footer-contact">
              <h4>CONTACTO</h4>

              <p>📍 Sítio Salgadinho,<br />Palhano - CE</p>
              <p>📞 (88) 99300-4152</p>
            </div>

          </div>

          <div class="footer-bottom">
            <span>© 2024 Agrioriopalhano Produção Sustentável.</span>

            <div class="footer-extra">
              <span class="dot green"></span> PALHANO-CE
              <span class="divider"></span>
              <span class="dot blue"></span> DESDE 2019
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
