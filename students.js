var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
var filePath = './data.txt';

function loadData(){
	var dataContent = fs.readFileSync(filePath, {encoding: 'utf8'});
 	students = JSON.parse(dataContent);
}

function showAllStudents()
{
	for(var student of students)
	{
		console.log(student.name, student.age, student.gender);
	}
	showMenu(students);
}

function createNewStudent()
{
	var name = readlineSync.question('Student name? ');
	var age = readlineSync.question('Student age? ');
	var gender = readlineSync.question('Male/Female? ');

	var newStudent = {};
	newStudent.name = name;
	newStudent.age = parseInt(age);
	newStudent.gender = gender;

	students.push(newStudent);

	showMenu(students);

}
function saveAndExit()
{
	var studentString = JSON.stringify(students);

	fs.writeFileSync(filePath, studentString, {encoding: 'utf8'});
		
}


function showMenu()
{

	console.log('1. Show all students');
 	console.log('2. Create new student');
	console.log('3. Save and exit');

	var selectedNumber = parseInt(readlineSync.question('Choose a number: '));

	if(selectedNumber == 1)
	{

		showAllStudents();
		
	}
	else if(selectedNumber == 2)
	{
		createNewStudent();
		
	}
	else if(selectedNumber == 3)
	{
		saveAndExit();
	}
}

function main(){
	loadData();
	showMenu();
}

main();