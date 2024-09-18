# Portfolio-Static

Bem-vindo ao repositório do meu portfólio pessoal, desenvolvido com foco em destacar minhas habilidades como Desenvolvedor Fullstack. Este projeto foi construído utilizando tecnologias modernas e segue as melhores práticas de desenvolvimento para garantir uma experiência fluida e interativa para os usuários.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface do usuário.
- **React Router Dom**: Gerenciamento de rotas e navegação entre as páginas.
- **Framer Motion**: Animações fluidas para uma experiência mais envolvente.
- **Styled Components**: Estilização com CSS-in-JS, permitindo a criação de componentes reutilizáveis e consistentes.
- **React Scroll**: Navegação suave para seções específicas da página.
- **React Responsive Carousel**: Carrossel responsivo para exibir conteúdo dinâmico.
- **Date-fns**: Manipulação de datas com facilidade e performance.

## Funcionalidades

- **Navegação Dinâmica**: O projeto utiliza o React Router para garantir uma navegação rápida e fluida entre as páginas.
- **Hooks Personalizados**: Uso de hooks como `useGetPortfolioItem` e `useUserBio` para gerenciar o estado de dados como o portfólio e as informações do usuário.
- **Scroll Suave**: Com o React Scroll, a aplicação proporciona uma transição suave ao navegar para diferentes seções da página.
- **Animações**: O Framer Motion garante que as transições entre componentes sejam suaves e visivelmente atrativas.
- **Responsividade**: A interface foi construída para ser totalmente responsiva, garantindo uma experiência otimizada tanto em dispositivos móveis quanto em desktops.

## Estrutura de Navegação

A navegação é organizada da seguinte forma:

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/curriculum" element={<Resume />} />
    </Route>
  </Routes>
</BrowserRouter>
```

- **Home**: Página inicial, com informações sobre mim, habilidades, portfólio e formas de contato.
- **Curriculum**: Página dedicada ao meu currículo, onde podem ser vistas minhas experiências e qualificações.

## Estrutura da Página Home

A página principal (`Home`) é dividida em quatro seções:

1. **Sobre Mim**: Informações gerais sobre meu perfil e carreira.
2. **Habilidades**: Lista detalhada de minhas competências técnicas.
3. **Portfólio**: Apresentação de projetos anteriores com detalhes.
4. **Contato**: Informações para entrar em contato, incluindo links para redes sociais.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/marco-duart/portfolio-static.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

O projeto estará disponível em `http://localhost:5173`.

## Contato

Para mais informações ou dúvidas, entre em contato:

- **Email**: marcoaurelio_db@hotmail.com
- **LinkedIn**: [Aurelio Duart](https://www.linkedin.com/in/aurelio-duart)
- **GitHub**: [marco-duart](https://github.com/marco-duart)
