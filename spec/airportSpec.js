describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });
  describe('can land a plane', function(){

    it('when land method is called', function(){
      spyOn(airport, 'is_stormy').and.returnValue(false);
      airport.land("plane")
      expect(airport.planes).toContain("plane");
    });
    it('but not when airport is full', function(){
      spyOn(airport, 'is_stormy').and.returnValue(false);
      for (var i = 0; i < 10; i++){
        airport.land("plane");
      };
      expect(function(){ airport.land("plane"); } ).toThrow(new Error("This airport is full"));
    });
    it('but does not land when stormy', function() {
        spyOn(airport, 'is_stormy').and.returnValue(true);
        expect(function(){ airport.land("plane"); } ).toThrow(new Error("Too stormy to land right now"));
    });
  });

  describe('can tell a plane to take off', function(){

    it('when take off method is called', function(){
      airport.take_off("plane")
      expect(airport.planes).not.toContain("plane");
    });
  });


});
