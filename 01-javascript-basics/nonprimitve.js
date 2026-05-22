//non primitive type is object //
const student = {
    fullName : "Anikesh Jain",
    class : "cse" ,
    section : 1,
    rollNO : 1234567890,
    cgpa : 8.00,
};
//object can call variable in two differents ways//
console.log(student.cgpa);
console.log(student["class"]);