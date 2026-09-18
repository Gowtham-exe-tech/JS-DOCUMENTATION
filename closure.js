// let score = 0;    // unsafe as i can do like score=100000

// function increasePoint (point) {
//     score += point;
//     console.log(`+${point}pts`);
// }

// function decreasePoint (point) {
//     score -= point;
//     console.log(`+${point}pts`);
// }

// function getScore(){
//     console.log(`Final score is ${score}`);
// }

// increasePoint(5);
// increasePoint(5);
// decreasePoint(6);
// getScore();


// ----------------------------------------------------------------------

function createGame(){
    let score = 0;

    function increasePoint (point) {
        score += point;
        console.log(`+${point}pts`);
    }

    function decreasePoint (point) {
        score -= point;
        console.log(`+${point}pts`);
    }

    function getScore(){
        console.log(`Final score is ${score}`);
    }

    return { 
                increasePoint,
                decreasePoint,
                getScore,
    };
}

let game = createGame();

game.increasePoint(10);
game.increasePoint(5);
game.decreasePoint(3);
game.getScore();

// O/P

// +10pts
// +5pts
// +3pts
// Final score is 12