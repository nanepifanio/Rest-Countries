# Consumindo Rest Countries API v2

Projeto que desenvolvi completamente sozinho para botar em prática o que aprendi até agora nos meus estudos com React. O desafio é do site Frontend Mentor, onde só me deram o guia de estilos (cores, tipografia...) e as imagens para eu me basear.

O projeto se trata de listar todos os países do mundo a partir do consumo da Rest Countries Api. A partir daí, você pode procurar pela país no input de busca, filtrar os países por região e clicar no país, onde você será levado para mais informações sobre o mesmo. Nessa página de informações, você ainda poderá ver e acessar os países que fazem fronteira com aquele país (caso ele faça fronteira com algum país).

Utilizei além do básico do React, Styled-Components, React Routes e Context.
O React Routes, além de me auxiliar com as rotas, me auxiliou com os query params do input de busca e de filtro (utilizei o useSearchParams para isso), com os parametros de url e com o componente Link para uma navegação mais fluida entre as páginas.

Já o Context me auxiliou com o gerenciamente de estado do dark mode.

O typescript trouxe uma camada a mais de desafio ao projeto.

## Para instalar

- `npm install`

## Para Rodar

- `npm run dev`
