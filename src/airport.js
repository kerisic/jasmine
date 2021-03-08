class Airport {
  static get DEFAULT_CAPACITY() {
    return 10;
  }
  constructor(capacity = Airport.DEFAULT_CAPACITY) {
    this.planes = [];
    this.capacity = capacity
  }
  land(plane) {
    if (this.planes.length === this.capacity) {
      throw new Error("This airport is full");
    }
    if (this.is_stormy() === true) {
      throw new Error("Too stormy to land right now");
    }
    this.planes.push(plane);
  }
  take_off(plane) {
    var num = this.planes.indexOf("planes");
    return this.planes.splice(num)
  }
  is_stormy() {
    var weather = Math.random();
    return (weather > 0.8);
  }
}
