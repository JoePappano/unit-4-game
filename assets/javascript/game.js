var totalNum = 0;
var wins = 0;
var losses = 0;

$(document).ready(

    $("#play").on("click", function () {
        compGuess = (Math.ceil(Math.random() * 120)) + 19; 
        $("#compGuess").text(compGuess)
        $(this).prop('disabled', true);
    })
)
    $("#play").on("click", function () {
        button1Guess = (Math.ceil(Math.random() * 12))
        $("#button1").attr("x", button1Guess)
        console.log(button1Guess)
    })


    $("#play").on("click", function () {
        button2Guess = (Math.ceil(Math.random() * 12))
        $("#button2").attr("x", button2Guess);
        console.log(button2Guess)
    })


    $("#play").on("click", function () {
        button3Guess = (Math.ceil(Math.random() * 12))
        $("#button3").attr("x", button3Guess)
        console.log(button3Guess)  
    })


    $("#play").on("click", function () {
        button4Guess = (Math.ceil(Math.random() * 12))
        $("#button4").attr("x", button4Guess)
        console.log(button4Guess)
    })


$(".add").on("click", function(event) { 
     totalNum += parseInt($(event.target).attr("x"));
     $("#totalNum").text("Total: " + totalNum);
    console.log(totalNum)
    // var k = $("#button1").attr("x");
    // console.log(k)
    if (totalNum === compGuess) {
        alert("You Win!");
        wins++;
        $("#wins").text("Wins: " + wins)
        compGuess = (Math.ceil(Math.random() * 120))
        $("#compGuess").text(compGuess)
        totalNum = 0;
        $("#totalNum").text("Total: " + totalNum);

    } 
    
    if (totalNum > compGuess) {
        alert("You lose, you loser!")
        losses++;
        $("#losses").text("Losses: " + losses)
        compGuess = (Math.ceil(Math.random() * 120))
        $("#compGuess").text(compGuess)
        totalNum = 0;
        $("#totalNum").text("Total: " + totalNum);
    }
    
})

