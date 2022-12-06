# Projeto MJV SCHOOL REACT professor Tsunoda

Projeto do time 07 para a SCHOOL DE REACT DA MJV 
Professor: Tsunoda

Para rodar a aplicação voce precisa:

Abrir o terminal (Certifique-se de estar co caminho correto)
Rode o comando "yarn" para instalações dos pacotes do yarn.lock
após a inicialização escreva "yarn dev" e enter para visualizar o site no modo desenvolvedor
ou "yarn build" para buildar a aplicação.

O projeto foi criado com Vite + React com typescript.
A tecnologia de estilização usada foi Styled-components

Link do deploy https://aquiexpress.vercel.app/ usando Vercel ( Deploy do main )

Estrutura das pastas:

    Components: Inseridos na pasta Components cada pasta contém o index de seu respectivo componente junto com seu styled components.
    Section: São "Block" components, não dinamicos, apenas para clean conde e para reutilização, exemplo ( Footer e Header )
    Styles: Apenas o GlobalStyles
    Utility: Aqui são inseridos as interfaces de tipo usadas para separação e clean code além de custom hooks e constantes para evitar magic numbers.
    Routes: Aqui fica todas as rotas da aplicação
    Pages: São as páginas aonde são chamados os Components e Block components.

Pacotes utilizados: 

    react-animations Usado em /components/login & product-card
    react-awesome-reveal Usado em components/category-card pages/home & sections header
    react-icons Utilização de ícones de forma fácil
    react-router-dom Para criação de rotas
    styled-components Estilização
    victory Para criação de gráficos em pages/admin

Documentações das tecnologias e pacotes utilizados:

https://reactjs.org/docs/getting-started.html React
https://www.typescriptlang.org/docs/ Typescript
https://reactrouter.com/en/main react-router-dom
https://formidable.com/open-source/react-animations/#:~:text=A%20collection%20of%20animations%20that,css. react-animations
https://react-awesome-reveal.morello.dev/ react-awesome-reveal
https://react-icons.github.io/react-icons/ react-icons
https://styled-components.com/docs styled-components
https://formidable.com/open-source/victory/docs/ victory
