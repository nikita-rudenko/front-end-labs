const Example = {
  fives: [],
  nums: [1, 6, 8, 20, 35, 15, 7],
  calcFives1: function(){
    var self = this;
    this.nums.forEach(function (v) {
      if (v % 5 === 0)
        self.fives.push(v);
    });
  },
  calcFives2: function(){
    this.nums.forEach(function (v) {
      if (v % 5 === 0)
        this.fives.push(v);
    }, this);
  },
  calcFives3: function(){
    this.nums.forEach(function (v) {
      if (v % 5 === 0)
        this.fives.push(v);
    }.bind(this));
  },

  calcFivesNew: function(){
    this.nums.forEach((v) => {
      if (v % 5 === 0)
        this.fives.push(v)
    })
  },
};

console.log(Example.fives);
Example.calcFives1();
console.log(Example.fives);

Example.calcFives2();
console.log(Example.fives);

Example.calcFives3();
console.log(Example.fives);

Example.calcFivesNew();
console.log(Example.fives);
