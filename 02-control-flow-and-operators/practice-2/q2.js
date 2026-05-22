let marks = prompt("enter your marks");
console.log(marks);
if(marks>=80 && marks<=100)
{
    console.log("your marks are =" , marks ,"and your grade is A");
}
else if(marks>=70 && marks<=89)
{
    console.log("your marks are =" , marks ,"and your grade is B");
}
else if(marks>=60 && marks<=69)
{
    console.log("your marks are =" , marks ,"and your grade is C");
}
else if(marks>=50 && marks<=59)
{
    console.log("your marks are =" , marks ,"and your grade is D");
}
else 
{
    console.log("your marks are =" , marks ,"and your grade is F");
}