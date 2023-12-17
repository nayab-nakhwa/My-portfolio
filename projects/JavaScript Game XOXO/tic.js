// function called whenerver user tap on any box
function myFunc(){
    // selecting all boxes using DOM
    var b1 = document.querySelector("#b1").value;
    var b2 = document.querySelector("#b2").value;
    var b3 = document.querySelector("#b3").value;
    var b4 = document.querySelector("#b4").value;
    var b5 = document.querySelector("#b5").value;
    var b6 = document.querySelector("#b6").value;
    var b7 = document.querySelector("#b7").value;
    var b8 = document.querySelector("#b8").value;
    var b9 = document.querySelector("#b9").value;

    //checking if player x won or not and after 
    // that disabled all the other fields

    if((b1=="x" || b1=="X") && (b2=="x" || b2=="X") && (b3=="x" || b3=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b1=="x" || b1=="X") && (b4=="x" || b4=="X") && (b7=="x" || b7=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b7=="x" || b7=="X") && (b8=="x" || b8=="X") && (b9=="x" || b9=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b3=="x" || b3=="X") && (b6=="x" || b6=="X") && (b9=="x" || b9=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b1=="x" || b1=="X") && (b5=="x" || b5=="X") && (b9=="x" || b9=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b3=="x" || b3=="X") && (b5=="x" || b5=="X") && (b7=="x" || b7=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b2=="x" || b2=="X") && (b5=="x" || b5=="X") && (b8=="x" || b8=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    else if((b4=="x" || b4=="X") && (b5=="x" || b5=="X") && (b6=="x" || b6=="X")){
        document.getElementById("print").innerHTML ="Player X won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player X won🎉");
        }, 800);
    }
    

    //checking of player X finish 
    //checking for player o starts if player o won or
    //not and after that disable all the other fields

     else if((b1=="o" || b1=="O") && (b2=="o" || b2=="O") && (b3=="o" || b3=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b1=="o" || b1=="O") && (b4=="o" || b4=="O") && (b7=="o" || b7=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b7=="o" || b7=="O") && (b8=="o" || b8=="O") && (b9=="o" || b9=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b3=="o" || b3=="O") && (b6=="o" || b6=="O") && (b9=="o" || b9=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b1=="o" || b1=="O") && (b5=="o" || b5=="O") && (b9=="o" || b9=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b3=="o" || b3=="O") && (b5=="o" || b5=="O") && (b7=="o" || b7=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b2=="o" || b2=="O") && (b5=="o" || b5=="O") && (b8=="o" || b8=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }
    else if((b4=="o" || b4=="O") && (b5=="o" || b5=="O") && (b6=="o" || b6=="O")){
        document.getElementById("print").innerHTML ="Player O won🎉";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(() => {
            window.alert("Player O won🎉");
        }, 800);
    }

    else if
    ((b1=="X" || b1=="O") &&
     (b2=="X" || b2=="O") && 
    (b3=="X" || b3=="O") && 
    (b4=="X" || b4=="O") && 
    (b5=="X" || b5=="O") &&
    (b6=="X" || b6=="O") && 
    (b7=="X" || b7=="O") &&
    (b8=="X" || b8=="O") &&
    (b9=="X" || b9=="O") )
    {
        document.getElementById("print").innerHTML = 'Match Tie';
        setTimeout(() => {
            window.alert("Match Tie❗");
        }, 800);
    }

    else{

        //Here printing results
        if(flag==1){
            document.getElementById("print").innerHTML = "Player X Turn";
        }
        else{
            document.getElementById("print").innerHTML = "Player O Turn";
        }
    }
}


//Function to reset Game

function myFunc2(){
    location.reload();
    document.querySelector("#b1").value = '';
    document.querySelector("#b2").value = '';
    document.querySelector("#b3").value = '';
    document.querySelector("#b4").value = '';
    document.querySelector("#b5").value = '';
    document.querySelector("#b6").value = '';
    document.querySelector("#b7").value = '';
    document.querySelector("#b8").value = '';
    document.querySelector("#b9").value = '';
}


//Here onwards, Functions check of the player 
// and put accordingly value X or O

flag = 1;
function myFunc3(){
    if(flag==1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myFunc4(){
    if(flag==1){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myFunc5(){
    if(flag==1){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myFunc6(){
    if(flag==1){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myFunc7(){
    if(flag==1){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myFunc8(){
    if(flag==1){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myFunc9(){
    if(flag==1){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myFunc10(){
    if(flag==1){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myFunc11(){
    if(flag==1){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;

        flag = 1;
    }
}