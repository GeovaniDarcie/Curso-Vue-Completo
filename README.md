# Curso-Vue-Completo
Esse manual foi feito por mim com base no curso da Udemy:
> [Curso completo da udemy](https://www.udemy.com/course/vue-js-completo/). :mortar_board:

## Índice
* [Hello World](#hello)
* [Usando Função](#funcao)
* [Entendendo o this](#this)
* [Diretiva v-bind](#bind)
* [Diretiva v-on](#on)
* [Diretiva v-html](#html)
* [Diretiva v-click](#click)
* [Diretiva v-mousemove](#mousemove)
* [Parâmetro Event](#event)
* [Controlar teclas digitadas pelo usuário (v-on:keyup)](#teclas)
* [Eventos com Input](#input)
* [Interpolação](#interpolacao)
* [Two-way-binding (v-model)](#model)
* [Propriedades computadas](#computed)
* [Propriedade watch](#watch)

<a id="hello"></a>
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


<a id="funcao"></a>
## Usando Função :wrench:

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
**[⬆ Voltar para o índice](#índice)**


<a id="this"></a>
## Entendendo o this :point_right:

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
**[⬆ Voltar para o índice](#índice)**


<a id="bind"></a>
## Diretiva v-bind  :telephone_receiver:

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
**[⬆ Voltar para o índice](#índice)**


<a id="on"></a>
## Diretiva v-on  :on:

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
**[⬆ Voltar para o índice](#índice)**


<a id="html"></a>
## Diretiva v-html  :hammer:

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
**[⬆ Voltar para o índice](#índice)**


<a id="click"></a>
## Evento v-on:click  :mouse:

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
**[⬆ Voltar para o índice](#índice)**


<a id="mousemove"></a>
## Evento v-on:mousemove  :mouse2:

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
**[⬆ Voltar para o índice](#índice)**


<a id="event"></a>
## Parâmetro event  :clock130:

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
**[⬆ Voltar para o índice](#índice)**

<a id="teclas"></a>
## Controlar teclas digitadas pelo usuário (v-on:keyup) :computer:

> Fica muito mais fácil controlar quais teclas o usuário digitou, basta passar o nome da tecla **v-on:keyup.(nome da tecla)**. Para controlar duas teclas pressionadas juntas **v-on:keyp.(nomedatecla).(nomedatecla)**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <div>
        <label>Ativa após qualquer tecla:</label>
        <input type="text" v-on:keyup="solteiTecla">
    </div>

    <div>
        <label>Ativa após o enter:</label>
        <input type="text" v-on:keyup.enter="solteiEnter">
    </div>

    <div>
        <label>Ativa após o enter + alt:</label>
        <input type="text"  v-on:keyup.enter.alt="solteiEnter_Alt">
    </div>
    
</div>

<script>
    new Vue({
        el: '#app',
        methods: {  
            solteiTecla(){
                alert('apertei qualquer tecla')
            },

            solteiEnter(){
                alert('Apertei Enter')
            },

            solteiEnter_Alt(){
                alert('Apertei enter+alt')
            }
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**


<a id="input"></a>
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

<a id="interpolacao"></a>
## Interpolação  :clock130:

> Consigo escrever instruções simples de uma linha dentro das chaves duplas **{{}}**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ c }}</p>
    <p>{{ c >= 10 ? "É maior ou igual a 10" : "É menor e diferente de 10"}}</p>
    <p>Dobro do contador: {{ c * 2}}</p>
    <button v-on:click="contador">Aumenta 1</button> 
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            c: 0
        },

        methods: {
            contador(){
                this.c++
            }
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

<a id="model"></a>
## Two-Way-Binding  :clock130:

> Por enquanto com **v-bind*** os dados da minha instância Vue modificam apenas o template.

> Já os eventos ouvem no template e modificam apenas os dados da instância Vue que por sua vez modificam o template.

> Agora o **v-model** vai modificar ao mesmo tempo o template e os dados da minha instância Vue, funcionando como um espelho ou uma via de mão dupla.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
   <input type="text" v-model="titulo">
   <p>{{ titulo }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Vue Js'
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

<a id="computed"></a>
## Propriedades computadas :clock130:

> Quando existe alguma alteração na irteface os componentes são rendererizados novamente, então os métodos são invocados mesmo sem ter ligação com as propriedades alteradas. Existe uma propriedade no vue **computed*** que o método só vai ser invocado quando a propriedade que tem relação com ele é alterada.

> Propriedades computed são chamadas sem os pareteses **()**

> Repare que sem o **computed**, o método resultado() era chamado quando clicado em aumentar2, mesmo sem aumentar2 ter relação nenhuma com o método resultado, com o **computed** uma propriedade computada será apenas invocada quando uma propriedade que está relacionada a ela é atualizada!

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <button v-on:click="aumentar">Aumentar</button>
    <button v-on:click="contador2++">Aumentar2</button>
    <button v-on:click="diminuir">Diminuir</button>
    <p>Contador: {{ contador1 }} | {{ contador2 }}</p>
    <p>Resultado: {{ resultado }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            contador1: 0,
            contador2: 0
        },

        computed: {
            resultado(){
                console.log("É chamado apenas quando modifico contador1")
                return this.contador1 >= 5 ? 
                       "maior ou igual a 5" : "menor que 5"         
            }
        },

        methods: {
             aumentar(){
                this.contador1++        
            },
             diminuir(){
                this.contador1--           
            },
            /* 
            resultado(){
                console.log(É chamado quando modifico contador 2, mesmo sem ter relação)
                return this.contador >= 5 ? 
                       "maior ou igual a 5" : "menor que 5"         
            } */
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

<a id="watch"></a>
## Propriedade watch :clock130:

> Monitora a mudança da propriedade. 

>Precisa ter o mesmo nome das propriedades dos dados.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <button v-on:click="aumentar">Aumentar</button>
    <p>{{ contador }}</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
        },

        watch: {
            contador(novo, antigo){
               console.log(novo, antigo)
            }
        },

        methods: {
             aumentar(){
                this.contador++ 
            }   
        }     
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**



