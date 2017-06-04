var Task = function (name) {
  this.name = name;
  this.completed = false;

}

// ClassName.prototype.methodName = function(arguments) {
//
// };

Task.prototype.complete = function() {
  console.log('completing task:' + this.name);
  this.completed = true;
}

Task.prototype.save= function(){
  console.log('saving Task:' +this.name);
}

module.exports = Task; //reference to Task
