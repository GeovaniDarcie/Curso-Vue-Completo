# Curso-Vue-Completo
Esse manual foi feito por mim com base no curso da Udemy:
> [Curso completo da udemy](https://www.udemy.com/course/vue-js-completo/). :mortar_board:

## Índice
* [Hello World](#ancora)
* [Usando Funcao](#usando-funcao)
* [Entendendo o this](#entendendo-o-this)
* [Diretiva v bind](#diretiva-v-bind)
* [Diretiva v-on](#diretiva-v-on)
* [Diretiva v-html](#diretiva-v-html)

<a id="hello-world></a>
## Hello World :raised_hand:

> Uma forma de usar o Vue, é copiando a tag script da [documentação](https://vuejs.org/v2/guide/) e colando no seu documento.

> Dentro das tags HTML existe um conteúdo de texto, as chaves duplas **{{ }}** funcionam como interpolação do texto com o atributo do Vue.

> Instanciando uma nova Vue **new Vue()** com o construtor, repare que não precisei fazer **v = new Vue()**  pois o Vue já faz todo esse processo de colocar na variável automaticamente.
 
> O atributo **el** do Vue, representa qual trecho do HTML vou manipular passando o **ID**.

``` html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ titulo }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Hello World!'
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

<a id="usando-funcao></a>
## Usando Funcao :wrench:

> Um atributo **methods** adicionado ao Vue para adicionar minhas funções (ou métodos), repare que em **data** eu abro um objeto, a mesma coisa em **methods**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando VueJs!'
        },
        methods: {
            saudacao: function(){
                return 'Boa semana'
            }
        }
    })
</script> 
```

## Entendendo o this :wrench:

> Repare que não preciso usar **{{ Vue.methods.saudacao }}** e também **{{ Vue.data.titulo }}** , o Vue joga todas as propriedades para a raiz dele, e o **this** referencia o Vue, ou seja, pelo **this** consigo acesso direto as propriedades

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando VueJs!'
        },
        methods: {
            saudacao: function(){
                console.log(this)
                return this.titulo
            }
        }
    })
</script>
```


## Diretiva v bind  :wrench:

> O HTML permite que eu crie propriedades personalizadas, o Vue usou isso para criar as suas próprias e chamou isso de **diretivas**, ex: **v-bind**, **v-model**, etc.

> Para usar os atributos do Vue nas propriedades, não posso fazer assim `<a v-href="{{link}}">Google</a> `, as chaves só funcionam pois dentro das tags do HTML eu tenho conteúdo de texto e elas fazem então a interpolação, agora para as propriedades, tem que utilizar as **diretivas** do Vue, ex: `<a v-bind:href="link">Google</a>`

> O **v-bind** faz uma ligação do atributo link do Vue para o HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <a v-bind:href="link">Google</a>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            link: 'http://google.com.br'
        },
    })
</script>
```

## Diretiva v-on  :wrench:

> **v-on** esperando um evento acontecer para chamar uma função.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <input v-on:input="saudacao">{{ titulo }}</input>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando VueJs!',
        },
        methods: {
            saudacao: function(){
                this.titulo = "Mudei o texto"
                return this.titulo
            }
        }
    })
</script>
```

## Diretiva v-html  :wrench:

> **v-html** Posso passar código HTML através de um atributo no Vue.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p v-html="linkHtml"></p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            linkHtml: '<a href="http://google.com.br">Google</a>'
        }
    })
</script>
```

## Evento v-on:click  :wrench:

> **v-on:click** Ao ser clicado o elemento dispara uma função.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ contador }}</p>
    <button v-on:click="somar">Somar 1</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0
        },
        methods: {
            somar(){
                this.contador++
            }
        }
    })
</script>
```

## Evento v-on:mousemove  :wrench:

> **v-on:mousemove** Ao passar o mouse em cima da tag `<p>`, é mostrado a posição do mouse.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ contador }}</p>
    <button v-on:click="somar">Somar 1</button>
    <p v-on:mousemove="atualizarXY"> Mouse: {{x}} e {{y}}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
            x: 0,
            y: 0
        },
        methods: {
            somar(){
                this.contador++
            },

            atualizarXY(event){
                console.log(event)
                this.x = event.clientX
                this.y = event.clientY
            }
        }
    })
</script>
```

## Parâmetro event  :wrench:

> Por padrão o Vue já reconhece o parâmetro event, posso usar sem passar nada na função `<button v-on:click="somar"` mas se eu passar outro parâmetro para a função e ainda sim quiser usar o evento, eu preciso usar o event assim `$event` com dólar na frente e o nome obrigatoriamente precisa ser **event**.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ contador }}</p>
    <button v-on:click="somar(5, $event)">Somar 1</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
        },
        methods: {
            somar(passo, ev){
                console.log(passo, ev)
                this.contador += passo
            },
        }
    })
</script>
```

## Eventos com input
### Utilizando Javascript Puro:

```html
<input type="text" onkeypress="alteraTitulo(event)">
<p id="title">Curso Vue</p>

<script>
    let p = document.querySelector("#title");

    function alteraTitulo(event){
        p.innerText = event.target.value;
    }
</script>
```

**[⬆ Voltar para o índice](#índice)**
### Agora utilizando Vue:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <input type="text" v-on:input="alteraTitulo">
    <p>{{ title }}</p>
</div>

<script>
    new Vue({
        el: "#app",
        data: {
            title: "Curso Vue"
        },

        methods: {
            alteraTitulo(event){
                this.title = event.target.value;
            }
        }
    })
</script> 
```
**[⬆ Voltar para o índice](#índice)**
