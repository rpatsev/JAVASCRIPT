var app = require('../js/app.js');

describe("pow", function() {
  it("should call pow", function() {
    //prepare
   var result;
 
  	// act 
    result = app.pow(2, 4);
	
  	//assert
    expect(result).toBe(16);
  });
  
  
   it("should call pow", function() {
  	//prepare 
    var result;
	
  	// act 
    result = app.pow(4, 0);
	
  	//assert 
    expect(result > 0).toBeTruthy();
  });
 
  
  it ("should call pow", function () {
    //prepare	
    var result;
	
    //act
    result = app.pow(5, 0);
	
    //assert
    expect(result).toBeGreaterThan(0);
  });
  
    xit ("pending spec", function () {
    //prepare	
    var result;
	
    //act
    result = app.pow(0, 0);
	
    //assert
    expect(result).toEqual(0);
  });
});