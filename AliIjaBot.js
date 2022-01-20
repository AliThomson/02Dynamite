class Bot {
    makeMove(gameState) {
        if (gameState.rounds.length === 0) {
            return 'D';
        }
        const p1DynamitesPlayed = gameState.rounds.filter(round => round.p1 === "D").length;
        const p2DynamitesPlayed = gameState.rounds.filter(round => round.p2 === "D").length;
        const p2WaterfallsPlayed = gameState.rounds.filter(round => round.p2 === "W").length;

        const lastOppMove = gameState.rounds[gameState.rounds.length-1].p2;

        switch(lastOppMove) {
            /*case "R": return (p1DynamitesPlayed < 100 ?  "D": "P");*/
            case "R": return (p1DynamitesPlayed < 100 ?  "D": "P");
            case "S":
                return "R";
            case "P":
                return "S";
            case "D": return (p2DynamitesPlayed < 100 ?  "W": "P");
            case "W":
                return "R";
        }
        
    }
}

module.exports = new Bot();
