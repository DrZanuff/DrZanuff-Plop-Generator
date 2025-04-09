### `README.md`

````md
# drzanuff-plop-generator

Gerador de componentes React usando [Plop.js](https://plopjs.com/).  
Roda via script `npm run plop` e permite escolher entre Styled Components ou CSS, e entre TypeScript ou JavaScript.

---

## Instalação

```bash
npm install -D drzanuff-plop-generator
```
````

---

## Configuração

Adicione o script no seu `package.json`:

```json
"scripts": {
  "plop": "drzanuff-plop-generator"
}
```

---

## Uso

Depois de configurar, rode:

```bash
npm run plop
```

Você verá prompts para escolher:

- Framework (React ou React Native\*)
- Linguagem (JavaScript ou TypeScript)
- Estilo (CSS, CSS Modules ou Styled Components)
- Nome do componente

* React Native tem suporte apenas ao CSS

---

## Estrutura gerada

Exemplo com TypeScript + CSS:

```
/components/NomeDoComponente/
│
├── index.tsx
├── NomeDoComponente.tsx
├── NomeDoComponente.types.tsx
├── NomeDoComponente-styles.css
```

Exemplo com TypeScript + Styled Components:

```
/components/NomeDoComponente/
│
├── index.tsx
├── NomeDoComponente.tsx
├── NomeDoComponente.styles.tsx
├── NomeDoComponente.types.tsx
```

## 🧰 Requisitos

- Node.js instalado
- Nada de Plop separado — o pacote já inclui o Plop.js internamente ✅
