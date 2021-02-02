'use strict';
// let i = 1;
// const timer = function () {};
// const id = setInterval(timer, 100);
// console.time('1');
const createTimer = function (from = 1, to = 20, interval = 100) {
  if (from > to) {
    throw new RangeError('From must be loweer than to');
  }
  console.time('1');
  let i = from;
  const id = setInterval(() => {
    console.log(i++);
    if (i > to) {
      clearInterval(id);
      console.timeEnd('1');
    }
  }, interval);
};

console.time('1');
count();

function count() {
  let i = 1;
  const id = setInterval(() => {
    console.log(i++);
    if (i > 20) {
      clearInterval(id);
      console.timeEnd('1');
    }
  }, 100);
}
