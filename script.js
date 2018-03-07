// (function t(){
//     return{

//     }
// })()

var inputChar = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'];
var listParent = document.getElementById("list-parent");
var counter = 0;
var patternArray = ['0,1,2', '0,3,6', '0,4,8', '1,4,7', '2,5,8', '2,4,6', '3,4,5', '6,7,8'];
var userInput = minArray = [];
var resultDiv = document.getElementById('result');
var playerDiv = document.getElementById('player');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var winner;

function checkCompletion() {
    console.log('main function ');

    for (var i = 0; i < patternArray.length; i++) {
        minArray = patternArray[i].split(',');
        if (userInput[minArray[0]] == 'x' && userInput[minArray[1]] == 'x' && userInput[minArray[2]] == 'x') {
            console.log(minArray);
            return 'X';
        } else if (userInput[minArray[0]] == 'o' && userInput[minArray[1]] == 'o' && userInput[minArray[2]] == 'o') {
            console.log(minArray);
            return 'O';
        }
    }
}

function makeLine() {
    console.log('xcnkcnd', listParent.children);
    var target1 = listParent.children[parseInt(minArray[0]) ];
    var target2 = listParent.children[parseInt(minArray[2]) ];
    var rect1 = target1.getBoundingClientRect();
    console.log(rect1.top, rect1.right, );
    var rect2 = target2.getBoundingClientRect();
    console.log(rect2.top, rect2.right, );
    
    rect1Top = rect1.top + 25 ;
    rect1Right =  rect1.right-66;
    rect2Top = rect2.top + 25;
    rect2Right = rect2.right-66;

    context.beginPath();
    context.moveTo( rect1Right,rect1Top);
    context.lineTo( rect2Right,rect2Top);

    //console.log(rect1Right, rect1Top, rect2Right, rect2Top);
    context.strokeStyle="#FF0000";
    context.stroke();
}

listParent.addEventListener('click', function (e) {

    let target = e.target;
    let targetId = e.target.getAttribute('data-id');

    target.innerHTML = counter % 2 == 0 ? 'o' : 'x';
    userInput[targetId] = counter % 2 == 0 ? 'o' : 'x';
    playerDiv.innerHTML = counter % 2 != 0 ? "Player 1's Turn" : "Player 2's Turn";
    if (counter >= 4) {
        winner = checkCompletion();
        console.log('winner', winner);
        resultDiv.innerHTML = winner ? `${winner} is the winner` : counter == 8 ? 'draw' : 'Not Completed';
        winner ? this.removeEventListener('click', arguments.callee) : null;
        winner ? makeLine() : null
    }
    ++counter;

});




