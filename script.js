var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');



        var app={
                    questions:[
                            {q:'What is my Name?',options:['Adedayo','Olatayo','Tobiloba','Ayodele'],answer:4},

                            {q:'What month was I born?',options:['January','November','July','April'],answer:2},

                            {q:'What is my completion?',options:['Chocolate','Dark','Albino','White'],answer:1},

                            {q:'What is my nick?',options:['Jsage','Kolisgra','Zicko','KIA'],answer:3},

                            {q:'What is my favourite food?',options:['Rice','Beans','Pounded Yam','Amala'],answer:4},
                              ],
                    index:0,
                    load:function(){
                        if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                        }    
                        else{
                            quizBox.innerHTML="Yay! you know me a bit *winks*"
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                    },
                    next:function(){
                        this.index++;
                        this.load();
                    },
                    check:function(ele){

                        var id=ele.id.split('');

                        if(id[id.length-1]==this.questions[this.index].answer){
                            this.score++;
                            ele.className="correct";
                            ele.innerHTML="Correct";
                            this.scoreCard();
                        }
                        else{
                            ele.className="incorrect";
                            ele.innerHTML="Incorrect";
                        }
                      
                    },
                    notClickAble:function(){
                        for(let i=0;i<ul.children.length;i++)
                            ul.children[i].style.pointerEvents="none";
                    },

                    clickAble:function(){
                        for(let i=0;i<ul.children.length;i++)
                            ul.children[i].style.pointerEvents="auto",
                            ul.children[i].className="auto";

                    },
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML=this.score+"/"+ this.questions.length;

                    }


        }

        window.onload=app.load();

        function button(ele) {
            app.check(ele);
            app.notClickAble();
        }


        function next(){
            app.next();
            app.clickAble();
        }