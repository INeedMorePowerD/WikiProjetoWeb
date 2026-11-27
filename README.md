<img width="1917" height="866" alt="Captura de tela 2026-11-26 233806" src="https://github.com/user-attachments/assets/697d2568-a9c0-447b-b6af-ac835e43f49a" />
<img width="1917" height="872" alt="imagem_2026-11-26_234316620" src="https://github.com/user-attachments/assets/15137bd4-498f-44d1-88d2-a469eb5e1dfe" />
<img width="734" height="1600" alt="WhatsApp Image 2026-11-26 at 23 39 16 (1)" src="https://github.com/user-attachments/assets/95d68e7b-ce29-42ab-ac40-8064ac1678a4" />
<img width="734" height="1600" alt="WhatsApp Image 2026-11-26 at 23 39 16" src="https://github.com/user-attachments/assets/2afdebb8-ffc7-4adc-8d05-83d1fb01d85d" />
<img width="734" height="1600" alt="WhatsApp Image 2026-11-26 at 23 39 15" src="https://github.com/user-attachments/assets/cb87efa5-2346-434a-9903-0199c1d71c0b" />
<img width="1917" height="866" alt="Captura de tela 2026-11-26 233806" src="https://github.com/user-attachments/assets/d8f6bd56-2a1a-4155-a449-cc83f0225677" />
# WikiProjetoWeb
Um trabalho de WEB coding cujo objetivo é criar um site funcional utilizando o html, css. 
# Documentação de CSS: WikiProjetoWeb

Resumo de onde foram aplicados Flexbox, Grid Layout, Media Queries e BEM no projeto. As linhas são aproximadas e indicam o início da regra no CSS.

## 1. Estrutura do projeto

O site é uma wiki estática: cada página HTML (pasta `html/`) carrega um único CSS (pasta `css/`).

- `estiloMIKUEXE - Home.css`: página inicial
- `estiloMIKUEXE - PagVocaloid.css`: Vocaloids, Miku, Teto, GUMI e Neru
- `estiloMIKUEXE - PagVocaloidEXE.css`: Vocaloids.EXE e suas páginas
- `estiloMIKUEXE - PagEXE.css`: EXE, Lord X, NMI, Rewrite e X
- `estiloMIKUEXE - Termos.css`: Termos de uso
- `estiloMIKUEXE - Política.css`: Política de privacidade

## 2. BEM (Block, Element, Modifier)

O BEM foi aplicado em todos os HTML e CSS. O padrão é **bloco** (componente independente), **bloco__elemento** (parte do bloco) e **bloco--modificador** (variação visual). Cada classe mostra a que componente pertence e evita conflito de estilos entre as páginas.

Exemplo:

```html
<div class="character-info">
    <h3 class="character-info__heading">Estréia</h3>
    <div class="character-info__value">Crypton Future Media</div>
</div>
```

Blocos usados:

- `site-header` (`__logo`, `__nav`, `__link`): cabeçalho de todas as páginas
- `site-footer` (`__title`, `__nav`, `__link`): rodapé de todas as páginas
- `wiki-sidebar` (`__title`, `__nav`, `__link`): menu lateral das páginas internas
- `wiki-article` (`__heading`, `__paragraph`): texto dos artigos
- `character-info` (`__heading`, `__value`): fichas de personagem, com mais de 60 blocos
- `character-summary` (`__title`, `__text`): resumo do personagem
- `character-introduction` (`__title`): introdução do personagem
- `character-image` (`__content`): imagem do personagem
- `character-catalog` (`__list`, `__card`, `__image`): catálogo da Home
- `music-player` (`__button`): player de música
- `card-decoration` (`--left`, `--right`, `--yellow`, `--red`, `--green`, `--blue`): decorações dos cards
- `home-decoration` (`__image`, `--mic`, `--border`): decorações da Home
- `exe-section` (`__title`, `__panel`, `__inner-panel`, `__description`): seção EXE da Home
- `exe-scene` (`__image`, `--tentacles`, `--left-hand`, `--right-hand`): cena EXE da Home
- `exe-square` (`--1` a `--8`): quadrados decorativos
- `terms-policy` e `privacy-policy` (`__title`, `__paragraph`): Termos e Política

