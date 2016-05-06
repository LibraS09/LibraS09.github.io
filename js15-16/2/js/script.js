$(function() {

function Human(name, age, gender, height, weight) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
};
function Worker(job, pay) {
  this.job = job;
  this.pay = pay;

};
function Student(study, stipend) {
  this.study = study;
  this.stipend = stipend;
};

Worker.prototype = new Human ("Иван", "24", "м", "180", "80");
Student.prototype = new Human ("Ник", "20", "м", "179", "70");

Worker.prototype.work = function() {
  console.log (this.name+" работает на "+this.job+" получает з/п "+this.pay+" у.е");
};
Student.prototype.watchTv = function() {
  console.log (this.name+" учится в "+this.study+" получает стипендию "+this.stipend+" у.е");
};

var worker = new Worker("Фирма1", "500");
console.log (worker);
worker.work();
var student = new Student("ВУЗ", "100");
console.log (student);
student.watchTv();

});
