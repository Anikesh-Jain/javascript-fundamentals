//non primitive type is object //
const student = {
    fullName : "Anikesh Jain",
    class : "cse" ,
    section : 1,
    rollNO : 1234567890,
    cgpa : 8.00,
};
stude["cgpa"]=student["cgpa"]+1;
console.log(student.cgpa);
//let value can be update//
// cont value cannot be update but //
//if cont is a object then its key value can be updated //