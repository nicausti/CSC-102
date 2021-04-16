//Creating countdown function from 10 to 0 and then Blastoff!
function countDown() {
    var count = 10;
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;
    //Going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //Then to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //Then to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //Then to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //To 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //To 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //To 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //To 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //To 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blastoff!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
        count = count - 1;
    }, 10000);
}
function countDownTimerV2(){
    var count = 10;
    for(var i = 1; i <= 10; i++) { 
    setTimeout(function(){
    document.getElementById("countDownTimer").innerHTML = count;
    count--;}, 1000* i);

} 
setTimeout(function(){
document.getElementById("countDownTimer").innerHTML = "Blastoff!";
count--;}, 11000);}

//Creating the function to play Craps
function playCraps(){
    //Creating the variables for die1, die2, and the sum
    var die1; 
    var die2;
    var sum;
    //Random number generator, multiplied by 6 and with a ceiling
    die1= Math.ceil(Math.random()*6);
    die2= Math.ceil(Math.random()*6);
    //Notating the sum
    sum= die1 + die2;
    //To display results
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //Generating rules of Craps game
    if(sum == 7 || sum == 11){
    document.getElementById("crapsResults").innerHTML = "Craps! You Lose!";}
    
    else if(die1 == die2 && die1%2 == 0){
    document.getElementById("crapsResults").innerHTML = "Doubles! You Win!";}
    
    else document.getElementById("crapsResults").innerHTML = "Push. Please Try Again.";
    }
    
    //Sandbox for creating loop timer
    function runSandbox(){
        var count = 10;
        for(var i = 1; i <= 10; i++) { 
        setTimeout(function(){
        document.getElementById("sandboxDisplay").innerHTML = count;
        count--;}, 1000* i);
    
    } 
    setTimeout(function(){
    document.getElementById("sandboxDisplay").innerHTML = "Blastoff!";
    count--;}, 11000);
    }

    