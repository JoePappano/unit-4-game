$(document).ready(

    // var compGuess = 0;
    // var totalNum = 0;

    $("#play").on("click", function () {
        compGuess = (Math.ceil(Math.random() * 120))
        $("#compGuess").text(compGuess)
    })
)

$(document).ready(
    $("#button1").on("click", function () {
        button1Guess = (Math.ceil(Math.random() * 19))
        $("#button1").text(button1Guess)
    })
)

$(document).ready(
    $("#button2").on("click", function () {
        button2Guess = (Math.ceil(Math.random() * 19))
        $("#button2").text(button2Guess)
    })
)

$(document).ready(
    $("#button3").on("click", function () {
        button3Guess = (Math.ceil(Math.random() * 19))
        $("#button3").text(button3Guess)
    })
)

$(document).ready(
    $("#button4").on("click", function () {
        button4Guess = (Math.ceil(Math.random() * 19))
        $("#button4").text(button4Guess)
    })
)


