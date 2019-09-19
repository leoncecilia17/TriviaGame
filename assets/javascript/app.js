$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var timer = 120;
    var timerInt;

    $(".scoreBoard").hide();
    $(".submitBtn").hide();
    $("#time-left").html("Time Remaining: " + timer);
    // question array 
    var questions = [
        {
            question: "1. Which Native American tribe used to live in the Chicago Area?",
            answers: ["Potawatomi", "Cherokee", "Iroquois", "Navajo"],
            correctAnswers: "Potawatomi"
        },
        {
            question: "2. What is unique about the Chicago River?",
            answers: ["There are sharks!", "It's toxic.", "It flows out of Lake Michigan.", "It's man-made."],
            correctAnswers: "It flows out of Lake Michigan."
        },
        {
            question: "3. After completion in 1973, which building was the tallest in the city?",
            answers: ["John Hancock Center", "Sears Tower (now known as the Willis Tower)", "Aon Center", "Trump International Hotel and Tower"],
            correctAnswers: "Sears Tower (now known as the Willis Tower)"
        },
        {
            question: "4. Why did the Chicago Water Tower survive the Chicago Fire of 1871? It was built out of...",
            answers: ["Stone", "Wood", "Steel", "Clay"],
            correctAnswers: "Stone"
        },
        {
            question: "5. How many operable drawbridges are there along the Chicago River?",
            answers: ["10", "2", "37", "253"],
            correctAnswers: "37"
        },
        {
            question: "6. What is one thing that was invented in Chicago?",
            answers: ["Spray Paint", "Cheese", "Sky Scrapers", "Cars"],
            correctAnswers: "Spray Paint"
        },
        {
            question: "7. In 1937, was Chicago the first city to establish a blood bank in the United States?",
            answers: ["True", "False"],
            correctAnswers: "True"
        },
        {
            question: "8. How many states can be seen from the Willis Tower Skydeck?",
            answers: ["Four (Illinois, Indiana, Wisconsin, Michigan)", "Two (Wisconsin, Florida)", "Three (New York, Illinois, Wisconsin)", "One (Illinois)"],
            correctAnswers: "Four (Illinois, Indiana, Wisconsin, Michigan)"
        },
        {
            question: "9. After the Great Chicago Fire of 1871 leveled most of the city, a public campaign endorsed by Queen Victoria brought thousands of donations from England that helped found which Chicago Institution?",
            answers: ["Lincoln Park Zoo", "The Chicago Public Library", "Brookfield Zoo", "Chicago Fire Department"],
            correctAnswers: "The Chicago Public Library"
        },
        {
            question: "10. Only six-months after Richard J. Daley became mayor in 1955, he officially opened what major landmark?",
            answers: ["Chicago Midway International Airport", "Navy Pier", "Cloud Gate", "O'Hare International Airport"],
            correctAnswers: "O'Hare International Airport"
        }
    ];

    $("#button").on("click", function () {
        $("button").css("display", "none");
        timerInt = setInterval(timeDecreasing, 1000);
        generateRadioButtons();
        $(".submitBtn").show();
    });

    $(document).on("click", ".submitBtn", function () {
        gameOver();
    });

    function gameOver() {
        clearInterval(timerInt);
        $(".scoreBoard").append("<h3>Score: </h3>")
        $(".scoreBoard").append("<h4>Correct Answers: " + correctAnswers + "  </h4>")
        $(".scoreBoard").append("<h4>Incorrect Answers: " + incorrectAnswers + "  </h4>")
        unAnswered = questions.length - (correctAnswers + incorrectAnswers);
        $(".scoreBoard").append("<h4>Unanswered Questions: " + unAnswered + "  </h4>")

        $(".scoreBoard").show()
        $("#gameDiv").hide();
    };

    function timeDecreasing() {
        timer = timer - 1;
        $("#time-left").html("Time Remaining: " + timer);
        if (timer === 0) {
            gameOver();
        }
    };

    function generateRadioButtons() {
        for (var i = 0; i < questions.length; i++) {

            var htmlQ = '<h4>' + questions[i].question + '</h4>'
            var htmlI = '';

            for (var j = 0; j < questions[i].answers.length; j++) {

                var answer = questions[i].answers[j];
                htmlI += '<input type="radio" class="radioBtn" name="radio' + i.toString() + ' " value="' + answer + '"  data-answer="' + questions[i].correctAnswers + '"> ' + answer[0].toUpperCase() + answer.slice(1) + '<br>';
            }
            var html = htmlQ + htmlI;
            $(".questions").append(html)
        }
    };

    $(document).on("click", ".radioBtn", function () {
        if ($(this).attr("data-answer") === $(this).attr("value")) {

            correctAnswers = correctAnswers + 1;
        }
        else {
            incorrectAnswers = incorrectAnswers + 1
        }
    });
});





