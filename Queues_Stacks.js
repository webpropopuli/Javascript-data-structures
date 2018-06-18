function S() {
    this.data = [];
}

S.prototype.push = function(v) {
    this.data.push(v);
    }

S.prototype.pop = function(v) {
    this.data.pop();
} 

S.prototype.size = function () {
    return this.data.length - 1;
}

S.prototype.isEmpty = function () {
    return !(this.length);
}

S.prototype.peek = function () {
    return this.data[this.data.length -1];
}

S.prototype.display = function () {
    console.log(this);
}
// This Queue works by inserting new elements at the *bavk of the array (arr[0])
// causing the earlies elemes to bubble to the end of the array.
// Removing is just a pop()

function Q() {
  this.data = [];
}

Q.prototype.enqueue = function(r) { // add 'r' to *Beginning of array
  this.data.unshift(r);
  }

Q.prototype.dequeue = function(num) { // remove from the *end
    this.data.pop();
 //var x = -1;
 // this.data.slice(x);
}

Q.prototype.rear = function() { // element[0] is bottom of stack
  return this.data[0];
}

Q.prototype.front = function() {
  return this.data[this.data.length - 1];
}

//Q.prototype.size = function() {
//  return this.data.length;
//}
Q.prototype.display = function() {
    console.log(this);
}
// Create a Queue
console.clear();

const s = new S();
const q = new Q();

var val = 'dog';
q.enqueue(val); 
s.push(val);
console.log(`adding ${val}`);

val = "cat";
q.enqueue(val); 
s.push(val);
console.log(`adding ${val}`);

val = 'fish';
q.enqueue(val); 
s.push(val);
console.log(`adding ${val}`);

console.log("Original data...");
q.display();
s.display();

q.dequeue();
s.pop();
console.log("Data after removal")

q.display();
s.display();
console.log(`Size of the Queue: ${q.data.length}`)