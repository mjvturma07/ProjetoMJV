# Projeto MJV SCHOOL REACT professor Tsunoda

Professor: Tsunoda

Grupo :
    Hani Afif Yehia <br/>
    Bev Feitosa <br/>
    Carlos Eduardo Perdomo Vargas <br/>
    Archimedes dos Santos Rocha

Para rodar a aplicação voce precisa:

Abrir o terminal (Certifique-se de estar co caminho correto)
Rode o comando "yarn" para instalações dos pacotes do yarn.lock
após a inicialização escreva "yarn dev" e enter para visualizar o site no modo desenvolvedor
ou "yarn build" para buildar a aplicação.

O projeto foi criado com Vite + React com typescript.
A tecnologia de estilização usada foi Styled-components

Link do deploy https://aquiexpress.vercel.app/ usando Vercel ( Deploy do main )

API usada https://fakeapi.platzi.com/
DOC da API: https://fakeapi.platzi.com/doc/introduction

Estrutura das pastas:

    Components: Inseridos na pasta Components cada pasta contém o index de seu respectivo componente junto com seu styled components.
    Section: São "Block" components, não dinamicos, apenas para clean conde e para reutilização, exemplo ( Footer e Header )
    Styles: Apenas o GlobalStyles
    Utility: Aqui são inseridos as interfaces de tipo usadas para separação e clean code
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

https://reactjs.org/docs/getting-started.html React <br/>
https://www.typescriptlang.org/docs/ Typescript <br/>
https://reactrouter.com/en/main react-router-dom <br/>
https://formidable.com/open-source/react-animations react-animations <br/>
https://react-awesome-reveal.morello.dev/ react-awesome-reveal <br/>
https://react-icons.github.io/react-icons/ react-icons <br/>
https://styled-components.com/docs styled-components <br/>
https://formidable.com/open-source/victory/docs/ victory

Orientação para criação de nova página:

1. Criei um arquivo tsx na pasta "pages" e exporte a função componente que será sua página. <br/>
2. Importe e adicione a rota na pasta routes seguindo os exemplos já feitos. <br/>
3. Reutilize componentes que iram repetir na página (header,footer etc) <br/>
4. Oque precisar adicionar na nova página crie um componente "section" e deixe documentado para próximas utilizações <br/>
5. Adicione componentes menores na pasta "componente"

Oque não foi feito e poderia ser uma melhoria:

1.Separar todos os useEffects e tipagem em custom hooks. <br/>
2.Trocar fecth para Axios. <br/> 
3.Testes unitários. <br/>
4.Design system.


