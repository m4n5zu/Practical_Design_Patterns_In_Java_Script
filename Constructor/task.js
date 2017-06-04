var task = {
  title : 'My task',
  description : 'My description'
};
//the same result as above var task = Object.create(Object.prototype);

Object.defineProperty(task, 'toString', {
  value: function() {
      return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false //if false you cannot redefine property
});


//inheritance
var urgentTask= Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
      return this.title + ' ' + 'urgent';
  },
  writable: false,
  enumerable: false,
  configurable: false //if false you cannot redefine property
});


task.toString= 'hi'; //nothing happens to function
console.log(urgentTask.toString()); //now it is ok because of writable is false
console.log(Object.keys(task)); //if enumerable is false the to String property is invisible
