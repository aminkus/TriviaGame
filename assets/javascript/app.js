//TODO: When page opens have a page with a start button that clicked starts trivia page
//TODO: When start button is pressed execute function startGame() 
//TODO: function startGame() = creates questions/answers form, creates timer countdown, creates variables for correct and incorrect, execute audio function that plays song(maze?)
//TODO: create function endGame() = when timer is up change dispay to show correct/incorect answers
//TODO: 
//pseudo class checked for checking right answers


$(document).ready(function () {
    //play audio
    var audio = new Audio("1-10 Maze.mp3");
    //clear radio buttons
    $('input[name=question1]').attr('checked',false);
    $('input[name=question2]').attr('checked',false);
    $('input[name=question3]').attr('checked',false);
    $('input[name=question4]').attr('checked',false);
    $('input[name=question5]').attr('checked',false);
5
5   //hides question form
    $("#questionForm").hide();
    $("#showTimer").hide();


    //coutdown timer
    var number = 90;
    //create variables to store right and wrong answers
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    //Variable that will hold our interval ID when we execute the "run" function
    var intervalId;
    //The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not al
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(start, 1000);
    }
    //Create click event that sets clearInterval function, hides start button, shows form, shows timer
    $("#startButton").on("click", function () {
        //play audio file
        audio.play();
        $("#showTimer").show();
        //execute run function
        //hide button
        $("#startButton").hide();
        //show form
        $("#questionForm").show();
        //show timer
        run();
        
    })

    //if user finishes before timer is done they can submit answers and display results
    $("#submit").on("click", function (event) {
        //prevent browser from refreshing when submit button is clicked
        event.preventDefault();
        stop();
        

    })
    //set up function to run timer
    function start() {
        //countdown timer
        number--;
        //display updated timer to screen
        $("#showTimer").html("<h2>" + number + "</h2>");
        //timer logic
        if (number === 0) {
            stop();
        }
    }
    //create function to stop timer and dislay results when timer is done
    function stop() {
        clearInterval(intervalId);
        displayResults();
        audio.pause();
    }


    function displayResults() {

        $("#questionForm").hide();
        $("#showTimer").hide();
        //checking answer
        var radioValue = $("input[name = 'question1']:checked").val();
        if (radioValue === "3") {
            correctAnswers++;
        } else {
            incorrectAnswers++
        }
        var radioValue2 = $("input[name = 'question2']:checked").val();
        if (radioValue2 === "6") {
            correctAnswers++;
        } else {
            incorrectAnswers++
        }
        var radioValue3 = $("input[name = 'question3']:checked").val();
        if (radioValue3 === "7") {
            correctAnswers++;
        } else {
            incorrectAnswers++
        }
        var radioValue4 = $("input[name = 'question4']:checked").val();
        if (radioValue4 === "10") {
            correctAnswers++;
        } else {
            incorrectAnswers++
        }
        var radioValue5 = $("input[name = 'question5']:checked").val();
        if (radioValue5 === "14") {
            correctAnswers++;
        } else {
            incorrectAnswers++
        }
        var displayDiv1 = $("<h1>")
        var displayDiv2 = $("<h1>")
        displayDiv1.text("You got " + correctAnswers + " right")
        displayDiv2.text("You got " + incorrectAnswers + " wrong")
        $("#emptyDiv").append(displayDiv1);
        $("#emptyDiv2").append(displayDiv2);

    }





})