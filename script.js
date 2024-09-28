function roller(){
    let randomNum = Math.floor(Math.random()* 6) + 1;
    document.getElementById('number').innerHTML = randomNum;
    if (randomNum === 1){
        document.getElementById('image').src = 'images/1 Dice.png';
    }
 else if(randomNum === 2){
    document.getElementById('image').src = 'images/2 Dice.png'
 }
 else if(randomNum === 3){
    document.getElementById('image').src = 'images/3 Dice.png'
 }
 else if(randomNum === 4){
    document.getElementById('image').src = 'images/4 Dice.png'
 }
 else if(randomNum === 5){
    document.getElementById('image').src = 'images/5 Dice.png'
 }
 else if(randomNum === 6){
    document.getElementById('image').src = 'images/6 Dice.png'
 }
}
function refresh(){
    document.getElementById('number').innerHTML = "";
    document.getElementById('image').src = "";
}