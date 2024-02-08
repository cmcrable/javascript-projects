const winner = require('../RPS.js');

describe("whoWon", function() {

    test("returns true if players tie", 
    function(){
        let result = winner('rock','rock');
        expect(result).toBe('TIE!');
    });

    test("returns true if player 2 wins with paper vs rock",
    function(){
        let result = winner('rock','paper');
        expect(result).toBe('Player 2 wins!');
    });

    test("returns true if player 2 wins with scissors vs paper",
    function(){
        let result = winner('paper','scissors');
        expect(result).toBe('Player 2 wins!');
    });

    test("returns true if player 2 wins with rock vs scissors",
    function(){
        let result = winner('scissors','rock');
        expect(result).toBe('Player 2 wins!');
    });

    test("returns winning result for player 1",
    function(){
        let result = winner('rock','scissors');
        expect(result).toBe('Player 1 wins!');
    });

    
    test("returns 'Cheater!' if input is other than rock, paper or scissors",
    function(){
        let result = winner('rock','sword');
        expect(result).toBe('Cheater!');
    });
})