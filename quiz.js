$(document).ready(function(){
    // define global arrays for correct answers, questions, and choice options
    var correct = ["2009", "Astana", "Kazakh", "Tenge", "Nursultan Nazarbayev"];
    var questions = ["Which year was Nazarbayev University founded?", "What is the capital of Kazakhstan?", "What is the official language of Kazakhstan?", "What is the currency of Kazakhstan?", "Who was the first president of Kazakhstan?"];
    var choice_options = [["2009","2010","2011","2012"],["Astana","Almaty","Shymkent","Karaganda"],["Kazakh","Russian","Uzbek","Turkmen"],["Tenge","Dollar","Euro","Ruble"],["Nursultan Nazarbayev","Kassym-Jomart Tokayev","Askar Akayev","Islam Karimov"]];

    // generate quiz questions
    for (var i = 0; i < questions.length; i++) {
        // create a new div for each question
        var questionDiv = $("<div class='question'></div>");
        // add the question text
        questionDiv.append("<p class='d'>Q" + (i+1) + ". " + questions[i] + "</p>");
        // add the answer options
        for (var j = 0; j < choice_options[i].length; j++) {
            questionDiv.append("<label><input type='radio' name='q" + (i+1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>");
        }
        // append the question div to the quiz box
        $("#quiz-box").append(questionDiv);
    }

    // initialize count of correct answers
    var countCorrect = 0;

    // attach click event handler to button
    $("button").click(function(event){
        // check answers
        for (var i = 0; i < correct.length; i++) {
            var userAnswer = $("input[name=q" + (i+1) + "]:checked").val();
            if (userAnswer == correct[i]) {
                countCorrect++;
            }
        }
        // display overall score
        $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    });
});
