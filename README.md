````md
# drzanuff-plop-generator

Gerador de componentes React usando [Plop.js](https://plopjs.com/).  
Roda via script `npm run plop` e permite escolher entre Styled Components, CSS ou CSS Modules, e entre TypeScript ou JavaScript.

---

## Instalação

```bash
npm install -D drzanuff-plop-generator
```
````

---

## Configuração

Crie um arquivo `plopfile.cjs` na raiz do seu projeto com o seguinte conteúdo:

```js
const componentGenerator = require('drzanuff-plop-generator')

module.exports = function (plop) {
  componentGenerator(plop)
}
```

> ⚠️ Use a extensão `.cjs` porque seu projeto provavelmente usa `"type": "module"` no `package.json`, e isso impede o uso de `require` em arquivos `.js`.

Em seguida, adicione o script ao seu `package.json`:

```json
"scripts": {
  "plop": "plop"
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

> - O suporte a React Native atualmente funciona apenas com estilo CSS.

---

## Estrutura gerada

### Exemplo com TypeScript + CSS:

```
/components/NomeDoComponente/
│
├── index.tsx
├── NomeDoComponente.tsx
├── NomeDoComponente.types.tsx
├── NomeDoComponente-styles.css
```

### Exemplo com TypeScript + Styled Components:

```
/components/NomeDoComponente/
│
├── index.tsx
├── NomeDoComponente.tsx
├── NomeDoComponente.styles.tsx
├── NomeDoComponente.types.tsx
```

### Exemplo com CSS Modules:

```
/components/NomeDoComponente/
│
├── index.tsx
├── NomeDoComponente.tsx
├── NomeDoComponente.types.tsx
├── NomeDoComponente-styles.module.css
```

---

## 🧰 Requisitos

- Node.js instalado
- Não é necessário instalar o Plop separadamente — o pacote já inclui o Plop.js internamente ✅

```

---

Se quiser, posso mandar isso já formatado como arquivo `.md` pronto pra você salvar ou publicar.
```
