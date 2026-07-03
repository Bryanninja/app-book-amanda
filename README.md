<div align="center">
  <img src="public/marrom.svg" alt="Logo Sou Amada" width="120" />
  
  # Sou Amada - Amanda Sena | Sales Page 📖

  <p align="center">
    Uma página de vendas imersiva, premium e de alta conversão construída com tecnologias de ponta. Focada em performance extrema (Lighthouse 100/100), animações fluidas e acessibilidade.
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  </p>
</div>

<br />

## 🎯 Sobre o Projeto

Este projeto é uma **Página de Vendas (Landing Page) interativa** desenvolvida para o lançamento do livro "Sou Amada" da autora Amanda Sena. 

O grande desafio técnico resolvido aqui foi criar uma experiência emocional através de **micro-interações e scroll animado**, enquanto lidamos com uma **lógica inteligente de checkout multinacional**. Como o livro é vendido para o Brasil, Portugal e países da África (como Moçambique e Angola), o projeto conta com um **Modal Dinâmico de Checkout** que adapta os métodos de pagamento (M-Pesa, Amazon, Mercado Livre) baseando-se na região selecionada pelo usuário.

### 🌟 Principais Features
- **Animações de Alta Performance:** Uso avançado de GSAP (GreenSock) para *scroll-triggers*, *parallax* e *reveal animations* sem sacrificar a performance.
- **Smooth Scrolling:** Integração com **Lenis** para garantir um rolar de página suave e imersivo.
- **Checkout Global e Dinâmico:** Gerenciamento de estado global com **Zustand** para controlar o modal de compra adaptativo por país, reduzindo o atrito na hora da conversão.
- **Performance Extrema:** Otimização cirúrgica de imagens e Fontes, garantindo notas altíssimas no Google Lighthouse (Core Web Vitals).
- **SEO & Acessibilidade:** Meta-tags rigorosas, Schema Markup (JSON-LD) e acessibilidade (WCAG) ajustadas para indexação global e inclusão.

---

## 🏗️ Arquitetura e Stack Tecnológica

- **Framework Core:** [Next.js v16](https://nextjs.org/) (App Router) + [React v19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) com checagem rigorosa de tipos.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) arquitetado com variáveis de design system CSS puro para paletas de cores (*theme-brown*, *theme-salmon*).
- **Animação:** [GSAP v3](https://gsap.com/) + `@gsap/react`
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Qualidade de Código:** Husky + Commitlint (Conventional Commits) + Prettier + ESLint.

---

## 🚀 Como Rodar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina local:

### Pré-requisitos
- **Node.js** (versão 18.17+ recomendada)
- **NPM** ou **Yarn** / **pnpm**

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/app-book-amanda.git
```

2. Acesse a pasta do projeto:
```bash
cd app-book-amanda
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador e acesse:
```
http://localhost:3000
```

---

<div align="center">
  <sub>Desenvolvido com excelência, propósito e atenção aos mínimos detalhes. ✨</sub>
</div>
