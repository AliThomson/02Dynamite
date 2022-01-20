class Bot {
    makeMove(gamestate) {
        if (gamestate.rounds.length === 0) {
            return 'D';
        }
        const probabilityArr {"P": 0,"S": 0,"R": 0, "D" : 0, "W" :0};
        for (prob in probabilityArr) {
            probabilityArr[prob] = gameState.rounds.filter(round => round.p1 === prob).length;
        }
        
        const p1DynamitesPlayed = gameState.rounds.filter(round => round.p1 === "D").length;

        const lastOppMove = gameState.rounds[gameState.rounds.length-1].p2;

        switch(lastOppMove) {
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
