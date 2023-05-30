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

