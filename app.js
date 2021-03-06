new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ]
    },
    methods:{
        flipCard:function (index){
            this.cards[index].flipped=true;
        },
        addItem: function (){
            this.cards.push({question: this.form.question, answer: this.form.answer,
                category: this.form.category, flipped: false})
        },
        form: {
            question:"",
            answer:"",
            category:""
        },
        selectCategory: function (){
        }
    }
})