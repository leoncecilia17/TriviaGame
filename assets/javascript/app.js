

$(document).ready(function () {
    var questions = [{question:'What is the opposite of pur',name:'colors', answers:['red','blue','green'], correctAnswer:'red'}]
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var index = 0;
    var timer = 12; 
    var timerInt;

    function timeDecreasing(){
        timer = timer-1
        if(timer === 0) {
            clearInterval(timerInt);
            //Call submit automatically because time ran out
        }
        $("#time-left").html("Time Remaining:" + timer); 
    }
    $("#button").on("click", function () {
        $("button").css("display", "none"); 
        timerInt = setInterval(timeDecreasing, 1000);
        //we need to execute code here    
        generateRadioButtons();
    });

    function generateRadioButtons() {
        for(var i = 0; i < questions.length; i++){

            var htmlQ = '<h4>' + questions[i].question + '</h4>'
            var htmlI = '';

            for(var j = 0; j < questions[i].answers.length; j++){
           
            var answer = questions[i].answers[j];
            htmlI += '<input type="radio" name="' +  questions[i].name + '" value="' +  answer + '"> ' +  answer[0].toUpperCase() + answer.slice(1) + '<br>';
        }
        var html = htmlQ + htmlI;
        $(".questions").append(html)
        }
    }

    setTimeout(()=> {
        console.log($('input:checked'));
    }, 3000)


    

}); 