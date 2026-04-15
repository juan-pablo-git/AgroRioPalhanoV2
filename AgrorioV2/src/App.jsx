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
      </div>
    </>
  )
}

export default App
