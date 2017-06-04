var Task = require('./constructorTask');

//4 copies of task object and they all have individual object scope.
var task1 = new Task("create a demo for constructors");
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

//this refers to object scope on whatever object is calling a function

task1.complete();
task2.save();
task3.save();
task4.save();
