new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Botão clicado!")
        },

        armazenaValor(event){
            this.valor = event.target.value
        }
    }
})