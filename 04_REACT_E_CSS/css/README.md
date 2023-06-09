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

* É possível aplicar condicionais para deixar o estilo inlne dinâmico

## Classes dinâmicas no CSS

* Alternativa mais interessante do que deixar estilos dinâmicos inline
* Muda-se a classe do css dinamicamente

## CSS modules

* É um recurso scoped, ou seja, podemos trabalhar com um css pra cada componente, sem vazamentos
* Convençãopro nome do componente: Componente.module.css
* Diferenças pra uso:
  * Na hora de importar o css dentro do componente:
    ```js
    import styles from "./Componente.module.css"
    ```

  * Para usar o estilo na classe (em ordem de melhor uso):
    ```jsx
    <elemento className={styles.my-style}></elemento>
    <elemento className={styles["my-style"]}></elemento>
    <elemento className={styles.my_style}></elemento>
    ```
    Lembrando q em JS, pode-se chamar um attr do obj como se fosse um elemento de hash
