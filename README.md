<p align="center">
<img width="70%" src="https://i.imgur.com/GuOLrzT.png" alt="NetRecipes Image"/>
</p>

<h1 align="center">Net Recipes API</h1>
<p align="center">O projeto <strong>Net Recipes</strong> foi desenvolvido com o objetivo de te ajudar a compartilhar suas melhores receitas e aprender novos pratos.</p>
<p align="center">
  <a aria-label="Thiago" href="https://github.com/thgomes/">
    <img src="https://img.shields.io/badge/Thiago%20Gomes--informational"></img>
  </a>
  <a aria-label="React" href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node.js-12.16.2-informational"></img>
  </a>
</p>


<p align="center">
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 🚀 Instalação e execução

_ps: Se precisar de ajuda para fazer um clone, esse [tutorial aqui](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository) vai te ajudar 💖_

**Primeiramente instale [Node.js](https://nodejs.org/en/download/) e o [Yarn](https://yarnpkg.com/), em seguida, clone o projeto rodando este comando:**

```git clone https://github.com/thgomes/netrecipes-web.git```

**Instalação das dependências**

Rode o seguinte comando no terminal para que as dependências sejam instaladas

```yarn install```


**Variáveis de ambiente**

Vá até o arquivo '.env.example' e prencha todos os campos de acordo com as configurações da base de dados e demais tópicos nele especificados. Após preenche-lo, altere o nome do arquivo para '.env'.

**Configuração da base de dados**

Rode o seguinte comando no terminal para que as tabelas sejam formadas na sua base de dados

```yarn sequelize db:migrate```

**Execução**

Rode o seguinte comando para iniciar o servidor em modo de desenvolvimento

```yarn dev```

**Interface**

Caso queira ultilizar essa API por meio de uma interface, vá até o repositório [Net Recipes WEB](https://github.com/thgomes/netrecipes-web) e siga as intruções em ordem, para rodar a interface web na sua máquina

## 🤔 Como contribuir

Se quiser contribuir para esse repositório aqui, seja corrigindo algum problema, adicionando comentários ou melhorando a documentação, você pode seguir esse tutorial abaixo:

- Faça [um fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) desse repositório;
- Entre no seu perfil no GitHub e faça um clone do repositório que você fez um *fork*;
- Crie uma *branch* com a sua alteração: `git checkout -b minha-alteracao`;
- Faça as alterações necessárias no código ou na documentação;
- Faça *commit* das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça *push* para a sua *branch*: `git push origin minha-alteracao`;
- Agora é só abrir a sua *pull request* no repositório que você fez o *fork*;

Depois que o *merge* da sua *pull request* for feito, você pode deletar a sua *branch*.

## 📕 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
Feito com ♥ by Thiago Gomes
