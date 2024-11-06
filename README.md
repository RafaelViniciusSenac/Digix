# Projeto Digix


#### Descrição das Pastas e Arquivos
##MODELO MVC##
### /assets
Contém todos os arquivos estáticos, como CSS, JavaScript, imagens e fontes.

- #### **/css**
    Arquivos de estilo CSS, separados por nível de acesso (admin e colaborador) e ou arquivos comum.
  - ##### **/admin**
    Arquivos de estilo CSS específico para administradores.
  - ##### **/colaborador**
    Arquivo de estilo CSS específico para colaboradores.


- #### **/js**
    Scripts JavaScript, também separados por nível de acesso e ou arquivos comum.
  - ##### **/admin**
  Script JavaScript específico para administradores.
  - ##### **/colaborador**
  Script JavaScript específico para colaboradores.


#### **/images**
Imagens usadas no site.

#### **/fonts**
Fontes personalizadas.

### **/components**
Contém componentes HTML reutilizáveis, como cabeçalho, rodapé e barra lateral e menus.

### **/admin**
Contém as páginas HTML específicas para administradores.

-  ##### **/usuarios**
    Páginas relacionadas ao gerenciamento de usuários.

-  ##### **/produtos**
    Páginas relacionadas ao gerenciamento de produtos.

-  ##### **/desafios**
    Páginas para criação e gerenciamento de desafios.

-  ##### **/pedidos**
    Páginas para gerenciamento dos pedidos.

-  ##### **/relatorios**
    Páginas para exportação de relatórios.


### **/colaborador**
Contém as páginas HTML específicas para colaboradores.

-  ##### **/usuario**
    Páginas relacionadas ao perfil do usuário.

-  ##### **/ranking**
    Páginas para visualização do ranking.

-  ##### **/produto**
    Páginas para visualização de produtos.

-  ##### **/carrinho**
    Páginas para visualização do carrinho de compras.

-  ##### **/desafio**
    Páginas para visualização de desafios.


### **/utils**
Contém scripts utilitários, como funções de API (fetch) e helpers.


### **/api**
Contém os arquivos PHP da API, organizados por funcionalidade.

- #### **/app**
    Contém a lógica principal da aplicação.

  - ##### **/Controllers**
    Controladores que lidam com as requisições HTTP.

  - ##### **/Models**
    Modelos que representam as entidades do banco de dados.

  - ##### **/Views**
    Arquivos de visualização, se necessário.

  - ##### **/Services**
    Serviços que contêm a lógica de negócios.

  - ##### **/Helpers**
    Funções auxiliares e utilitárias.

- #### **/config**
    Arquivos de configuração da aplicação.

- #### **/public**
    Contém os arquivos públicos acessíveis via web.

- #### **/routes**
    Define as rotas da API.


- #### **/storage**
    Contém arquivos de armazenamento, como logs e uploads.


- #### **/tests**
    Contém os testes automatizados.


- #### **/vendor**
    Contém as dependências gerenciadas pelo Composer.

### **index.html**
Página de login, que será a primeira página acessada pelos usuários.
