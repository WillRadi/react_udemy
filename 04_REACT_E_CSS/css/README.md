# React e CSS

## CSS Global

* arquivo `src/index.css`

## CSS de componente

* É o arquivo CSS dentro dos componentes, com o mesmo nome que ele (App.js e App.css, por exemplo)
* Importante: Mesmo estando dentro de componentes, se as regras forem iguais, haverá sobreposição. O CSS não é scoped
* Pra evitar "vazamento" do CSS, é importante q se use regras mais específicas

## Inline style

* Atribuir atibuto `style` ao elemento
* Não muito interessante, pois dificulta manutenção
* Sintaxe:

```jsx
  // Duas chaves: uma informando q é um valor dinâmico (JS) e outra é o objeto.
  // atributos style são passados por meio de objetos JS
  // valores sempre entre aspas, como qualquer objeto JS
  <elemento style={{ atributo: "valor", atributoCamelCase: "valor"}}>
```
