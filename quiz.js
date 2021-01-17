var body = document.querySelector("#body")
var counter = document.querySelector("#counter")
var main = document.querySelector("#main")
var questions = document.querySelector("#questions")
var start = document.querySelector("#start")
var btns = document.querySelector("#btns")
var count = 20;
var Qnumber = 0;
var countdown = "";
var Q = ["Commonly used data types do NOT include?", 
         "The condition in an if/else statement is enclosed with _________.",
         "Arrays in JavaScript can be used to store _________.",
         "String values must be enclosed within _________ when being assigned to variables.",
         "A very useful tool used during development and debugging for printing content to the debugger is:"];

var A = ["Strings", "quotes", "numbers and strings",
         "quotes", "Gitbash"];


var B = ["Booleans", "parenthesis", "other arrays",
         "commas", "CSS"];


var C = ["Alerts",  "curly brackets", "booleans",
         "curly brackets", "console.log"];


var D = ["Numbers",  "square brackets", "all of the above",
         "parenthasis", "While Statements"];

var points = 0;

//Start Quiz
var startQuiz = function(event) {
    //Start timer
    timer();

   questions.textContent = Q[0];
   
   //create multiple buttons
   createMult();
};

//Timer
var timer = function() {
        countdown = setInterval(function(){
        document.getElementById('counter').innerHTML = count; count--
        
        if (count <= 0) {
            clearInterval(countdown)
            alert("You're out of time!");
            end();
        }
    }, 1000); 
};

//create multiple choice buttons
var createMult = function(){

    start.remove(); 

    var btn1 = document.createElement("button");
    btn1.id = 1;
    btn1.className = "btn"
    btn1.textContent = A[0];
    btns.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.id = 2;
    btn2.className = "btn"
    btn2.textContent = B[0];
    btns.appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.id = 3;
    btn3.className = "btn"
    btn3.textContent = C[0];
    btns.appendChild(btn3);

    var btn4 = document.createElement("button");
    btn4.id = 4;
    btn4.className = "btn"
    btn4.textContent = D[0];
    btns.appendChild(btn4);
};

//Next question
var next = function() {
    var n = Qnumber
    questions.textContent = Q[n]
    document.getElementById("1").textContent = A[n];
    document.getElementById("2").textContent = B[n];
    document.getElementById("3").textContent = C[n];
    document.getElementById("4").textContent = D[n];
    if (Qnumber === 5){
        end();
    }
};    

//Correct?
var check = function(event){
    var right = event.target
    if (Qnumber === 0 && right === document.getElementById("3")) {
        points++;
        count= count + 5;
        alert("correct");
    } else if (Qnumber === 1 && right === document.getElementById("2")) {
        points++;
        alert("correct");
        count= count + 5;
    } else if (Qnumber === 2 && right === document.getElementById("4")) {
        points++;
        alert("correct");
        count= count + 5;
    } else if (Qnumber === 3 && right === document.getElementById("1")) {
        points++;
        alert("correct");
        count= count + 5;
    } else if (Qnumber === 4 && right === document.getElementById("3")) {
        points++;
        alert("correct");
        count= count + 5;
    } 
    else {
        alert("Incorrect");
        count= count - 5;
    }
    Qnumber++;
    console.log(Qnumber);
    console.log('You have' + points + 'points')
    next();
};

//POPUP
var highscorepopup = function() {
    var sig = localStorage.getItem("initials");
    var pnt = localStorage.getItem("points");

    alert(sig + " " + "has the highscore of" + " " + pnt);

    window.location.reload(); 
};

//Initials Input
var submitInput = function(event) {
    var inputInitials = document.getElementById("initials").value;
    if(!inputInitials) {
        alert("You need to fill in your initials!");
    }
    else{
        localStorage.setItem("initials", inputInitials);
        console.log(inputInitials);
    }
    
    //highscore popup
    highscorepopup();
};

//End Quiz
var end = function() {
    clearInterval(countdown);
    counter.remove();
    btns.remove();

    questions.textContent = "All Done! You scored" + " " + points + " " + "out of 5 points";
    localStorage.setItem("points", points)

    var initialsInput = document.createElement("input");
    initialsInput.placeholder = "Enter Initials";
    initialsInput.id = "initials"
    initialsInput.className = "btn";
    main.appendChild(initialsInput)

    var initialsbtn = document.createElement("button");
    initialsbtn.id = "Ibtn";
    initialsbtn.textContent = "Submit";
    initialsbtn.className = "btn";
    main.appendChild(initialsbtn);

    initialsbtn.addEventListener("click", submitInput)
};

//Event Listeners
start.addEventListener("click", startQuiz);
btns.addEventListener("click", check);
