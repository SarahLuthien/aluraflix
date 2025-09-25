# <img src="https://i.postimg.cc/NGmBQTwT/icon-play.png" alt="Ícone do projeto"> Aluraflix

<table align="center">
  <tr>
    <td align="center">
      <img src="https://i.postimg.cc/x1t4N4B0/aluraflix.png" alt="Captura da imagem Home do site desktop" width="450px">
      <br>
      <em>Visualização do projeto no formato desktop.</em>
    </td>
    <td align="center">
      <img src="https://i.postimg.cc/L67q498R/aluraflix-ebon-vercel-app-2.png" alt="Captura da imagem Home do site mobile" width="220px">
      <br>
      <em>Visualização do projeto no formato mobile.</em>
    </td>
  </tr>
</table>

## 🌐 Deploy

<a href="https://aluraflix-ebon.vercel.app/" target="_blank">
  <strong>Acesse a aplicação (Front-End) em produção clicando aqui!</strong>
</a>

---

## 📖 Sobre o Projeto

O **Aluraflix** é uma plataforma de streaming de vídeos desenvolvida como parte do challenge da formação Front-End do programa **ONE (Oracle Next Education) - Turma T6**. O projeto foi planejado em fases para evoluir de uma aplicação client-side para uma solução Full Stack robusta e moderna.

---

## 🗺️ Roadmap do Projeto

O desenvolvimento do Aluraflix está dividido nas seguintes fases:

### ✅ Fase 1: Fundação com Front-End (Concluída)
- **Objetivo:** Criar uma Single Page Application (SPA) funcional e totalmente interativa, estabelecendo a base de componentes e a lógica de manipulação de dados no lado do cliente.

- **Detalhes da Implementação:**
  - **Arquitetura de Componentes:** A interface foi desenvolvida em React, seguindo uma arquitetura baseada em componentes reutilizáveis (como Cards de vídeo, Seções de categoria, Modais e Formulários) para garantir a manutenibilidade e escalabilidade do código.
  - **Gerenciamento de Estado:** O estado da aplicação, incluindo a lista de vídeos e a interação com os formulários, foi gerenciado localmente com React Hooks (`useState`, `useEffect`), simulando o comportamento de uma aplicação dinâmica antes da integração com um back-end.
  - **Operações CRUD no Front-End:** Foi implementada a lógica completa das quatro operações essenciais (Criar, Ler, Editar, Deletar) diretamente no front-end. Os formulários de cadastro e edição permitem que o usuário gerencie o conteúdo de forma intuitiva, com os dados sendo manipulados em tempo de execução.
  - **Design Responsivo:** Total fidelidade ao protótipo do Figma, com foco na responsividade através de CSS Media Queries para adaptar o layout a diferentes resoluções, garantindo uma experiência de usuário fluida e consistente em desktops, tablets e smartphones.

- **Tecnologias Utilizadas:**
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### ➡️ Fase 2: Back-end como Serviço (Em Andamento)
- **Objetivo:** Substituir os dados locais por uma solução de back-end real, ágil e escalável.
- **Próximos Passos:**
  - [ ] Configurar um projeto no **Supabase**.
  - [ ] Criar as tabelas de `vídeos` e `categorias`.
  - [ ] Refatorar o Front-end em React para consumir a API RESTful gerada automaticamente pelo Supabase.
  - [ ] Realizar o deploy das alterações.

### 🚀 Fase 3: Back-end Customizado e DevOps (Planejada)
- **Objetivo:** Aprofundar os conhecimentos em back-end e infraestrutura, construindo e implantando uma API própria.
- **Plano:**
  - Desenvolver uma API RESTful customizada em **Node.js** com Express (ou similar).
  - "Dockerizar" a aplicação back-end para garantir consistência e portabilidade.
  - Implantar o contêiner da API na plataforma **Railway**.
  - Conectar o banco de dados do Supabase (PostgreSQL) a esta nova API.
  - Apontar o Front-end para consumir os dados da API customizada.

---

## 🎨 Layout

O layout da aplicação foi criado com base em um protótipo desenvolvido no **Figma**, buscando uma experiência de usuário limpa e moderna.

---

## 🛠️ Tecnologias

As tecnologias abaixo representam o stack planejado para o projeto ao final da Fase 3.

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</div>
<br>

| Ferramenta | Descrição |
| --- | --- |
| **React** | Biblioteca para a criação da interface do usuário (Front-end). |
| **Node.js** | Ambiente de execução para a API customizada (Back-end). |
| **Docker** | Plataforma para criar, testar e implantar aplicações em contêineres. |
| **Supabase** | Utilizado como Banco de Dados PostgreSQL (BaaS). |
| **Vercel** | Plataforma de deploy para o Front-end. |
| **Railway** | Plataforma de deploy para o Back-end dockerizado. |

---

## 🔧 Como Executar

Para rodar o projeto (Front-End) localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/SarahLuthien/aluraflix.git

# 2. Acesse a pasta do projeto
cd aluraflix

# 3. Instale as dependências
npm install

# 4. Inicie a aplicação
npm start
