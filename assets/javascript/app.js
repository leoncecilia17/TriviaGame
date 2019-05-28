$(document).ready(function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var index = 0;
    var timer = 120; 
    
    function timeDecreasing(){
        timer = timer-1
        $("#time-left").html("Time Remaining:" + timer); 
    }

    $("#button").on("click", function () {
        $("button").css("display", "none"); 
        setInterval(timeDecreasing, 1000);    
    });

}); 