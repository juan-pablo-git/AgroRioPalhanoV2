import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/miltomm-morro-4887986_12801.png'
import './App.css'

function App() {

  return (
    <div className='container'>
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
    </div>
  )
}

export default App
