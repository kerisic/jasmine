describe('Weahter',function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });
  it('gives stormy sometimnes',function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it('gives not stormy other times',function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
