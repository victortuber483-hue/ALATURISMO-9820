# ALA Turismo — Design System

Agência de turismo em Crato — CE. Landing page premium, editorial, voltada para conversão no WhatsApp.

## Direção
Editorial de revista de viagem de alto padrão. Fotografia em tela cheia, tipografia serifada grande, muito respiro.
Base escura (azul-noite) alternando com seções em papel/areia. Laranja da marca usado com parcimônia: CTA, detalhes, números.

## Cores
| Token | Hex | Uso |
|---|---|---|
| `--ink` | #0A1424 | Fundo escuro principal, texto forte |
| `--navy` | #13294B | Superfícies escuras secundárias; cor do "turismo" no logo |
| `--paper` | #F7F3EC | Fundo claro principal |
| `--sand` | #EDE5D8 | Fundo claro alternado, bordas |
| `--orange` | #F26A21 | Marca / CTA principal |
| `--amber` | #F7A12B | Início do gradiente do logo "ala" |
| `--muted` | #6B6F78 | Texto secundário em fundo claro |
| WhatsApp | #25D366 | Apenas ícone do botão flutuante |

## Tipografia
- Display: **Fraunces** (300–500, itálico para palavras emocionais). Tracking levemente negativo.
- Corpo / UI: **Manrope** (400–700).
- Rótulos: Manrope 600, caixa alta, tracking 0.22em, 11–12px.
- Logo: "ala" em **Baloo 2** 800 com gradiente âmbar → laranja e pin de mapa; "turismo" em Manrope 700 azul-marinho (ou branco em fundo escuro). Substituir pelo arquivo oficial quando fornecido.

## Espaçamento & layout
- Seções: `py-28 md:py-40`. Container `max-w-[1320px] px-6 md:px-10`.
- Grids assimétricos (7/5, offsets verticais nos cards). Cantos retos ou raio mínimo (2px) — nada de cards arredondados genéricos.
- Linhas finas 1px (`white/15` no escuro, `ink/10` no claro) como divisores editoriais.

## Componentes
- Botão primário: laranja sólido, texto branco, seta que desliza no hover.
- Botão secundário: contorno 1px, fundo transparente, hover preenche.
- Cards de destino: foto 4:5, gradiente inferior, número 01–10, nome em serif, descrição curta; hover = zoom lento 1.06 + descrição sobe.
- Carrossel duplo: duas faixas infinitas em sentidos opostos (CSS keyframes), pausa no hover em desktop.

## Motion
- Reveal com IntersectionObserver: opacity 0→1, translateY 24px→0, 900ms, cubic-bezier(.2,.7,.2,1), stagger 80ms.
- Hero: zoom lento da foto (Ken Burns 14s) + rota tracejada com avião animado.
- Respeitar `prefers-reduced-motion`.

## Conteúdo — regras
Somente informações verificáveis no Instagram/Facebook oficiais. Sem preços, sem números de clientes, sem depoimentos inventados.
