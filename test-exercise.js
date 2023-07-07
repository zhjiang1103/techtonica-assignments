function createScoreBoard(){
    const scoreBoard={
        name:"The Best Ever",
        score:1000000,
    };
    //scoreboard={"The best Ever": 1000000, "John" : 100}
    return scoreBoard;
}

console.log(createScoreBoard())


//function addPlayer(createScoreBoard, player, score){
 //   scoreBoard.name=
//}

function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373))

function removePlayer(scoreBoard, player){
    delete scoreBoard[player];
    return scoreBoard;
}
removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas');

function updateScore(scoreBoard,player,addNumer){
    scoreBoard[player]+= addNumber;
    return scoreBoard;
}
updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);




const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
  };

  function applyMondayBonus(scoreBoard){
    for (let player in scoreBoard){
        scoreBoard[player]+=100;
    }
    return scoreBoard;
  }
applyMondayBonus(scoreBoard);



function normalize(score) {
    return 2 * score + 10;
  }
  
  const params = { score: 400, normalizeFunction: normalize };
  normalizeScore(params);

  function normalizeScore(params){
    return params.normalizeFunction(params.score);
  }


