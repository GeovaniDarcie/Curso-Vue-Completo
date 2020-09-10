# Curso-Vue-Completo
Esse manual foi feito por mim com base no curso da Udemy:
> [Curso completo da udemy](https://www.udemy.com/course/vue-js-completo/). :mortar_board:

## Índice

* [Primeiro exemplo](#primeiro-exemplo)
* [Eventos com Input](#eventos-com-input)

## Primeiro exemplo

``` html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!-- Importando o Vue JS -->

<div id="app">
    <p>{{ title }} </p> <!-- Pegando o title da minha minha Vue, uso {{}} -->
</div>

<script>
    /* Instanciando uma nova Vue, com o construtor, repare que não precisei fazer " v = new Vue " pois
    o Vue já faz todo esse processo. */
    new Vue({
        el: '#app', /* Qual trecho do html vou controlar, passando o elementoem forma de ID */
        data: { 
            title: "Curso de Vue"
        }
    })
</script>
```
**[⬆ Voltar para o índice](#índice)**

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
