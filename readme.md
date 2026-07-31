# GLITCHFLIX

Um projeto desenvolvido para o Alura Start no 4º bimestre.

A proposta original da Alura era criar uma "coleção de vídeos" utilizando apenas HTML e CSS. No entanto, por achar a estrutura estática muito simples, adicionei JavaScript para tornar o código mais dinâmico, limpo e fácil de manter.

---

## Comparação entre os projeto

Meu projeto
[![meu projeto](./image/glitchflix-preview.png)](https://luankaike-code.github.io/glitchflix/)

Projeto da alura
![projeto da alura](./image/aluraflix.png)

---

## Melhorias

### 1. Manutenibilidade

#### Problema
O projeto original não possuía um banco de dados para os carrosséis; em vez disso, todo o conteúdo ficava diretamente no HTML.

Isso gerava problemas de manutenção, pois:
* Exigia alterar o HTML manualmente a cada atualização;
* Abria margem para erros humanos (ex.: uma thumbnail divergente do vídeo configurado);
* Aumentava o trabalho repetitivo desnecessariamente.

#### Solução
Como o foco do projeto era o desenvolvimento web vanilla, sem o uso do Node.js, optei por criar uma variável de dados em JavaScript para armazenar as informações necessárias para popular os carrosséis.

Com isso:
* **Manutenção centralizada:** Basta alterar uma variável no JavaScript;
* **Padronização:** A geração via código garante que os links e thumbnails sigam a mesma estrutura, eliminando inconsistências;
* **Simplicidade:** O único trabalho necessário para adicionar um novo conteúdo é inserir o ID do vídeo na variável de dados de dados.

---

### 2. Continuidade de Navegação

#### Problema
A proposta original exigia que o usuário saísse do site e fosse para uma plataforma externa (como o YouTube) para assistir aos vídeos. Tornando a experiência do usuário inconveniente.

#### Solução
A melhor abordagem era manter o usuário na aplicação exibindo o conteúdo via *pop-up*.

Essa decisão foi tomada porque:
* Respeita os direitos autorais, utilizando o player oficial incorporado do YouTube (*embed*);
* Garante uma boa expêriencia ao usuário.

##### Desafio de Reutilização
Para evitar a duplicidade de código HTML, já que seria necessário ter um HTML de *pop-up* inteiro para cada vídeo, criei uma classe em JavaScript responsável por gerenciar a estrutura HTML de apenas um *pop-up*. 

Dessa forma, o mesmo elemento HTML é reaproveitado: ao clicar em qualquer card, a classe intercepta o evento e atualiza dinamicamente os parâmetros do player com o ID do vídeo correspondente.
