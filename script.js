var actual = MakeRandom();

function MakeRandom(){
    return Math.floor(Math.random() * 900) + 100;
}

function MakeArray(no){
    return String(no).split("").map(Number);
}

function Resett(){
    location.reload();
}

function Showw(){
    alert("Instructions:\nGuess the 3-digit number.\n🐄 Cows = correct digit, correct position.\n🐂 Bulls = correct digit, wrong position.\nKeep guessing!");
}

var showAns = true;
function ToggleAns(){
    if(showAns){
        document.getElementById('ans').innerHTML = actual;
        document.getElementById('ansbutton').innerHTML = "Hide answer";
        showAns = false;
    } else {
        document.getElementById('ans').innerHTML = "";
        document.getElementById('ansbutton').innerHTML = "Show answer";
        showAns = true;
    }
}

// Count cows
function cowCount(guessArray, actualArray){
    let count = 0;
    let cowIndices = [];

    for(let i = 0; i < guessArray.length; i++){
        if(guessArray[i] === actualArray[i]){
            count++;
            cowIndices.push(i);
        }
    }

    for(let i = cowIndices.length - 1; i >= 0; i--){
        guessArray.splice(cowIndices[i], 1);
        actualArray.splice(cowIndices[i], 1);
    }
    return count;
}

// Count bulls
function bullCount(guessArray, actualArray){
    let count = 0;
    for(let i = 0; i < guessArray.length; i++){
        let m = actualArray.indexOf(guessArray[i]);
        if(m !== -1){
            count++;
            actualArray.splice(m, 1);
        }
    }
    return count;
}

function Main(){
    const guess = Number(document.getElementById("try").value);

    if(guess === actual) {
        document.getElementById("result").innerHTML = "YAY YOU WON!!!!!";
        document.getElementById("cows").innerHTML = "";
        document.getElementById("bulls").innerHTML = "";
        return;
    }

    let guessArray = MakeArray(guess);
    let actualArray = MakeArray(actual);

    const a = cowCount(guessArray, actualArray);
    const b = bullCount(guessArray, actualArray);

    document.getElementById("cows").innerHTML = a + " Cows";
    document.getElementById("bulls").innerHTML = b + " Bulls";
}
