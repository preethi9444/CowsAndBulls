var actual=MakeRandom();
function MakeRandom(){
    const pc=Math.floor(Math.random()*900)+100;
    return pc;
}
function MakeArray(no){
    const arr=[];
    while(no!==0){
        let m=no%10;
        arr.push(m);
        no=Math.floor(no/10);
    }
    return arr.reverse();

}
function Resett(){
    location.reload();
}
function Showw(){
    alert("Instructions:\nGuess the 3-digit number.\n🐄 Cows = correct digit, correct position.\n🐂 Bulls = correct digit, wrong position.\nKeep guessing!");

}
var showAns=true;
function ToggleAns(){
    
    if(showAns){
    document.getElementById('ans').innerHTML=actual;
    document.getElementById('ansbutton').innerHTML="Hide answer";
    showAns=false;}
    else{
        document.getElementById('ans').innerHTML="";
        document.getElementById('ansbutton').innerHTML="Show answer";
        showAns=true;
    }

}

function Main(){
    const guess=Number(document.getElementById("try").value);

    if(guess===actual) {

        document.getElementById("result").innerHTML="YAY YOU WON!!!!!";
        document.getElementById("cows").innerHTML="";
        document.getElementById("bulls").innerHTML="";

    return;}
    else{
        const guessArray=MakeArray(guess);
        const actualArray=MakeArray(actual);
        const cowCount=(guessArray, actualArray)=>{
            let count=0;
            for(let i=0;i<3;i++){
                if(guessArray[i]===actualArray[i]){
                    count++;
                    delete actualArray[i];}
            }
            return count;
        }
        const bullCount=(guessArray,actualArray)=>{
            let count=0;
            for(let i=0;i<3;i++){
                if((actualArray.includes(guessArray[i]) && (actualArray[i]!==guessArray[i]))) count++;
            }
            return count;            
        }
        const a=cowCount(guessArray,actualArray);
        const b=bullCount(guessArray,actualArray);
        document.getElementById("cows").innerHTML=a+" Cows"
        document.getElementById("bulls").innerHTML=b+" Bulls";
        return;
    }
}
