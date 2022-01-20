class Bot {
    makeMove(gameState) {
        if (gameState.rounds.length === 0) {
            return 'D';
        }
        
        frequencyArr =[{name: "P", value: 0},{name: "S", value: 0},{name: "R", value : 0}, {name:"D",value: 0}, {name:"W", value :0}]

        for (freq in frequencyArr) {
            frequencyArr[freq].value = gameState.rounds.filter(round => round.p1 === frequencyArr[freq].name).length;
        }

        frequencyArr.sort(function (a,b) {return a.value-b.value;});  //frequencyArr[0].name - element with lower frequency
        
        const p1DynamitesPlayed = gameState.rounds.filter(round => round.p1 === "D").length;

        //const lastOppMove = gameState.rounds[gameState.rounds.length-1].p2;
        predictedOppMove=frequencyArr[0].name;

        switch(predictedOppMove) {
            case "R": 
                return (p1DynamitesPlayed < 100 ?  "D": "P");
            case "S":
                return "R";
            case "P":
                return "S";
            case "D":
                return "W";
            case "W":
                return "R";
        }
        
    }
}

module.exports = new Bot();


// probabilityArr =[{name: "P", value: 4},{name: "S", value: 23},{name: "R", value : 12}, {name:"D",value: 10}, {name:"W", value :0}]

// probabilityArr.sort(function (a,b) {return a.value-b.value;});

// for (prob in probabilityArr) {
//                 //probabilityArr[prob] = gameState.rounds.filter(round => round.p1 === prob).length;
//                 probabilityArr[prob].value++;
//                 console.log(probabilityArr[prob].value);
//             }
// console.log(probabilityArr[0].name);



