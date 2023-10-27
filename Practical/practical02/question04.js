// Practical 2 - Question 4

studInfo = [
    {
        id: 15,
        studName: "John",
        studAdminNo: '2312345',
        gender: 'M',
        studGPA: 2.8
    },
    {
        id: 6,
        studName: "Jane",
        studAdminNo: '2354321',
        gender: 'F',
        studGPA: 3.2
    },
    {
        id: 19,
        studName: "Diana",
        studAdminNo: '2312525',
        gender: 'F',
        studGPA: 3.5
    },
    {
        id: 25,
        studName: "Joe",
        studAdminNo: '2366345',
        gender: 'M',
        studGPA: 3.1
    },
    {
        id: 99,
        studName: "Vivian",
        studAdminNo: '2366345',
        gender: '',
        studGPA: 3.75
    },

];

const input = require('readline-sync');

let studentID = input.question("Enter the Student id : ");

let greeting = createGreetingsForStudent(studentID);
// let greeting2 = createGreetingsForStudent(99);


console.log(greeting.greetStudent());
console.log(greeting.greetWithSalutation());
console.log(greeting.greetWithTimeOfDay());
console.log(greeting.yourGPA());

// console.log(greeting2.greetStudent());
// console.log(greeting2.greetWithSalutation());
// console.log(greeting2.greetWithTimeOfDay());
// console.log(greeting2.yourGPA());


function createGreetingsForStudent(studentID) {
    let selectedStudent = null;

    for (let i=0; i < studInfo.length; i++) {
        if (studInfo[i].id == studentID) {
            selectedStudent = studInfo[i];
            break;
        }
    }
    
    // console.log(selectedStudent);

    function averageGPA() {
        let sum = 0;
        for (let i=0; i < studInfo.length; i++) {
            sum += studInfo[i].studGPA;
        }
        return (sum / studInfo.length).toFixed(2);
    }

    let greetingObject = {
        greetStudent : function () {
            // console.log("in greetStudent");
            return `Hi! ${selectedStudent.studName}`;

        },
        greetWithSalutation : function () {
            // console.log("in greetWithSalutation");\
            let salutation = ``;
            switch (selectedStudent.gender) {
                case 'M':
                        salutation = 'Mr. ';
                    break;
                case 'F':
                        salutation = 'Ms. ';
                    break;
            }
            return `Hi! ${salutation}${selectedStudent.studName}`;
        },
        greetWithTimeOfDay : function () {
            //console.log("in greetWithTimeOfDay");

            const todayDate = new Date();
            const hour = todayDate.getHours();

            let dayString = "Good Evening";

            if (hour < 12) {
                dayString = "Good Morning";
            } else if (hour <= 17) {
                dayString = "Good Afternoon";
            }
            return `${dayString}, ${selectedStudent.studName}`;
        }, 
        yourGPA: function () {
            // console.log("in yourGPA");
            const msg = `Your GPA is ${selectedStudent.studGPA} \n` 
                    + `The average GPA of the class is ${averageGPA()}`;
            return msg;
        }
    }

    return greetingObject;
}