class Rectangle {
  constructor (width, height) {
    this._width  = width;
    this._height = height;
  }
  set width  (width)  {
    this._width = width
  }
  get width  ()       {
    return this._width
  }
  set height (height) {
    this._height = height
  }
  get height ()       {
    return this._height
  }
  get area   ()       {
    return this._width * this._height
  }
}
const r = new Rectangle(50, 20);

console.log(r.area === 1000);

r.width = 50;
r.height = 30;

console.log(r.area === 1500);
