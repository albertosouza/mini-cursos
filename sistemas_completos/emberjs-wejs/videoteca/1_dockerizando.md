# Dokerizando!

Vamos iniciar pela estrutura do nosso SPA.
Un SPA pode ser separado em cliente e servidor

No servidor temos a API, o servidor que serve o código estático do cliente e o banco de dados.

Vamos usar o `docker` e `docker-compose` para facilitar a instalação do projeto em desenvolvimento e desenvolver o projeto com todas as suas partes.

Site do docker: https://www.docker.com

## Nessa estrutura usamos as tecnologias:

- git submodules - separa o código em repositórios diferentes
- ember.js       - cliente no navegador
- we.js          - api no backend
- postgresql     - banco de dados
- redis          - sessão

## Instalação do docker e docker compose:

- Docker: https://www.docker.com/products/overview#/install_the_platform
- docker-compose: https://docs.docker.com/compose/install/

## Dicas e FAQ

- bower e user do container 
  - use `--allow-root` ou configure o bowerrc com `"allow_root": true`
- permissões de criação de arquivos em comandos como o `docker-compose run webapp ember generate component app-header -it`
 - Apesar de existir algumas opções eu ainda não achei uma fácil de usar então nesse ponto estou editando e gerando códigos usandos as ferramentas no localhost
