import { useEffect, useState, useRef } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import FadeInSection from './components/FadeInSection'
import './App.css'
import logoIMG from './assets/LogoAgrorio-removebg.png'
import ovoVIDEO from './assets/OVO.mp4'
import caixaVIDEO from './assets/caixa_animacao.webm'
import ovoCapa from './assets/capaVideo1.png'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'


function App() {
  const images = [img1, img2, img3, img4]

  const [currentImage, setCurrentImage] = useState(0)
  const videoRef = useRef(null)
  const videoCaixaRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          entry.target.play()
        } else {
          entry.target.play()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }
    if (videoCaixaRef.current) {
      observer.observe(videoCaixaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header class="navbar">
        <div class="nav-container">

          <div class="logo">
            <img src={logoIMG} alt="Logo" />
          </div>

          <nav class="nav-menu">
            <a href="#hero" class="active">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#produto">Produtos</a>
            <a href="#contato">Contatos</a>
          </nav>

        </div>
      </header>
      <div >
        <FadeInSection>
          <section id='hero' class="hero">
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
        </FadeInSection>
        <FadeInSection>
          <section id='produto' class="section-produto">
            <div class="container">

              <div class="produto-grid">

                <div class="produto-img">
                  <video
                    ref={videoRef}
                    width="100%"
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                    poster={ovoCapa}
                  >
                    <source src={ovoVIDEO} type="video/mp4" />
                  </video>
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
        </FadeInSection>

        <FadeInSection>
          <section className="section-card">
            <div className="container">

              <div className="card-destaque">

                <div className="card-grid">

                  {/* Texto */}
                  <div className="card-texto">

                    <span className="tag">
                      ORGULHO DE PALHANO
                    </span>

                    <h2>
                      Nosso Ovo
                      <span>Caipira Premium</span>
                    </h2>

                    <p>
                      A granja mais antiga, o frescor de quem colhe todos os dias
                      e o sabor inconfundível de aves criadas com liberdade.
                      Nossos ovos são resultado de uma alimentação natural,
                      manejo humanizado e muito cuidado em cada etapa da produção.
                    </p>

                  </div>

                  {/* Vídeo */}
                  <div className="card-video">

                    <video
                      ref={videoCaixaRef}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={caixaVIDEO} type="video/mp4" />
                    </video>

                  </div>

                </div>

              </div>

            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="section-video">

            <div className="video-header">
              <span>POR DENTRO DA GRANJA</span>

              <h2>
                Conheça Nossa
                <span> Produção</span>
              </h2>

              <p>
                Transparência, cuidado e dedicação em cada etapa.
                Veja como nossos ovos são produzidos diariamente
                no coração de Palhano.
              </p>
            </div>

            <div className="video-wrapper">
              <iframe src="https://drive.google.com/file/d/1ztYTj3AOIiiTaCBMrp8_64-M4aohICkf/preview" allow="autoplay"
                allowFullScreen></iframe>
            </div>

          </section>
        </FadeInSection>
        <FadeInSection>
          <section id='sobre' class="section-heranca">
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


                <div className="heranca-visual">

                  <div className="card-verde">
                    <img
                      key={currentImage}
                      src={images[currentImage]}
                      alt=""
                      className="carousel-image"
                    />
                  </div>

                  <div className="card-branco">
                    <div className="floating-info">

                      <div className="info-box">
                        <strong>VERDE</strong>
                        <span>Natureza & Crescimento</span>
                      </div>

                      <div className="info-box">
                        <strong>AZUL</strong>
                        <span>Confiança & Fé</span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section >
        </FadeInSection>
        <FadeInSection>
          <section id='contato' class="section-contato">
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
        </FadeInSection>
        <FadeInSection>
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
        </FadeInSection>
        <FadeInSection>
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
        </FadeInSection>

      </div >
    </>
  )
}

export default App
