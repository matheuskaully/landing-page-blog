# 🚀 Landing Page Blog

![Capa do Projeto](public/og-image.jpg)

Este repositório contém uma **landing page responsiva** desenvolvida como parte dos materiais do curso de React da Rocketseat. O projeto visa demonstrar uma plataforma funcional para a **venda de produtos online**, com um foco especial na experiência do usuário e na adaptabilidade a diferentes dispositivos.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com um conjunto robusto de tecnologias modernas para garantir performance e manutenibilidade:

* **TypeScript**: Para tipagem estática, garantindo um código mais robusto e fácil de manter.
* **ReactJS**: Biblioteca JavaScript para a construção de interfaces de usuário dinâmicas.
* **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), otimizando SEO e performance.
* **Tailwind CSS**: Framework CSS utility-first para estilização rápida e responsiva.
* **ESLint**: Ferramenta de linting para manter a qualidade e consistência do código.
* **Prettier**: Formatador de código para garantir um estilo de código unificado.
* **shadcn/ui**: Componentes de UI construídos com Radix UI e Tailwind CSS.
* **Lucide React**: Biblioteca de ícones simples e consistentes.

---

## ⚙️ Como Configurar e Rodar o Projeto

Siga os passos abaixo para colocar o projeto em funcionamento na sua máquina local:

### 1. Clonar o Repositório

Comece clonando o projeto para o seu ambiente de desenvolvimento:

```bash
git clone [https://github.com/matheuskaully/landing-page-blog.git](https://github.com/matheuskaully/landing-page-blog.git)
````

### 2\. Navegar até o Diretório

Entre na pasta do projeto recém-clonada:

```bash
cd landing-page-blog
```

### 3\. Instalar as Dependências

Escolha seu gerenciador de pacotes preferido e instale as dependências. Se encontrar problemas durante a instalação, a flag `--force` pode ser útil:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install

# Caso encontre erros de dependência, tente forçar a instalação:
npm install --force
```

### 4\. Gerar os Arquivos do Blog

Este passo é **crucial** para que o Contentlayer processe e gere os arquivos `.md` do seu blog, tornando-os acessíveis à aplicação:

```bash
npx contentlayer build
```

### 5\. Iniciar o Servidor de Desenvolvimento

Agora você pode iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

### 6\. Acessar o Projeto

Abra seu navegador web e navegue até `http://localhost:3000`. A página será automaticamente atualizada conforme você edita os arquivos do projeto.

-----

Este projeto foi desenvolvido por:

**[@matheuskaully](https://github.com/matheuskaully)**
