# Curso-Vue-Completo
Esse manual foi feito por mim com base no curso da Udemy:
> [Curso completo da udemy](https://www.udemy.com/course/vue-js-completo/). :mortar_board:

## Índice

### Capítulo 1: Usando VueJS para Interagir com a DOM 
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
* [Sintaxe reduzida](#reduzida)
* [Estilo Dinâmico e classes CSS](#estilo)
* [Estilo Dinâmico e classes CSS 2](#estilo2)
* [Estilo Dinâmico e classes CSS 3](#estilo3)
* [Estilo Dinâmico sem classe](#semclasse)

<a id="capitulo2"></a>
### Capítulo 2: Usando Condicionais & Renderização de Listas

* [Condicional: v-if e v-else](#vif)
* [Condicional: v-else-if](#velse)
* [Condicional: v-else-if com Template](#template)
* [Diretiva v-show](#vshow)
* [Renderizando Lista com v-for](#vfor)
* [Acesso ao índice atual da lista](#listai)
* [Usando v-for com template](#vfortemplate)
* [Iterando em Objetos](#interandoobjetos)
* [Identificando os Elementos no v-for (key)](#key)
* [ Iterando em uma Lista de Números](#listanumero)

<a id="capitulo3"></a>
### Capítulo 3: Entendendo a Instância Vue
* [Usando Múltiplas Instâncias Vue](#multvue)
* [Acessando a Instância Vue Externamente](#exvue)
* [Como o VueJS Gerencia os Dados e Métodos](#gerencia)
* [Montando um Template](#mount)
* [Usando Componentess](#usandocomponentes)
* [O Ciclo de Vida da Instância Vue](#ciclodevida)


<a id="capitulo4"></a>
### Capítulo 4: Fluxo de Desenvolvimento "Real" Usando Vue CLI
* [Instalando o Node.JS](#node)
* [Por que Precisamos de um Servidor Web?](#servidorNode)
* [Instalando o Vue CLI e Criando um Novo Projeto](#instalandovuecli)
* [Entendendo os Arquivos ".vue"](#entendendoarquivovue)
* [Como Construir sua APP para Produção](#appproducao)
* [Criando Preset](#preset)
* [Adicionando Plugin electron (para rodar a aplicação no desktop)](#adicionandopluginselectron)

<a id="capitulo5"></a>
### Capítulo 5: Introdução aos Componentes
* [Criando um componente](#criandocomponente)
* [Declaração de componentes](#declaracaocomponentes)
* [Usando CSS com Escopo de Componente(scoped)](#scoped)
* [Nomes para componentes](#nomescomponentes)
* [Comunicação direta com props](#props)

# Capítulo 1: Usando VueJS para Interagir com a DOM 
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
## Interpolação 

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
## Two-Way-Binding (v-model) :arrows_clockwise:

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
## Propriedades computadas :computer:

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
## Propriedade watch :tv:

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


<a id="reduzida"></a>
## Sintaxe reduzida 

> eventos **v-on** podem ser substituídos por **@** e o **v-bind** por **:**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>{{ contador }}</p>
    <button @click="somar">Somar 1</button>
    <hr>
    <input type="text" :value="contador">
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


<a id="estilo"></a>
## Estilo dinâmico e classes CSS :tshirt:

> Aplicar estilo do CSS diretamente no template, é usado **:class="{ (nome da classe): (valor booleano)}"** ex: **:class="{c1: true}**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<style>
    #app{
        display: flex;
        justify-content: space-around;
    }

    .demo{
        width: 100px;
        height: 100px;
        background-color: gray;
    }

    .c1 {
        background-color: red;
    }

    .c2 {
        background-color: green;
    }

    .c3 {
        background-color: blue;
    }
</style>

<div id="app">
    <div class="demo" :class="{c1: aplicarC1}"
         @click="aplicarC1 = !aplicarC1"></div>
    <div class="demo"></div>
    <div class="demo"></div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            aplicarC1: false
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

<a id="estilo2"></a>
## Estilo dinâmico e classes CSS 2 :art:

> Uma outra forma de aplicar as classes é usando a propriedade computed, consigo assim aplicar várias classes de uma forma mais enxuta.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<style>
    #app{
        display: flex;
        justify-content: space-around;
    }

    .demo{
        width: 100px;
        height: 100px;
        background-color: gray;
    }

    .c1 {
        background-color: red;
    }

    .c2 {
        background-color: green;
    }

    .c3 {
        background-color: blue;
    }
</style>

<div id="app">
    <div class="demo" :class="estilo" @click="aplicarC1 = !aplicarC1"></div>
    <div class="demo"></div>
    <div class="demo"></div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            aplicarC1: false
        },

        computed: {
            estilo(){
                return {
                    c1: this.aplicarC1,
                    c2: !this.aplicarC1
                }
            }
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**


<a id="estilo3"></a>
## Estilo dinâmico e classes CSS 3 :eyeglasses:

> Mudar o nome da classe CSS através de propriedades do VUE

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<style>
    .caixas{
        display: flex;
        justify-content: space-around;
    }

    .demo{
        width: 100px;
        height: 100px;
        background-color: gray;
    }

    .c1 {
        background-color: red;
    }

    .c2 {
        background-color: green;
    }

    .c3 {
        background-color: blue;
    }

    .girar {
        transform: rotate(45deg);
    }
</style>

<div id="app">
    <div class="caixas">
        <div class="demo" :class="estilo" @click="aplicarC1 = !aplicarC1"></div>
        <div class="demo"></div>
        <div class="demo" :class="[classeCSS]"></div>
    </div>
    <hr>
    <input type="text" v-model="classeCSS">
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            aplicarC1: false,
            classeCSS: "c1",
            teste: "girar"
        },

        computed: {
            estilo(){
                return {
                    c1: this.aplicarC1,
                    c2: !this.aplicarC1
                }
            }
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**


<a id="semclasse"></a>
## Estilo dinâmico sem classe :tophat:

> Lembrando que para aplicar o nome de uma classe no template que tenha **-** precisa usar aspas. ex: 'background-color'


```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<style>
    .caixas{
        display: flex;
        justify-content: space-around;
    }

    .demo{
        width: 100px;
        height: 100px;
        background-color: gray;
    }

</style>

<div id="app">
    <div class="caixas">
        <div class="demo" :style="{'background-color' : cor}"></div>
        <div class="demo" :style="[meuEstilo, {height: altura} ]"></div>
        <div class="demo"></div>
    </div>
    <hr>
    <input type="text" v-model="cor">
    <input type="text" v-model="largura">
</div>

<script>
    new Vue({
        el: '#app',
        data: {
           cor: 'red',
           largura : '300',
           altura : 20
        },

        computed: {
            meuEstilo(){
                return{
                    backGroundColor: this.cor,
                    width : this.largura + 'px'
                }
            }  
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**


# Capítulo 2: Usando Condicionais & Renderização de Listas
<a id="vif"></a>
## Condicional v-if e v-else :performing_arts:

> **v-if** se a condição for true aparece o elemento, **se não** (v-else) aparece o outro elemento.

> Veja nos elementos, eles desaparecem na DOM conforme a condição.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p v-if="logado">Usuário Logado: {{ nome }}</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'Maria',
            logado: false
        }
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="velse"></a>
## Condicional v-else-if :performing_arts:

> Construir vários if aninhados.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p v-if="logado">Usuário Logado: {{ nome }}</p>
    <p v-else-if="anonimo">Navegando como anônimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo">
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'Maria',
            logado: false,
            anonimo: false
        }
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="template"></a>
## Condicional v-else-if com template

> Com a tag **template** do html 5, conseguimos envolver nossas tags sem o template aparecer na DOM.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <template v-if="logado">
        <p>Usuário Logado: {{ nome }}</p>
        <p>Perfil: admin</p>
    </template>
   
    <p v-else-if="anonimo">Navegando como anônimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo">
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'Maria',
            logado: false,
            anonimo: false
        }
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="vshow"></a>
## Diretiva v-show 

> Com a diretiva **v-show**, o elemento não desaparece da DOM, apenas é usado um estilo para ele ficar display:none.
> **v-show** não tem "else", basta aplicar uma negação a ele.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <template v-if="logado">
        <p>Usuário Logado: {{ nome }}</p>
        <p>Perfil: admin</p>
    </template>
   
    <p v-else-if="anonimo">Navegando como anônimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo">
    <hr>
    <footer v-show="logado">
        Feito para você! {{ nome }}
    </footer>
    <footer v-show="!logado">
        Feito para você desconhecido
    </footer>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'Maria',
            logado: false,
            anonimo: false
        }
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo2)**



<a id="vfor"></a>
## Renderizando Lista com v-for 

> Com **v-for** eu consigo fazer algo semelhante ao **for each**

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="cor in cores">{{ cor }}</li>
    </ul>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['azul', 'verde', 'amarelo', 'rosa']
        }
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="listai"></a>
## Acesso ao índice atual da lista 

> O segundo parâmetro sempre será o segundo valor mais importante, nesse caso o índice. **v-for="(cor, indice) in cores" **

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="(cor, indice) in cores">{{ indice }} - {{ cor }}</li>
    </ul>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['azul', 'verde', 'amarelo', 'rosa']
        }
    })
</script>

<style>
    ul{
        list-style-type: none;
    }
</style>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="vfortemplate"></a>
## Usando v-for com template

> tag **template** sempre ficará oculta na DOM.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="(cor, indice) in cores">{{ indice }} - {{ cor }}</li>
    </ul>

    <hr>
    <template v-for="(cor, indice) in cores">
        <h1>{{ cor }}</h1>
        <p>{{ indice }}</p>
    </template>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['azul', 'verde', 'amarelo', 'rosa']
        }
    })
</script>

<style>
    ul{
        list-style-type: none;
    }
</style>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="interandoobjetos"></a>
## Interando em objetos

> Nesse caso, o segundo parâmetro de maior importante será a chave, e o terceiro o índice.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="pessoa in pessoas">
            <span v-for="(valor, chave, index) in pessoa">
               {{ chave }} = {{ valor }} ({{index}})
            </span>
        </li>
    </ul>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['azul', 'verde', 'amarelo', 'rosa'],
            pessoas: [
                {nome: 'Ana', idade: 26, peso: 59},
                {nome: 'Guilherme', idade: 22, peso: 89}
            ]
        }
    })
</script>

<style>
    ul{
        list-style-type: none;
    }
</style>
```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="key"></a>
## Identificando os Elementos no v-for (key)

> o atributo key é apenas um atributo que visa auxiliar o Vue no controle de alterações em listas. Para que o que está sendo apresentado na tela, reflita exatamente o que está no array.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="cor in cores" :key="cor">{{ cor }}</li>
    </ul>

    <input type="text" v-model="cor">
    <button @click="cores.push(cor)">Adicionar</button>
    
</div>

<script>
    new Vue({
        el: '#app',
        data: {
           cor: '',
           cores: ['amarelo', 'verde', 'azul', 'roxo', 'vermelho']
        }
    })
</script>

```
**[⬆ Voltar para o índice](#capitulo2)**


<a id="listanumero"></a>
##  Iterando em uma Lista de Números

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <ul>
        <li v-for="numero in 20">{{numero}}</li>
    </ul> 
</div>

<script>
    new Vue({
        el: '#app',
    })
</script>

```
**[⬆ Voltar para o índice](#capitulo2)**



# Capítulo 3: Entendendo a Instância Vue

<a id="multvue"></a>
##  Usando Múltiplas Instâncias Vue

> Não é usual usar múltiplas instâncias vue, mas esse capítulo é para mostrar que isso é possível

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app1">
    {{titulo1}}
    <button @click="alterar">Alterar</button>
</div>

<div id="app2">
    {{titulo2}}
    <button @click="alterar">Alterar</button>
</div>

<script>
    new Vue({
        el: '#app1',
        data: {
            titulo1: 'teste1'
        },
        methods: {
            alterar(){
                this.titulo1 += '!!!'
            }
        }
    })

    new Vue({
        el: '#app2',
        data: {
            titulo2: 'teste2'
        },
        methods: {
            alterar(){
                this.titulo2 += '!!!'
            }
        }
    })
</script>

```
**[⬆ Voltar para o índice](#capitulo3)**


<a id="exvue"></a>
##  Acessando a Instância Vue Externamente

> Consigo acessar dados de uma instância Vue dentro de outra e acessar dados da Vue através de javascript puro.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app1">
    {{titulo1}}
    <button @click="alterar">Alterar</button>
</div>

<div id="app2">
    {{titulo2}}
    <button @click="alterar">Alterar</button>
</div>

<script>
    const vm1 = new Vue({
        el: '#app1',
        data: {
            titulo1: 'teste1'
        },
        methods: {
            alterar(){
                vm2.titulo2 += '???'
            }
        }
    })

   const vm2 = new Vue({
        el: '#app2',
        data: {
            titulo2: 'teste2'
        },
        methods: {
            alterar(){
                vm1.titulo1 += '!!!'
            }
        }
    })

    setTimeout(() => {
        vm1.titulo1 = 'Alterado pelo timer'
    }, 2000)
</script>
```
**[⬆ Voltar para o índice](#capitulo3)**


<a id="exvue"></a>
##  Acessando a Instância Vue Externamente

> Consigo acessar dados de uma instância Vue dentro de outra e acessar dados da Vue através de javascript puro.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app1">
    {{titulo1}}
    <button @click="alterar">Alterar</button>
</div>

<div id="app2">
    {{titulo2}}
    <button @click="alterar">Alterar</button>
</div>

<script>
    const vm1 = new Vue({
        el: '#app1',
        data: {
            titulo1: 'teste1'
        },
        methods: {
            alterar(){
                vm2.titulo2 += '???'
            }
        }
    })

   const vm2 = new Vue({
        el: '#app2',
        data: {
            titulo2: 'teste2'
        },
        methods: {
            alterar(){
                vm1.titulo1 += '!!!'
            }
        }
    })

    setTimeout(() => {
        vm1.titulo1 = 'Alterado pelo timer'
    }, 2000)
</script>
```
**[⬆ Voltar para o índice](#capitulo3)**



<a id="gerencia"></a>
##  Como o VueJS Gerencia os Dados e Métodos

> Aqui, estou adicionando uma nova propriedade para minha instância  **vm.novainfo** porém quando vou renderizar na tela, acontece o erro,
esse dado não é reativo, pois não declarei ele dentro da minha instância Vue.

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    {{titulo}} {{ novaInfo}}
    <button @click="alterar">Alterar</button>
</div>

<script>
    const vm = new Vue({
        el: '#app',
        data: {
            titulo: 'teste'
        },
        methods: {
            alterar(){
                this.titulo += '???'
            }
        }
    })

    vm.novaInfo = 'Teste'
    console.log(vm.novaInfo)

</script>
```
**[⬆ Voltar para o índice](#capitulo3)**


<a id="mount"></a>
##  Montando um Template

> Template aqui é uma propriedade da instância Vue, uso crases ` ` para conseguir escrever em mais de uma linha. O template pode ser montado
com o método **$mount(#app)** passando o #app ou com javascript puro como mostrando na última linha

```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">

</div>

<script>
    const vm = new Vue({
        template: `
            <div>
                <h1>{{ aula }}</h1>
                <h2>{{ modulo }}</h2>
                <button @click="alterarAula">Alterar Aula</button>
                <button @click="alterarModulo">Alterar Módulo</button>
            </div>
        `
        ,
        data:{
            aula: 'Aula: montando instância vue',
            modulo: 'Modulo: Instância Vue'
        },
        methods: {
            alterarAula(){
                this.aula += '#'
            },
            alterarModulo(){
                this.modulo += '#'
            }
        }
    })

    //vm.$mount('#app')
    vm.$mount()
    document.querySelector('#app').appendChild(vm.$el)
</script>
```
**[⬆ Voltar para o índice](#capitulo3)**


<a id="usandocomponentes"></a>
##  Usando componentes

> Essa não é a melhor forma de usar componentes.

> Repare que o **data** é usado como função, para que cada componentes tenha suas próprias propriedades, 
se fosse passado como na instância, todo componentes teriam os mesmo dados alterados. Com a função ele sempre retorna um diferente.

> Componentes são usados como tags HTML.
 
```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <comp></comp>
    <comp></comp>
    <comp></comp>
</div>

<script>
    Vue.component('comp', {
        template: `
            <div>
                <h1>{{ aula }}</h1>
                <h2>{{ modulo }}</h2>
                <button @click="alterarAula">Alterar Aula</button>
                <button @click="alterarModulo">Alterar Módulo</button>
            </div>
        `
        ,
        data: function(){
            return{
                aula: 'Aula: montando instância vue',
                modulo: 'Modulo: Instância Vue'
            }
        },
        methods: {
            alterarAula(){
                this.aula += '#'
            },
            alterarModulo(){
                this.modulo += '#'
            }
        }
    })

    const vm = new Vue({
        el: '#app', 
    })

</script>
```
**[⬆ Voltar para o índice](#capitulo3)**


<a id="ciclodevida"></a>
##  Ciclo de vida da instância Vue

> Todo o ciclo de como é feito a instância.
 
```html
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '#'">Alterar Titulo</button>
    <button @click="$destroy()">Destruir</button>
</div>

<script>
    const vm = new Vue({
        el: '#app',
        data: {
            titulo: 'Ciclo de vida'
        },
        beforeCreate() {
            console.log('Antes de criar')
        },
        created(){
            console.log('Criado')
        },
        beforeMount() {
            console.log('Antes de montar! (DOM)')
        },
        mounted() {
            console.log('DOM montada')
        },
        beforeUpdate() {
            console.log('Antes de atualizar')
        },
        update(){
            console.log('Atualizado')
        },
        beforeDestroy() {
            console.log('Antes de destruir')
        },
        destroyed() {
            console.log('Destruido')
        },
    })
</script>
```
**[⬆ Voltar para o índice](#capitulo3)**


# Capítulo 4: Fluxo de Desenvolvimento "Real" Usando Vue CLI

<a id="node"></a>
## Instalando o Node.JS

> Para esse capítulo precisamos usar o node.js.

> Vamos usar também o NPM, que é um gerenciador de pacotes para node.js.

>Instale o plugin **vetur** no vs code.
 

[Download node](https://nodejs.org/en/)

> Baixe a versão LTS do **node**, que é mais estável.

**[⬆ Voltar para o índice](#capitulo4)**


<a id="servidorNode"></a>
##  Por que Precisamos de um Servidor Web?

> Apesar de que o vue.js executa no client (se abrirmos o arquivo, estamos simulando o que o usuário vai ver), esse arquivo foi servido através de um 
protocólo HTTP (servidor).

> O protocólo HTTP não tem as mesmas funcionalidades do que um protocólo do tipo File ( que é quando abrimos o arquivo na nossa máquina).

> Logo, o servidor é importante para testarmos a aplicação em cenários mais realistas ( Requisições Ajax precisam de um servidor).

> O próprio Vue CLI internamente tem um servidor baseado em node, todo configurado, com auto reload e etc.

> Vue CLI te da toda a estrutura do projeto, configurações do projeto, build para desenvolvimento (que inicia um servidor),
build de produção, etc.

**[⬆ Voltar para o índice](#capitulo4)**


<a id="instalandovuecli"></a>
##  Instalando o Vue CLI e Criando um Novo Projeto

> Para instalar o vue CLI na sua máquina usando NPM, use o comando:
```javascript
npm i -g @vue/cli
```

> Agora o comando "vue" está disponível. Para criar um novo projeto, basta usar o comando:
```javascript
vue create (nomeprojeto)
```

> Agora use os comandos indicados para entrar na pasta (cd) e para iniciar um servidor:
```javascript
npm run serve
```

**[⬆ Voltar para o índice](#capitulo4)**


<a id="entendaarquivovue"></a>
##  Entendendo os Arquivos ".vue"

> Repare que o arquivo App.vue tem 3 secções: **template**, **script** e **style**. Faça um teste apagando tudo e escreva "olá mundo" no template,
dentro de uma div. Na parte do script, vamos ter as mesmas propriedades da instância Vue, faça um teste com **data**, mas lembre-se que por ser um
componente, data precisa ser usada como função, para que seus dados não sejam iguais para todos os componentes usados. Adicione um estilo também, pegando pelo id.

```html
<template>
  <div  id="app">
      {{ titulo }}
      <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      titulo: "Teste data usando Vue.JS"
    }
  }
}
</script>

<style>
  #app{
    background-color: chocolate;
    color: #ffffff;
  }
</style>
```


**[⬆ Voltar para o índice](#capitulo4)**


<a id="appproducao"></a>
##  Como Construir sua APP para Produção

> Repare que não existe um arquivo app.js, esse arquivo javascript fica em memória. Para gerar esses arquivos e as pastar de produção,
precisamos usar o comando:

```
npm run build
```
> Repare que gerou a pasta **dist**, agora teremos nosso arquivo **html** com uma única linha, para ser o mais pequeno possível, agora sim temos os arquivos js
gerados. Com o comando **npm run build**, tiramos o arquivo js da memória e de fato colocamos no disco.

**[⬆ Voltar para o índice](#capitulo4)**

<a id="preset"></a>
## Criando Preset

> Quando executamos o comando **vue create (nome)** aparece a opção para escolher um preset (que são plugins e configurações já definidos). Escolha
a opção para definir manualmente os plugins, agora com a tecla de espaço, marque algumas opções, por exemplo: PWA, router, Vuex, Css Pre-processors, depois
tecle enter e siga esses passos: 
             2x. 
             De um sim (Y). 
             Sass/SCSS (with node-sass). P
             Primeira opção 
             Primeira novamente. 
             Package.json
             Salvar. 
             Por fim escolha o nome do preset. Pronto, está criando um preset.

> Agora, quando começar um novo projeto, irá aparecer o seu preset como opção, ele terá tudo configurado como foi feito. O seu projeto terá mais coisas
dentro dele.

**[⬆ Voltar para o índice](#capitulo4)**

<a id="adicionandopluginselectron"></a>
## Adicionando Plugin electron (para rodar a aplicação no desktop)

> Entre em package.json, e veja nas devDependencies, alguns plugins oficiais, sabemos disso pois começa com @vue/cli-plugin-babel, agora
plugins criados por terceiros usam o prefixo vue-cli-plugin. Na nossa aplicação vamos usar o plugin electron-builder, como o prefixo é padrão, 
para adicionar ao projeto basta usar o nome do plugin sem o prefixo, use o comando:
```javascript
vue add electron-builder
```
> Esse plugin é vai construir sua aplicação para desktop. Use o comando criado dentro do package.json, que é:

```javascript
npm run electron:serve
```

> Ele abrirá sua aplicação no desktop.

> Para mais opções adicione também o plugin:

```javascript
vue add vuetify
```

**[⬆ Voltar para o índice](#capitulo4)**


### Capítulo 5: Introdução aos Componentes


<a id="criandocomponente"></a>
##  Criando um componente

> Depois de criado a aplicação com **vue create**, vamos criar um componente **Contador.vue** dentro da pasta src.
 
```html
<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contador: 0
        }
    },

    methods: {
        adicionar(){
            this.contador++
        },

        subtrair(){
            this.contador--
        }
    }
}
</script>

<style>
    .contador span{
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>
```

> Dentro do arquivo **main.js** vamos importar esse componente:

```javascript
 import Contador from './Contador.vue'
```

> Depois declarar esse componente como global ( global: pode ser usado em qualquer template), passando o nome que será usado:
```javascript
 Vue.component('app-contador', Contador)
```

> O arquivo main.js completo ficará assim:
```javascript
import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false

Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

> Como o arquivo App.vue sempre começará a aplicação, podemos colocar o componente nele como se fosse um elemento <app-contador /> :

```html
<template>
<div id="app">
   <h1>Contadores</h1> 
   <app-contador />
   <app-contador />
   <app-contador />
</div>
</template>

<script>
export default {
}
</script>
```

**[⬆ Voltar para o índice](#capitulo5)**


<a id="declaracaocomponentes"></a>
## Declaração de componentes

> Declaração global, qualquer template tem acesso:

```javascript
 Vue.component('app-contadores', Contadores)
```

> Declaração local, apenas o componente que ele foi declarado tem acesso:

```javascript
 import Contador from './Contador.vue'

 export default {
    components: { 'app-contador' : Contador }    
 }
```

**[⬆ Voltar para o índice](#capitulo5)**



<a id="scoped"></a>
## Usando CSS com Escopo de Componente (scoped)

> Quando definimos um estilo para o nosso componente, esse estilo vai valer para todos os elementos, exemplo:

```html
<style>
    div {
        border: 1px solid red;
    }
</style>
```
> Esse estilo da div vai valer para todas os componentes do meu projeto. Para que o estilo fique somente para o componente específico, é
preciso escrever **scoped** no style.

```html
<style scoped>
    div {
        border: 1px solid red;
    }
</style>
```

> O estilo é transmitido para o filho direto do componente, mas não para o filho do filho, ou seja, ele não vai se propagar indefinidamente!
> Veja em inspecionar elemento, que é gerado uma propriedade no elemento, com um hash para identificar cada um deles, exemplo de como vai
aparecer : **data-v-6cbbf471** , isso é o vue aplicando o estilo nos elementos. Para procurar os que são afetados pelo estilo, basta escrever
isso no console, por exemplo: **document.querySelectorAll('div[data-v-6cbbf471]')**

**[⬆ Voltar para o índice](#capitulo5)**


<a id="nomescomponentes"></a>
## Nomes para componentes

> Lembrando que se for definr um nome com hífen, é preciso usar aspas em volta, mas se exportar o componente usando camel case ou pascal case,
posso simplesmente usar o hífen aonde a letra fica maíscula. Ex: 

```javascript
<app-usuario-info />


import AppUsuarioInfo from './UsuarioInfo'

export default {
    components: { AppUsuarioInfo }
}
```

> Usando aspas em volta ficaria assim:
```html
<app-usuario-info />


import AppUsuarioInfo from './UsuarioInfo'

export default {
    components: { 'app-usuario-info' : AppUsuarioInfo }
}
```


**[⬆ Voltar para o índice](#capitulo5)**

<a id="props"></a>
## Comunicação direta com props

> Propriedades nas tags são aceitas pelo HTML, por exemplo <div class=""teste> Olá mundo </div>, class é uma propriedade, assim como
id, charset, entre outras. Agora para passar uma propriedade de um componente para outro, posso criar propriedades personalizadas.

> No componente pai, eu tenho dados como "nome" :

```html
<template>
   <div id="pai">
       <h1>Eu sou o componente pai!</h1>
       <app-filho />
   </div>
</template>

<script>
import Filho from './Filho.vue'

export default {
    components: { 'app-filho' : Filho},
    data() {
        return {
            nome: "Joao"
        }
    }
}
</script>
```

> Agora eu quero passar esse "nome" para o componente filho, uma forma de fazer isso, é definindo no componente filho,
a propriedade "props", que vai aceitar propriedades passadas pelo componente pai.

```html
<template>
   <div class="filho">
       <h2>Eu sou o componente Filho!</h2>
       <p>{{ nome }}</p>
   </div>
   
</template>

<script>

export default {
    props: ['nome']
}
</script>

<style scoped>
 
</style>
```

> Agora, basta passar a propriedade na tag **app-filho**:

```html
<template>
   <div id="pai">
       <h1>Eu sou o componente pai!</h1>
       <app-filho :nome="nome"/>
   </div>
</template>

<script>
import Filho from './Filho.vue'

export default {
    components: { 'app-filho' : Filho},
    data() {
        return {
            nome: "Maria"
        }
    }
}
</script>

<style>
   #pai {
       color: rgb(60, 60, 170)
   }
</style>
```

**[⬆ Voltar para o índice](#capitulo5)**

<a id="Validando propriedades"></a>
## Validando propriedades

> Vamos supor que você tenha uma propriedade **nome** que será passada do componente pai para o filho, e no componente filho ela execute esse método:

```javascript
  this.nome.split('').reverse().join('')
```
> Esse método vai inverter a ordem de nome. Agora imagine que em nome você passe um número, bolean, ou qualquer tipo que não seja string, isso vai gerar um erro,
uma forma de tratar esse erro é especificar o tipo da propriedade a ser recebida:

```javascript
  props: {
        nome: String
    }
```

> Dessa forma é mais fácil encontrar o erro no console, eu especifico o tipo esperado, repare que o tipo tem letra maiúscula.
> Posso também esperar mais de um tipo, dessa forma:

```javascript
  props: {
        nome: [String, Array]
    }
```

> Também posso abrir minha propriedade nome como se fosse um objeto, dessa forma:

```javascript
  props: {
        nome: {
            type: String,
            require: true
        }
    }
```

> To dizendo que o tipo é String, é obrigatório que se passe a propriedade, usando o **require: true**
> Também posso passar a propriedade default, quando nada for passado ele usará o que estiver em default:

```javascript
  props: {
        nome: {
            type: String,
            default: 'joão'
        }
    }
```

**[⬆ Voltar para o índice](#capitulo5)**


<a id="nomescomponentes"></a>
## Comunicação Indireta com Eventos Personalizados

> Existe uma forma de passar o evento do componente filho para o componente pai, passando dentro da função: 

```javascript
     reiniciarNome(){
            this.nome = "Pedro",
            this.$emit('nomeMudou', this.nome)
        }
```
> Estou criando um evento chamado "nomeMudou", que está associado com a propriedade "nome".
> Agora é só "ouvir" esse evento, como se fosse um evento normal (@click ou qualquer outro).

```javascript
    <app-usuario-info :nome="nome" @nomeMudou="nome = $event"/>
```

> Dentro do componente pai eu estou passando o evento. o $event, vai ter o valor do "this.nome". No caso estou alterando o valor da variável nome,
com o $event.

> Posso também, passar um objeto no **this.$emit** : 
```javascript
     reiniciarNome(){
            const antigo = this.nome
            this.nome = "Pedro",
            this.$emit('nomeMudou', {
              novo: this.nome,
              antigo
            })
        }
```
> Agora consigo acessar essas propriedades usando **$event.novo** ou **$event.antigo**
```javascript
     <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                @nomeMudou="nome = $event.antigo + $event.novo "/>
            <app-usuario-editar />
        </div>
```

<a id="nomescomponentes"></a>
## Comunicação Indireta com Callback

> Outra forma de comunicação entre filho e pai, é ultilizar callbacks 

```javascript
     <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :reiniciarFn="reiniciarNome"/>
            <app-usuario-editar />
        </div>
```
> No componente pai, estou passando uma função **reiniciarNome** pela propriedade **ReiniciarFn**

```javascript
      props: {
        nome: {
            type: String,
            require: true
        },

        reiniciarFn: Function
    },
```

> Agora delclaro a função nas propriedades do componente filho, do tipo **Function**.

> E posso chamar essa propriedade disparando um evento como o click:
```javascript
   <button @click="reiniciarFn">Reiniciar Nome (call back)</button>
```

**[⬆ Voltar para o índice](#capitulo5)**


