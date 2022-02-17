const task3Element = document.getElementById('task-3');

function hello () {
    alert("Hey buster!");
}
hello();

function greeting (name){
    alert('Hello ' + name);
}
taskbtn = document.getElementById("task-3");
taskbtn.addEventListener('click', hello);
greeting("Te'kevin");

function students (student1, student2, student3){
    alert('Can i have the following students report to my office ' + student1 + ' ' + student2 + ' and ' + student3);

}
students('Tk', 'Jaylah', 'Cobbi');