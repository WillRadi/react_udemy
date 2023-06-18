# React e formulários

## Criação de campos

* Atrbuto `labelFor`, da tag `label`, deve bater com o valor da propriedade `name`, da tag `input`
* Prática mais comum: Usar label envolvendo o input

## Manipulação de dados inputados

* Modo 1:
  * usa-se useState
  * no input, coloca-se o evento onChange e chama o handle da referente ao input (handleName)
  * handle é declarado recebendo um evento como parâmetro.
  * valor do que foi digitado está em `evento.target.value`

* Modo 2:
  * Mesmo esquema do modo 1, mas passando a função do onChange inline
  * função "handle" se torna desnecessária

## Envio de formulário

* Usa-se o evento `onSubmit` na tag `form` (geralmente a função é chamada de handleSubmit, seguindo o padrão de funções chamadas a partir de eventos, iniciarem com `handle`)
* Usar sempre o preventDefault pra evitar recarregar a página
* Nessa etapa que fazemos validações, envio de dados pro BE, reset dos dados, etc

## Controlled inputs

* Usado para preencher dados na propriedade `value` de um input
* Geralmente usado em formulários de edição, no qual já existem dados preenchidos do BE
* Preenchemos o valor default do useState referente ao campo com o valor do BE

## Outros tipos de input

* Textarea: identico ao input text (usa-se apenas outra tag: textarea, q tem abertura e fechamento)
* Select:
  * usamos a tag `select` q tem abertura e fechamento
  * dentro da tag, usamos as tags `option` para cada opção
    * cada `option` tem q ter a propriedade `value`, q é o que importa pro BE
  * pega os valores como em qqr outra tag: com o evento `onChange`
