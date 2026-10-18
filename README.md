# Meu blog — Rayane Araujo

Mini blog pessoal em HTML + CSS + um pouco de JavaScript (sem instalar nada).

## Estrutura

```
meu-blog/
├── index.html              ← página inicial
├── 404.html                ← página de erro (o GitHub Pages usa sozinho)
├── css/style.css           ← todo o visual (cores e fontes no topo)
├── js/main.js              ← menu no celular, barra de leitura, compartilhar...
├── paginas/
│   ├── respeito.html       ← um arquivo por texto, todos com o mesmo template
│   ├── lealdade.html
│   └── cumplicidade.html
├── img/                    ← suas imagens (ex.: avatar.jpg)
└── video/                  ← (crie esta pasta) seus vídeos .mp4
```

## O que o site já tem

Cabeçalho fixo com menu no celular, barra de progresso de leitura, tempo de leitura
automático, categorias, botões de compartilhar (WhatsApp, e-mail, copiar link),
caixa da autora, "Continue lendo", seção "Sobre mim", rodapé com contatos,
botão de voltar ao topo, link "pular para o conteúdo" (acessibilidade),
metadados para compartilhamento e página 404.

## Como editar

- **Escrever um texto:** abra a página em `paginas/`. A capa (categoria, título, resumo, data)
  e o texto ficam nos trechos marcados com `✏️`.
- **Cores e fontes:** variáveis no começo de `css/style.css`.
- **Cor da capa de cada texto:** `.tema-respeito`, `.tema-lealdade` e `.tema-cumplicidade` no CSS.
- **Seus links (e-mail, Instagram, GitHub):** procure `seuemail@exemplo.com` e `href="#"`
  no `index.html` e no rodapé de cada página.
- **Sua foto:** salve `img/avatar.jpg` e troque o `RA` por
  `<img src="img/avatar.jpg" alt="Rayane Araujo">` (nas páginas de `paginas/`, use `../img/avatar.jpg`).
- **Novo texto:** copie `paginas/respeito.html`, renomeie, ajuste o `<body class="tema-...">`
  e inclua o link no menu, no rodapé e nos cartões do `index.html`.
- **Vídeo:** crie `video/`, coloque o `.mp4` (comprimido, ideal abaixo de ~30 MB) e ative o
  bloco comentado `🎬 VÍDEO` na página desejada.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos estes arquivos.
2. **Settings → Pages → Source:** *Deploy from a branch*, branch `main`, pasta `/ (root)`.
3. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
