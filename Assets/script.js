
var question = {

    one: "This author wrote the famous novel that would later inspire Disney's The Jungle Book.",

    oneA: ["H.G. Wells", "Rudyard Kipling", "Dr. Suess", "Anne Rice"],

    two: "'Why Should I Worry' was this famous singer/songwriter's first foray into the world of animation, featured in the Disney film 'Oliver and Company'.",

    twoA: ["Sting", "Phil Collins", "Elton John", "Billy Joel"],

    three: "The movie and universe of Disney's 'Alladin' is loosely based on what famous collection of tales and stories?",

    threeA: ["One Thousand and One Nights", "Aesop's Fables", "The Trials of Apollo", "Metamorphosis" ],

    four: "This film became the first animated work ever to be nominated for Best Picture at the Academy Awards.",

    fourA: ["Coco", "Finding Nemo", "Beauty and the Beast", "Snow White and the Seven Dwarves"],



}

var questionOne = true; 
var questionTwo = false;
var questionThree = false;
var questionFour = false;

var iterator = 1;

var wins = 0;
var losses = 0;


// variables for the timer

var interval = 15;

var intervalId;

// Timer functions

function stop() {

    clearInterval(intervalId);
15
}

function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function reset() {

    interval = 15;
    $("#timer").html("<h2>" + interval + "</h2>");
    run();
}

function decrement() {

    interval-- ; 
    $("#timer").html("<h2>" + interval + "</h2>");

    if (interval === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");

        // Add to losses and go to next question. 

        losses++;
        $("#losses").text(losses);
        nextQuestion();

        
        
      }

}
// Function for progressing the question

function nextQuestion() {

    // Increase iterator by one.

    iterator++ ; 
    reset();

    // if iterator = question number set the next questions


    if (iterator == 2) {

    questionOne = false;
    $("#question").text(question.two);
    $("#answer0").text(question.twoA[0]);
    $("#answer1").text(question.twoA[1]);
    $("#answer2").text(question.twoA[2]);
    $("#answer3").text(question.twoA[3]);
    questionTwo = true;

    

    } else if (iterator == 3) {


    questionTwo = false;
    $("#question").text(question.three);
    $("#answer0").text(question.threeA[0]);
    $("#answer1").text(question.threeA[1]);
    $("#answer2").text(question.threeA[2]);
    $("#answer3").text(question.threeA[3]);
    questionThree = true;

    }else if (iterator == 4) {

        questionThree = false;
        $("#question").text(question.four);
        $("#answer0").text(question.fourA[0]);
        $("#answer1").text(question.fourA[1]);
        $("#answer2").text(question.fourA[2]);
        $("#answer3").text(question.fourA[3]);
        questionFour = true;
        
        
        
        
    } else {

        $("#question").text("Thanks for playing! Refresh to try again.");
        $("#answer0").text("Final Score:");
        $("#answer1").text(" ");
        $("#answer2").text(" ");
        $("#answer3").text(" ");

        clearInterval(intervalId);

        interval = 15;
        $("#timer").text(" ");
    }

}


// Function for successful answer.


function correctAnswer() {

    wins++;
    $("#wins").text(wins);
}

function incorrectAnswer() {
    losses++;
    $("#losses").text(losses);
}



// start screen, insert first question


$( document ).ready(function() {

    
    $("#question").text(question.one);
    $("#answer0").text(question.oneA[0]);
    $("#answer1").text(question.oneA[1]);
    $("#answer2").text(question.oneA[2]);
    $("#answer3").text(question.oneA[3]);
    run();

});


// on click functionality for the four answer possibilities


$("#answer0").click(function() {

    if (questionThree == true) {

        alert ("Correct!");
        correctAnswer();
        nextQuestion();

    }else {

        alert("Incorrect!");
        incorrectAnswer();
        nextQuestion();
    }





})

$("#answer1").click(function() {

if (questionOne == true) {

    alert("Correct!");
    correctAnswer();
    nextQuestion();
}else {

    alert("Incorrect!")
    incorrectAnswer();
    nextQuestion();
}
    



})

$("#answer2").click(function() {


if (questionFour == true) {

    alert("Correct!");
    correctAnswer();
    nextQuestion();
}else {

    alert("Incorrect!");
    incorrectAnswer();
    nextQuestion();
}
    



})

$("#answer3").click(function() {

    
if (questionTwo == true) {

    alert("Correct!");
    correctAnswer();
    nextQuestion();

}else {
    alert("Incorrect!");
    incorrectAnswer();
    nextQuestion();
}


})








