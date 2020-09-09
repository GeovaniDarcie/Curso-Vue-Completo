# Curso-Vue-Completo

## Primeiro exemplo

``` <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!-- Importando o Vue JS -->

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

## Eventos com input

**Em javascript padrão como seria:**

``` <input type="text" onkeypress="alteraTitulo(event)">
<p id="title">Curso Vue</p>

<script>
    let p = document.querySelector("#title");

    function alteraTitulo(event){
        p.innerText = event.target.value;
    }
</script>
```

**Agora usando Vue:** 

``` <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

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
</script> ```
