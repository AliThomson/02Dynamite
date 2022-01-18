class Bot {
    makeMove(gamestate) {
        if (gamestate.rounds.length === 0) {
            return 'D';
        }
        const p1DynamitesPlayed = gameState.rounds.filter(round => round.p1 === "D").length;

        const lastOppMove = gameState.rounds[gameState.rounds.length-1].p2;

        switch(lastOppMove) {
            case "R": if (p1DynamitesPlayed < 100) {
                return "D"
             } else {
                return "P"
             };
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
