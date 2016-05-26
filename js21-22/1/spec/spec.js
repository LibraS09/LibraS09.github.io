var f = require('../js/myscript.js');

describe("fun", function() {
  it("function pow()", function() {
    var result;
    result = f.pow(2, 2);

    expect(result).toBe(4);
  });
  it("function pow()", function() {
    var result;
    result = f.pow(2, 0);

    expect(result).toBe(1);
  });
});
