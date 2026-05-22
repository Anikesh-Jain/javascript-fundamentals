//This method doesnt chane the origial string it make another string aplly the method.

let str = "jain";
let str2 = "Anikesh";
let str3 = "  Anikesh Jain aka ALVARO KAISER 95  ";
let str4 = "Toji Fushiguro";
let str5 = "Toji Toji Toji";
console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(str3.trim());      //remove allt the whitespaces
console.log(str4.slice(1,7));  //Extract a part of the string
console.log(str2.concat(str)); //adding two strings
let result ="aura means "+ str4; 
console.log(result);
console.log(str4.replace("Toji","Megumi"));//replace a part of the string with another string 
console.log(str5.replaceAll("Toji","Megumi"));//reaplace all the occuring string with another one
console.log(str3.charAt(5)); //gives the character at the given index