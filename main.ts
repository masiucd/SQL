let iter = {
  count: 0,
  next() {
    if (this.done()) return undefined;
    this.count++;
    return this.count;
  },
  done() {
    return this.count === 3;
  },
};

let v = iter.next();
let done = iter.done();
console.log(v, done);

v = iter.next();
done = iter.done();
console.log(v, done);

v = iter.next();
done = iter.done();
console.log(v, done);

v = iter.next();
done = iter.done();
console.log(v, done);
