let str="Pawan Chavan";
// let regex=/Pawan/;
// let res=regex.test(str);
// console.log(res);         // true

// or operator | or pipe operator
// let fruits="Banana Apple Mango Grapes";
// let regex1=/Apple | Mango | Watermelon/;
// let res1=regex1.test(fruits);
// console.log(res1);


// Ignore case (i flag)

// let regex2=/pawan/i;
// let res3=regex2.test(str);
// console.log(res3);

// let regex=/Pawan/;
// let res4=str.match(regex);
// console.log(regex);

// let str2="Twinkle twinkle little star";
// let ourRegex=/twinkle/ig;
// let res=str2.match(ourRegex);
// console.log(res);


// let sample="Beware of the bugs in above code";
// let regex4=/[aeiou]/ig;
// let res2=sample.match(regex4);
// console.log(res2);


// let a = "3 blind mice";
// let regex=/[^0-9aeiou ]/ig;  // space not 
//let regex=/[^0-9aeiou]/ig;  // space included
// let res=a.match(regex);
// console.log(res);

// let b ="Mississippi";
// let reg=/s+/g;
// let res1=b.match(reg);
// console.log(res1);


// let c ="titanic";
// let regex=/t[a-z]+i/;
// let regex=/t[a-z]*i/;
// let regex=/t[a-z]*?i/;
// let res=c.match(regex);
// console.log(res);

// let text="<h1>Winter is coming</h1>";
// let myRegex=/<.*>/; // greedy search
// let myRegex=/<.*?>/; // lazy search
// let res=text.match(myRegex);
// console.log(res);


// find out criminals
// let crowd='P1P2P3P4P5P6CCCP7P8P9';
// let reCriminals=/C+/g;   // one or more c
// let res=crowd.match(reCriminals);
// console.log(res);


// Match beginning string patterns
// let rickyAndCal="Cal and Ricky both like racing."
// let calRegex=/^Cal/;  // checks Cal is at beginning at string if not return false
// let result=calRegex.test(rickyAndCal);
// console.log(result);

// The ending string patterns

let caboose="The last car on a train is the caboose";
let lastRegx=/ caboose$/;
let res=lastRegx.test(caboose);
console.log(res);