const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    
    test("returns string that the passed number is less than 5 when the value is less than 5", 
    function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });
})