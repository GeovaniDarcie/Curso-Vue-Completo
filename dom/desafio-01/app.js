new Vue({
    el: '#desafio',
    data:{
        SEU_NOME: "Geovani Darcie",
        IDADE: 22,
        img: "gato.jpg"
    },
    methods: {
        numeroRandom(){
            return Math.random()
        }
    }
})