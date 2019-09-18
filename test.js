const Math = require("./index.js");

const v = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789-_=+)(*&^%$#@!;:?";
let str = "aaa";
const gen = new Math();


let i=0;
while(i<10){
    str = gen.next(0,str,v);
    console.log(str);
    i++;
}
