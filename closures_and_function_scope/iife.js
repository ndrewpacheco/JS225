function countdown(num) {
  (function(n) {
    while (n >= 0) {
      console.log(n);
      n -= 1;
    }

    console.log('Done!');
  })(num);
}



function countdown(num) {
  (function(n) {

    (function count(n) {
      console.log(n);
      if (n === 0) return;
      count(n - 1);
    })(n);

    console.log('Done!');
  })(num);
}




countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!