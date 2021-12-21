let foo = {
  a: 0,
  incrementA() {
    let incremennt = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};