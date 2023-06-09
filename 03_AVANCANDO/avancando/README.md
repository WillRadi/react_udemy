# Módulo 3

## Hooks

Geral:
  * São funções
  * Servem para guardar e alterar estado de algum dado
  * Começa com `use` (useState)

## Map (listagens em geral)

* Sempre precisa usar a propriedade `key`
  * Em último caso, qdo n houver ID, usar o index do map mesmo

## Previous state

* Permite pegar o valor anterior dentro do SET
* O primeiro argumento de um set, sempre será o previous state

## Renderização condicional

* Exemplo de if:
  { variavel && <p>imprime o paragrafo</p> }
* Devemos usar o ternário qdo se tem o else
  { variavel === 'true' ? (
    <div>aqui vem o SJX</div>
  ) : (
    <div>aqui vem o SJX</div>
  ) }

## Props

* Passar valores de um componente pai pro filho
* Props vem em um objeto no argumento da função do componente
  ```jsx
    <ComponenteFilho propName="valor">
  ```

* Podemos passar props com destructuring:
```js
const Componente = ({ prop1, prop2 }) => {}
```

* sem destructuring:
```js
const Componente = (props) => {
  return ( <>{props.prop1}</> )
}
```

### Children prop

* Usamos pra renderizar html entre tas tags que chamam um componente:

```jsx
<Componente>
  <p>HTML que vai dentro do componente</p>
</Componente>
```

* Dentro do componente, a `children prop` deve ser chamada como `children`
* Podemos chamar outras propriedades normalmente

### Funções como prop

* Função criada no componente pai e passada para o filho por meio de prop
```jsx
// Componente pai
const function propFunction = ({...})

<ComponenteFilho myFunction={propFunction} />
```

## React Fragments

* Usado pra 'simular' mais de um pai em um componente
* inicia o JSX sem uma div, pra n estragar o html: <> ..... </>