## 3. Flexbox

Usado para alinhar itens em uma direção (linha ou coluna).

- **`.site-header`, `__logo`, `__nav`** (todos os 6 CSS, linhas ~67 a 89): logo e menu lado a lado, com `justify-content: space-between` e `align-items: center`.
- **`.site-footer__nav`** (todos os 6 CSS): links do rodapé centralizados, com `flex-wrap: wrap`.
- **`.wiki-content`** (todos os 6 CSS, linha ~115): conteúdo empilhado em coluna (`flex-direction: column`).
- **`.wiki-sidebar` e `__nav`** (PagEXE, PagVocaloid, PagVocaloidEXE, Termos, Política): menu lateral em coluna.
- **`.character-image`** (páginas de personagem, ~261): centraliza a imagem.
- **`.character-catalog__list` e `__card`** (Home, ~400 e ~419): lista de cards em linha com quebra (`flex-wrap: wrap`), cada card em coluna.
- **`#Vocaloid-EXE` e `#EXES`** (Home, ~548, ~564, ~845, ~860): variações do catálogo nas seções EXE.
- **`#Bemvindo` e `.exe-section__description`** (Home, ~191 e ~605): centralização dos blocos de boas-vindas e descrição.
- **`.wiki-layout`** (dentro de `@media (min-width: 1366px)`): coloca sidebar e conteúdo lado a lado em telas grandes.

## 4. Grid Layout

Usado quando o conteúdo precisa de linhas e colunas ao mesmo tempo.

- **`.character-info`** (PagEXE ~285, PagVocaloid ~281, PagVocaloidEXE ~285): ficha do personagem em 2 colunas, com `grid-template-columns: repeat(2, minmax(0, 1fr))` e `gap: 12px 20px`.
- **`.terms-policy` e `.privacy-policy`** (Termos ~246, Política ~247): duas colunas com `grid-template-areas` (título e parágrafos p1 a p5).
- **`__title` e `__paragraph:nth-of-type(n)`** (Termos ~261 a 281, Política ~263 a 283): `grid-area: title` e `grid-area: p1` a `p5` posicionam cada texto na área certa.

## 5. Media Queries

As regras responsivas ficam no final de cada CSS e seguem três faixas de largura (o layout padrão cobre de 769px a 1365px). Os HTML declaram o *viewport* para o layout se adaptar ao celular.

- **`max-width: 480px` (celular):** header, menus e rodapé em coluna (`flex-direction: column`), espaçamentos menores e grid em 1 coluna (`1fr`) com `grid-template-areas` empilhadas.
  - Linhas: Home 947, PagEXE 417, PagVocaloid 423, PagVocaloidEXE 434, Política 288, Termos 286.
- **`481px a 768px` (tablet):** ajusta espaçamentos e coloca o grid em 2 colunas (`repeat(2, minmax(0, 1fr))`).
  - Linhas: Home 1040, PagEXE 510, PagVocaloid 516, PagVocaloidEXE 527, Política 381, Termos 379.
- **`min-width: 1366px` (tela grande):** `.wiki-layout` vira `display: flex` em linha, `flex-wrap` é ajustado e o grid usa `repeat(auto-fit, minmax(220px, 1fr))`.
  - Linhas: Home 1118, PagEXE 588, PagVocaloid 594, PagVocaloidEXE 605, Política 459, Termos 457.
- **`prefers-reduced-motion: reduce`:** acessibilidade, reduz animações para quem desativou movimento no sistema.
  - Linhas: PagVocaloid 409, PagVocaloidEXE 417.


