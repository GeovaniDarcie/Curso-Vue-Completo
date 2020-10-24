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
* [Validando propriedades](#validandopropriedades)
* [Comunicação Indireta com Eventos Personalizados](#eventospersonalizados)
* [Comunicação Indireta com Callback](#callbacks)
* [Comunicação entre componentes irmãos](#irmaos)
* [Usando Event Bus para Comunicação entre Componentes Irmã…](#barramento)

<a id="capitulo6"></a>
### Capítulo 6: Uso Avançado de Componentes
* [Passando Conteúdo com Slots](#slots)
* [Como o Conteúdo do Slot é Estilizado](#slotestilo)
* [Usando Múltiplos Slots (Slots Nomeados)](#multiplosslots)
* [Componentes dinâmicos](#componentesdinamicos)
* [ Mantendo o Componente Dinâmico Vivo](#keepalive)
* [Métodos de Ciclo de Vida de um Componente Dinâmico](#ciclodevidacomponente)

<a id="capitulo7"></a>
### Capítulo 7: Manipulando Entrada de Usuário com Formulários
* [Modificar Entrada de Usuário com Modificadores de Input: lazy, string e number](#modificadorinput)
* [Usando <textarea> e Salvando Quebras de Linha](#textareamodel)
* [Usando Checkboxes e Salvando os Dados em um Array](#checkboxmodel)
* [Usando radio](#radiomodel)
* [Manipulando Combobox com select e option](#selectmodel)
* [Previnindo comportamento padrão do botão (prevent)](#prevent)

<a id="capitulo8"></a>
### Capítulo 8: Usando e criando diretivas Personalizadas
* [Algumas diretivas](#diretivas)
* [Criando diretiva simples](#diretivasimples)
* [Passando valor para a diretiva personalizada](#diretivavalor)
* [Passando Argumento para diretiva personalizada](#diretivaargumento)
* [Diretivas personalizadas com modificadores](#diretivamodificador)
* [Anotomia de uma diretiva](#diretivaanatomia)
* [Registrar diretivas localmente](#diretivalocal)
* [Usando Múltiplos Modificadores](#variosmodificadores)
* [Passando Valores mais Complexos para as Diretivas](#diretivascomplexo)

<a id="capitulo9"></a>
### Capítulo 9: Melhorando sua App com Filtros e Mixins
* [Criando um filtro local](#filtrolocal)
* [Filtro Global e Como Encadear Múltiplos Filtros](#filtroglobal)
* [Filtro com v-bind](#filtrobind)
* [Usando mixins](#mixins)

<a id="capitulo10"></a>
### Capítulo 10: Adicionando Animações e Transições
* [Bootstrap com Vue](#bootstrapvue)
* [Dist Bootstrap](#distbootstrap)
* [Criando Transição "Fade" com Propriedade CSS transition](#transicaovue)
* [Criando Transição "Slide" com Propriedade CSS animation](#animacao)

# Capítulo 1: Usando VueJS para Interagir com a DOM 
<a id="hello"></a>
## Hello World :raised_hand:

> Uma forma de usar o Vue, é copiando a tag script da [documentação](https://vuejs.org/v2/guide/) e colando no seu documento.

> Dentro das tags HTML existe um conteúdo de texto, as chaves duplas **{{ }}** funcionam como interpolação do texto com o atributo do Vue.

> Instanciando uma nova Vue **new Vue()** com o construtor.
 
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

> Uma propriedade **methods** na instância do Vue serve para adicionar minhas funções (ou métodos), repare que em **data** eu abro um objeto, a mesma coisa em **methods**

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

> Por enquanto com **v-bind** os dados da minha instância Vue modificam apenas o template.

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

> Quando existe alguma alteração na irteface os componentes são rendererizados novamente, então os métodos são invocados mesmo sem ter ligação com as propriedades alteradas. Existe uma propriedade no vue chamada **computed** que o método só vai ser invocado quando a propriedade que tem relação com ele é alterada.

> Propriedades computed são chamadas sem os pareteses **()**

> Repare que sem o **computed**, o método resultado() era chamado quando clicado em aumentar2, mesmo sem aumentar2 ter relação nenhuma com o método resultado, com o **computed** uma propriedade computada será apenas invocada quando uma propriedade que está relacionada a ela é atualizada!

> O computed é usado quando quero juntar dos dados em um só.

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

> eventos **v-on** podem ser substituídos por **@** e o **v-bind** por **:**(dois pontos)

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

>Consigo Aplicar estilo CSS diretamente no template usando **:class="{ (nome da classe): (valor booleano)}"** ex: **:class="{c1: true}**

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

> Uma outra forma de aplicar as classes css é usando a propriedade computed, consigo assim aplicar várias classes de uma forma mais enxuta.

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

> Lembrando que para aplicar o nome de uma classe no template que tenha **-** (hífe) preciso usar aspas. ex: 'background-color'


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
> Como é aplicado apenas um estilo, o v-show é mais performático do que o v-if, pois o v-if altera a DOM.

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

<a id="validandopropriedades"></a>
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


<a id="eventospersonalizados"></a>
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

<a id="callbacks"></a>
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

> Agora declaro a função nas propriedades do componente filho, do tipo **Function**.

> E posso chamar essa propriedade disparando um evento como o click:
```javascript
   <button @click="reiniciarFn">Reiniciar Nome (call back)</button>
```

**[⬆ Voltar para o índice](#capitulo5)**

<a id="irmaos"></a>
## Comunicação entre componentes irmãos

> Não existe comunicação direta entre irmãos. Uma forma de fazer, seria:
o filho gera um evento para o pai, e o pai altera não só o filho que gerou o evento, mas também os outros filhos, se o pai tiver propriedades
associadas aos filhos.
 
Então: Filho1 altera o pai, e depois o pai altera o valor do filho1 e do filho2.            


**[⬆ Voltar para o índice](#capitulo5)**


<a id="barramento"></a>
## Usando Event Bus para Comunicação entre Componentes Irmãos

> Posso criar dentro da pasta **src** um barramento.js, que irá instanciar uma vue.

**barramento.js**
```javascript
   import Vue from 'vue'
   export default new Vue()
```

> No componente filho posso imitir alguma evento que causou alguma alteração, usando o barramento:

```javascript
import barramento from '@/barramento'

export default {
    props: {
        idade: Number
    },
    methods: {
        alterarIdade(){
            this.idade = 33
            barramento.$emit('idadeMudou', this.idade)
        }
    }
}
```

> Agora no componente irmão, eu posso ficar ouvindo se esse evento será disparada, e então passar uma callbak pra ele executar:


```javascript
  import barramento from '@/barramento'
    created(){
        barramento.$on('idadeMudou', idade => {
            this.idade = idade
        })
    }
```
> Repare que estou usando a função **created()** do vue, ela está fora da propriedade methods do componente filho.
> Pronto, agora os valores serão alterados apenas nos irmãos.

**[⬆ Voltar para o índice](#capitulo5)**


# Capítulo 6:Uso Avançado de Componentes

<a id="slots"></a>
## Passando Conteúdo com Slots

> É possível passar conteúdo pelo componente, dentro da tag filho.
> No componente pai (citacoes), passamos o conteúdo assim dentro do componente filho(citacao):
```javascript
  <template>
    <div class="citacoes">
        <Citacao>
            <h1>{{citacoes[indice].autor}}</h1>
            <p>{{ citacoes[indice].texto }}</p>
            <h6>{{ citacoes[indice].fonte }}</h6>
        </Citacao>
    </div>
</template>
```

> Agora no componente citacao passamos apenas a tag **slot**
```javascript
 <template>
    <div class="citacao">
       <slot></slot>
    </div>
  </template>
```

<a id="slots"></a>
## Como o Conteúdo do Slot é Estilizado

> O estilo é passado tanto no componente que tem a tag slot, quanto no componente que passa o contéudo, sendo que esse
o que tem preferência.

> Posso também definir o estilo que quero usando **!important**

```javascript
   h1 {
        color: red!important;
    }
```

**[⬆ Voltar para o índice](#capitulo6)**


<a id="multiplosslots"></a>
## Usando Múltiplos Slots (Slots Nomeados)

> Consigo passar vários slots, basta colocar a propriedade slot na tag que quero passar no componente pai (citacoes):
```javascript
     <Citacao>
            <p slot="teste">Olá eu estou aqui</p>
       </Citacao>
```

> Agora no componente filho, eu passo na tag slot, a propriedade name:
```javascript
   <template>
    <div class="citacao">
       <slot></slot>
       <slot name="teste"></slot>
    </div>
   </template>
```


**[⬆ Voltar para o índice](#capitulo6)**

<a id="componentesdinamicos"></a>
## Componentes Dinâmicos

> Existe um elemento personalizado do vue.js chamado **component**, que possuí a propriedade **:is**, aonde eu posso passar
alguma propriedade (que corresponde a algum componente com aspas simples) e então o vue irá resolver para mim:
```javascript
    <component :is="componente"/>
```
> E dai posso fazer o que eu quiser com a propriedade passada **componente**, nesse caso estou passando 'Citacoes':

```javascript
 export default {
	components: { Citacoes, Sobre },
	data(){
		return {
			componente: 'Citacoes'
		}
	}
}
```

> Posso por exemplo criar dois botões, aonde o valor de componente será alterado:

```javascript
<template>
	<div id="app">
		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>
		<component :is="component"/>
	</div>
</template>
```

**[⬆ Voltar para o índice](#capitulo6)**


<a id="keepalive"></a>
##  Mantendo o Componente Dinâmico Vivo

> Toda vez que eu troco de um componente para outro, o componente trocado é destruído, posso observar isso usando os métodos
de ciclo vida: created e destroyed, passando um console.log() para observar quando um ou outro é ativado.

> Mas sempre um componente é destruído, se eu quero mante-lo vivo, para que na volta ele mostre o mesmo resultado de antes,
possa usar um elemento personalidado do vue, chamado **keep-alive** e envolver o meu componente:

```javascript
 <keep-alive>
  <component :is="component"/>
</keep-alive>
```

> Pronto, agora ele não será mais destruído.

**[⬆ Voltar para o índice](#capitulo6)**

<a id="ciclodevidacomponente"></a>
##  Métodos de Ciclo de Vida de um Componente Dinâmico

> Consigo observar quando um componente é criado, destruído, ativado ou desativo com esses métodos:
```javascript
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('ativo')
    },
    deactivated(){
        console.log('desativado')
    }
```
> Lembrando que os métodos de ativar ou desativar, só seram chamados se o elemento **keep-alive** estiver definido.
**[⬆ Voltar para o índice](#capitulo6)**


# Capítulo 7: Manipulando Entrada de Usuário com Formulários

<a id="modificadorinput"></a>
##  Modificar Entrada de Usuário com Modificadores de Input: lazy, trim e number

> Com a diretiva v-model, cada tecla será refletida no dado, agora se você quiser que seja modificado apenas quando tirar o foco do campo, por exemplo clicar fora
do campo "e-mail" é só usar **v-model.lazy**, ou seja, o v-model vai ficar com "preguiça" e só modificar depois:

```javascript
<label nome="E-mail">
    <input type="text" v-model.lazy="usuario.email">
</label>
```

> Temos também o **trim** que tira os espaços em branco no começo e no fim do input

**v-model.trim posso usar também como v.model.lazy.trim**

> O v-model.number transforma o valor de string para number, isso é útil pois sempre no input, o valor retornado é uma string.

**o v-model.number vai forçar o valor do campo a ser número**

**[⬆ Voltar para o índice](#capitulo7)**


<a id="textareamodel"></a>
##  Usando <textarea> e Salvando Quebras de Linha

> Podemos usar o textarea com o v-model, o ruim é que quando pulamos a linha, ou deixamos um espaço em branco, isso não é refletido.
> Para que os espaços em branco sejam preservados precismos usar o style: white-space: pre; -> "Espaços em branco **pre**servados

```javascript
<span>Mensagem com múltiplas linhas:</span>
<p style="white-space: pre;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="Escreva bastante"></textarea>
```

**[⬆ Voltar para o índice](#capitulo7)**


<a id="checkboxmodel"></a>
##  Usando Checkboxes e Salvando os Dados em um Array

> Com o checkbox armazenamos os dados selecionados dentro um array.
> O v-model vai pegar o que está em value.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
   <input type="checkbox" value="ativado" v-model="selecionados"> <label for="">ativado</label>
   <input type="checkbox" value="desativado" v-model="selecionados"> <label for="">desativado</label>
   <p>{{selecionados}}</p>
</div>

<script>
    new Vue({
        el: "#app",
        data: {
            selecionados: []
        }

    })
</script>
```

**[⬆ Voltar para o índice](#capitulo7)**


<a id="radiomodel"></a>
##  Usando radio

> Com o v-model o radio vai selecionar apenas uma opção, basta colocar o v-model nos dois input radio.
> O valor do v-model é pego pelo value também.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
   <input type="radio" value="one" v-model="picked"> <label for="">One</label>
   <input type="radio" value="Two" v-model="picked"> <label for="">Two</label>

   <p>Picked: {{picked}}</p>
</div>

<script>
    new Vue({
        el: "#app",
        data: {
            picked: ''
        }

    })
</script>
```

**[⬆ Voltar para o índice](#capitulo7)**


<a id="selectmodel"></a>
##  Manipulando Combobox com select e option

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
    <p>Personagem: </p>
    <select v-model="selecionado">
        <option v-for="personagem in personagens" :value="personagem.codigo"
        >
            {{personagem.nome}}
        </option>
    </select>

    <p>Escolhido: {{selecionado}} </p>
</div>

<script>
    new Vue({
        el: "#app",
        data: {
           personagens: [
               {codigo: 1, nome: "Home Lander"},
               {codigo: 2, nome: "Trem Bala"},
               {codigo: 3, nome: "Tempestade"}
           ],
           selecionado: 3
        }
    })
</script>
```

**[⬆ Voltar para o índice](#capitulo7)**

<a id="prevent"></a>
## Previnindo comportamento padrão do botão (prevent)

> Para que o botão não faça o comportamento padrão de submit, é preciso usar **@click.prevent**, assim ele vai se "prevenir" do comportamento padrão.

**[⬆ Voltar para o índice](#capitulo7)**


# Capítulo 8: Usando e criando diretivas

<a id="diretivas"></a>
## Algumas diretivas
	
```html
	<p v-text="'Usando diretiva v-text'"></p>
	<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
```

**[⬆ Voltar para o índice](#capitulo8)**

<a id="diretivasimples"></a>
## Criando diretiva simples

> o método bind é um método hook, chamado apenas uma vez quando a diretiva é interligada com o elemento. "el" é o elemento que a diretiva está vinculada,
é usado para manipular a DOM diretamente
```javascript
	Vue.directive('destaque', {
	bind(el){
		el.style.backgroundColor = 'lightgreen';
	}
})
```

> Para usar a diretiva criada:

```html
   <p v-destaque>Usando minha diretiva</p>
```
**[⬆ Voltar para o índice](#capitulo8)**

<a id="diretivavalor"></a>
## Passando valor para a diretiva personalizada

> Com o parâmetro **binding** consigo passar valores para a minha diretiva, nesse caso, por ser uma cor, o valor precisa estar entre aspas simples dentro das aspas duplas
e é preciso atualizar a página também, o auto reload não funciona muito bem aqui.

```javascript
	Vue.directive('destaque', {
	bind(el, binding){
		el.style.backgroundColor = binding.value;
	}
})
```
Para usar a diretiva
```html
   <p v-destaque="'blue'">Usando minha diretiva</p>
```

**Outro exemplo**
```javascript
<p v-destaque="1 + 1">Usando minha diretiva</p>
---------------------------------------------
Vue.directive('destaque', {
	bind(el, binding){
		el.innerText = binding.value;
	}
})
```
**Outro exemplo: Posso passar como dado normal**
```javascript
<p v-destaque="cor">Usando minha diretiva</p></div>

export default {
    data(){
	return {
	   cor: 'red'
	}
   }
}
```
**[⬆ Voltar para o índice](#capitulo8)**

<a id="diretivaargumento"></a>
## Passando Argumento para diretiva personalizada

> O argumento da diretiva vem nos dois pontos :, igual quando temos v-bind:value, o argumento é value, ou v-on:click, o argumento é o click. Então podemos
pegar o argumento com binding.arg ( no singular, podemos ter apenas um único argumento) e verificar se ele existe ou não: 

```javascript
	Vue.directive('destaque', {
	bind(el, binding){
		if(binding.arg === 'fundo'){
			el.style.backgroundColor = binding.value;
		} else {
			el.style.color = binding.value;
		}
	}
})
```
> Se o argumento existir, ele vai aplicar o fundo, se não vai aplicar apenas a cor.
> Para usar a diretiva criada com argumento:

```html
  <p v-destaque="'lightblue'">Usando minha diretiva</p>
```
**[⬆ Voltar para o índice](#capitulo8)**

<a id="diretivamodificador"></a>
## Diretivas personalizadas com modificadores

> Posso ter vários modificadores, eu vejo se eles estão sendo passados com **binding.modifiers['']**
```javascript
Vue.directive('destaque', {
	bind(el, binding){
		let atraso = 0;

		if(binding.modifiers['atrasar']) atraso = 2000;

		setTimeout(() => {
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, atraso);
		
	}
})
```

> Para usar a diretiva criada com modificador:

```html
  <p v-destaque:fundo.atrasar="'lightblue'">Usando minha diretiva</p>
```
**[⬆ Voltar para o índice](#capitulo8)**


<a id="diretivaanatomia"></a>
## Anotomia de uma diretiva

> nome da diretiva:argumento.modificadores

> v-diretiva:argumento.mod1.mod2.mod3....

**[⬆ Voltar para o índice](#capitulo8)**

<a id="diretivalocal"></a>
## Registrar diretivas localmente


```javascript
	export default {
	directives:{
		'destaque-local':{
			bind(el, binding){
				let atraso = 0;
				if(binding.modifiers['atrasar']) atraso = 2000

				setTimeout(() =>{
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = binding.value;
					} else {
						el.style.color = binding.value;
					}
				}, atraso)
			}
		}
	}
```

**[⬆ Voltar para o índice](#capitulo8)**


<a id="variosmodificadores"></a>
## Usando Múltiplos Modificadores


```javascript
	export default {
	directives:{
	   'destaque-local':{
			bind(el, binding){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor;
					} else {
						el.style.color = cor;
					}
				}

				let atraso = 0;
				if(binding.modifiers['atrasar']) atraso = 2000

				const cor1 = binding.value;
				const cor2 = 'purple';
				let corAtual = cor1;

				setTimeout(() =>{
					if(binding.modifiers['alternar']){
						setInterval(()=>{
							corAtual = corAtual === cor1 ? cor2 : cor1;
							aplicarCor(corAtual);
						}, 1000)
					}
					aplicarCor(binding.value)
				}, atraso)
			}
		}
	}
```

> Chamando a diretiva:

<p v-destaque-local.atrasar.alternar="'lightblue'">Usando diretiva personalizada</p>

**[⬆ Voltar para o índice](#capitulo8)**


<a id="diretivascomplexo"></a>
## Passando Valores mais Complexos para as Diretivas

> Consigo passar os valores como objeto
```javascript
    <p v-destaque-local.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada</p>
```
> Para ter acesso ao valor, basta usar o binding.value.(nomeDoAtributo). Ex: binding.value.cor1 que seria igual a green.

**[⬆ Voltar para o índice](#capitulo8)**


# Capítulo 9: Melhorando sua App com Filtros e Mixins

<a id="filtrolocal"></a>
## Criando um Filtro Local

> Filtro funciona como se fosse uma máscara para os inputs, então para criar um filtro local na minha aplicação posso passar como propriedade:

```javascript
    export default {
	filters:{
		cpf(valor){
			const arr = valor.split('');
			arr.splice(3, 0, '.');
			arr.splice(7, 0, '.');
			arr.splice(11, 0, '-');
			return arr.join('');
		}
	},
     }	
```
> E para aplicar esse filtro no seu dado, basta criar o dado normal na propriedade data, aqui vou criar chamado cpf também, e para aplicar o filtro basta usar o pipe:

```html
    <p>{{ cpf | cpf}}</p>
```
> Não tem problema usar o mesmo nome, poderia usar outro, mas usar o mesmo o Vue entende que o primeiro é o dado e o segundo é o filtro.

**[⬆ Voltar para o índice](#capitulo8)**

<a id="filtroglobal"></a>
## Filtro Global e Como Encadear Múltiplos Filtros


```javascript
   Vue.filter('inverter', (valor)=>{
	return valor.split('').reverse().join('');
});
```
> Posso aplicar diversos filtro encadeados que serão aplicados no valor:

```javascript
  <p>{{ cpf | cpf | inverter }}</p>
```

> Posso também passar o valor diretamente:

```javascript
  <p>{{ '728172817' | cpf | inverter }}</p>
```

**[⬆ Voltar para o índice](#capitulo9)**



<a id="filtrobind"></a>
## Filtro com v-bind

> Consigo aplicar o filtro com v-bind também: 
```javascript
   	<input type="text" :value="cpf | cpf | inverter">
});
```
> Filtro não suporta o v-model, filtros não são muito otimizados, mas é bom para projetos simples, para ter mais otimização é melhor usar as
propriedades computas.

**[⬆ Voltar para o índice](#capitulo9)**


<a id="mixins"></a>
## Usando mixins

> Com mixins eu consigo unir, "misturar" os dados do mixins com os dados de qualquer componente que eu queira usar, então por exemplo, tenho esse mixin:
```javascript
 <script>
export default {
       data(){
        return{
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
</script> 
});
```
> Agora consigo chamar esse mixins em qualquer lugar, que os dados do componente ficaram unidos com os dados do mixin, e os dados serão diferentes para componente, para
declarar é só usar essa declaração em qualquer componente:

```javascript
export default {
    mixins: [FrutasMixins]
}
```

**[⬆ Voltar para o índice](#capitulo9)**


# Capítulo 10: Adicionando Animações e Transições

<a id="bootstrapvue"></a>
## Bootstrap com Vue

> Para usar boostrap no vue, posso adicionar o plugin dessa forma:
```javascript
  vue add bootstrap-vue
```
> Para usar basta colocar b- (nome do elemento): 
> obs: variant="primary" para cor azul

```html
  <b-button variant="primary" />
  <b-alert variant="info"  show></b-alert>
```

**[⬆ Voltar para o índice](#capitulo10)**

<a id="distbootstrap"></a>
## Dist Bootstrap

> Posso criar uma basta dentro de src chamada plugins e lá colocar um arquivo js "bootstrap-vue.js":
```javascript
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
```

**[⬆ Voltar para o índice](#capitulo10)**


<a id="distbootstrap"></a>
## Dist Bootstrap

> Posso criar uma pasta dentro de src chamada plugins e lá colocar um arquivo js "bootstrap-vue.js":
```javascript
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
```

**[⬆ Voltar para o índice](#capitulo10)**


<a id="transicaovue"></a>
## Criando Transição "Fade" com Propriedade CSS transition

> Usando o v-if, o componente aparece e desaparece de forma abrupta, podemos fazer um efeito de transição para que desapareça e apareça lentamente,
usando a tag transition em volta do elemento que irá desaparecer:
```javascript
<transition name="fade">
       <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
</transition>
```
> O nome fade é opcional, posso usar qualquer nome.
> As classes que dão efeito de transição são as: (Aonde o asterisco significa que posso usar qualquer nome, nesse exemplo estou usando o nome "fade")
   	1. *-enter: enter de "entrar", o elemento vai "entrar" na tela, então no início ele não irá aparecer, ou seja: opacity: 0.
	2. *-enter-active: É o efeito que irá acontecer no elmemento. Ex: transition: opacity 2s;
	3. *-enter-to: É o efeito final, quando o elemento aparece: opacity: 1;
	4. *-leave : leave é sair, ou seja o elemento vai sair da tela, aqui o elemento começa com opacity: 1;
	5. *-leave-active: transição parece ele sair.
	6. *-leave-to: elemento sai de vez com opacity: 0;

> Como a transição já leva o opacity a 1, posso simplemente oculta-lo, e como alguns padrões se repetem, posso escrever dessa forma:
```css
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active{
		transition: opacity 2s;
	}
```
**[⬆ Voltar para o índice](#capitulo10)**

<a id="animacao"></a>
## Criando Transição "Slide" com Propriedade CSS animation

```css
@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}

</style>
```

```javascript
 <transition name="slide">
       <b-alert variant="info" 	show v-if="exibir">{{msg}}</b-alert>
 </transition>
```

**[⬆ Voltar para o índice](#capitulo10)**


<a id="animacaoetransicao"></a>
## Misturando as Propriedades transition e animation

```css
	@keyframes slide-in {
		from { transform: translateY(40px); }
		to { transform: translateY(0); }
	}

	@keyframes slide-out {
		from { transform: translateY(0); }
		to { transform: translateY(40px); }
	}

	.slide-enter-active {
		animation: slide-in 2s ease;
		transition: opacity 2s;
	}

	.slide-leave-active {
		animation: slide-out 2s ease;
		transition: opacity 2s;
	}

	.slide-enter, .slide-leave-to{
		opacity: 0;
	}

```
**[⬆ Voltar para o índice](#capitulo10)**


<a id="tempoanimacao"></a>
## Tempo de animação diferente de tempo de transição

> Image que a transição tenha mais tempo do que a animação:
```css
.slide-leave-active {
		animation: slide-out 2s ease;
		transition: opacity 6s;
	}
```

> Isso gera um efeito estranho, para contornar isso, existe o atributo **type** que serve para dizer qual efeito vai ter prioridade:

```javascript
 <transition name="slide" type="animation">
```

> Agora não importa o tempo de transição, como defini type="animation", após ela terminar, irá desaparecer o efeito.
**[⬆ Voltar para o índice](#capitulo10)**


<a id="carregamentopage"></a>
## Configurando Animação no Carregamento do Componente

> Para que aconteça o efeito ao carregar a página, basta usar a propriedade **appear**:
 	 <transition name="slide" type="animation" appear>
	
**[⬆ Voltar para o índice](#capitulo10)**


<a id="animatecss"></a>
## Animações com Animate.css

> O animate tem várias animações legais para serem utilizadas: [animate](https://animate.style/)

Para usar basta pegar o nome do lado direito e colocar animate na frente:

```html
<transition 
     enter-active-class="animated swing"
     leave-active-class="animated shake">
      <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
 </transition>
```
 > E no arquivo index.html da pasta public usar o link: 

```html
   <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css" />
```
**[⬆ Voltar para o índice](#capitulo10)**


<a id="nomesdinamicosatributos"></a>
## Usando Nomes e Atributos Dinâmicos
    ```html
	<hr>
	<b-select v-model="tipoAnimacao">
	    <option value="slide">Slide</option>
	    <option value="fade">Fade</option>
	 </b-select>
	<transition :name="tipoAnimacao">
       	     <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
 	</transition>
     ```	
**[⬆ Voltar para o índice](#capitulo10)**

<a id="transicionar"></a>
## Transicionar entre Múltiplos Elementos

> Para eu conseguir trocar de elementos e mesmo assim o efeito continuar, preciso usar a propriedade **key**.
> E para que um elemento tenha seu efeito e só depois entre outro elemento, tenho que usar **mode= out-in**.
    ```html
	<b-select v-model="tipoAnimacao">
		<option value="slide">Slide</option>
		<option value="fade">Fade</option>
	</b-select>
	<transition :name="tipoAnimacao" mode="out-in">
	<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
	<b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
	</transition>
     ```	
**[⬆ Voltar para o índice](#capitulo10)**

<a id="transitiongroup"></a>
## Usando transition-group (Para animar vários elementos)

    ```html
	<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
	 
		 <b-button @click="adicionarAluno" class="mb-4">Adicionar</b-button>
		 <transition-group name="slide">
			<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">
					{{aluno}}
				</b-list-group-item>
			</b-list-group>
		 </transition-group>
	</div>
	</template>

	<script>

	export default {
    	data(){
		return{
		    alunos: ['Paulo', 'João', 'Roberto', 'Pedro']
		}
	},
	methods: {
		adicionarAluno(){
			let a = Math.random().toString(36).substring(2);
			this.alunos.push(a)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1);
		}
		}
	}
	</script>

	<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		font-size: 1.5rem;
	}

	.caixa{
		height: 100px;
		width: 300px;
		margin: 30px auto;
		background-color: lightgreen;
	}

	.fade-enter, .fade-leave-to{
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active{
		transition: opacity 2s;
	}

	@keyframes slide-in {
		from { transform: translateY(40px); }
		to { transform: translateY(0); }
	}

	@keyframes slide-out {
		from { transform: translateY(0); }
		to { transform: translateY(40px); }
	}

	.slide-enter-active {
		position: absolute;
		width: 100%;
		animation: slide-out 2s ease;
		animation: slide-in 2s ease;
		transition: opacity 2s;
	}

	.slide-leave-active {
		animation: slide-out 2s ease;
		transition: opacity 2s;
	}

	.slide-enter, .slide-leave-to{
		opacity: 0;
	}

	.slide-move{
		transition: transform 1s;
	}
	</style>
     ```	
**[⬆ Voltar para o índice](#capitulo10)**




