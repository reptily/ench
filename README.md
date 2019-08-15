# ENCH - (Ensuing character)

The library is used to easily iterate over a character on a given string

To install the library
```
npm install ench
```

##How it works?
```js
#require the library
const ench = require("ench");

#determine which characters we will iterate over
const v = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789-_=+)(*&^%$#@!;:?";

#indicate the starting position
let str = "aaa";

#create new ench object
const gen = new ench();

#do the test, print 10 sequences
let i=0;
while(i<10){
        str = gen.next(0,str,v);
        console.log(str);
        i++;
}

//console.log
//aab
//aac
//aad
//aae
//aaf
//aag
//aah
//aai
//aaj
//aak
```
