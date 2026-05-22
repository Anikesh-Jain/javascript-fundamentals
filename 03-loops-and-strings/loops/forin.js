let student = {
    name : "Anikesh Jain",
    age  : 19,
    cgpa : 9.9, 
    isPass : true,
};
for (let key in student){
    console.log("key = ", key, "value = ",student[key]);
}