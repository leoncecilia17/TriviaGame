$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var index = 0;
    var timer = 121;
    var timerInt;


document.getElementById("")

// question array 
    var questions = [
        {
            question: "1. Which Native American tribe used to live in the Chicago Area?",
            answers: [
                "Potawatomi",
                "Cherokee",
                "Iroquois",
                "Navajo"
            ]
        },
        {
            question: "2. What is unique about the Chicago River?",
            answers: [
                "There are sharks!",
                "It's toxic.",
                "It flows out of Lake Michigan.",
                "It's man-made."
            ]
        },
        {
            question: "3. After completion in 1973, which building was the tallest in the city?",
            answers: [
                "John Hancock Center",
                "Sears Tower (now known as the Willis Tower)",
                "Aon Center",
                "Trump International Hotel and Tower"
            ]
        },
        {
            question: "4. Why did the Chicago Water Tower survive the Chicago Fire of 1871? It was built out of...",
            answers: [
                "Stone",
                "Wood",
                "Steel",
                "Clay"
            ]
        },
        {
            question: "5. How many operable drawbridges are there along the Chicago River?",
            answers: [
                "10",
                "2",
                "37",
                "253"
            ]
        },
        {
            question: "6. What is one thing that was invented in Chicago?",
            answers: [
                "Spray Paint",
                "Cheese",
                "Sky Scrapers",
                "Cars"
            ]
        },
        {
            question: "7. In 1937, was Chicago the first city to establish a blood bank in the United States?",
            answers: [
                "True",
                "False"
            ]
        },
        {
            question: "8. How many states can be seen from the Willis Tower Skydeck?",
            answers: [
                "Four (Illinois, Indiana, Wisconsin, Michigan)",
                "Two (Wisconsin, Florida)",
                "Three (New York, Illinois, Wisconsin)",
                "One (Illinois)"
            ]
        },
        {
            question: "9. After the Great Chicago Fire of 1871 leveled most of the city, a public campaign endorsed by Queen Victoria brought thousands of donations from England that helped found which Chicago Institution?", 
            answers: [
                "Lincoln Park Zoo", 
                "The Chicago Public Library", 
                "Brookfield Zoo", 
                "Chicago Fire Department"
            ]      
        }, 
        {
            question: "10. Only six-months after Richard J. Daley became mayor in 1955, he officially opened what major landmark?", 
            answers: [
                "Chicago Midway International Airport",
                "Navy Pier", 
                "Cloud Gate", 
                "O'Hare International Airport", 

            ]
        }
    ]

    // correct answer array 
    var correctAnswers = [
        "Potawatomi", 
        "It flows out of Lake Michigan.",
        "Sears Tower (now known as the Willis Tower)",
        "Stone",
        "37", 
        "Spray Paint",
        "True", 
        "Four (Illinois, Indiana, Wisconsin, Michigan)",
        "The Chicago Public Library", 
        "O'Hare International Airport", 
    ]; 

    $("#button").on("click", function () {
        $("button").css("display", "none");
        timerInt = setInterval(timeDecreasing, 1000);
        //we need to execute code here    
        generateRadioButtons();
    });

    function timeDecreasing() {
        timer = timer - 1
        if (timer === 0) {
            clearInterval(timerInt);
            //Call submit automatically because time ran out
        }
        $("#time-left").html("Time Remaining: " + timer);
    }

    function generateRadioButtons() {
        for (var i = 0; i < questions.length; i++) {

            var htmlQ = '<h4>' + questions[i].question + '</h4>'
            var htmlI = '';

            for (var j = 0; j < questions[i].answers.length; j++) {

                var answer = questions[i].answers[j];
                htmlI += '<input type="radio" name="' + questions[i].name + '" value="' + answer + '"> ' + answer[0].toUpperCase() + answer.slice(1) + '<br>';
            }
            var html = htmlQ + htmlI;
            $(".questions").append(html)
        }
    }

    function setTimeout() {
        console.log($('input:checked'), 3000)
    }
})





