// const text='This is 
// abdus shobhan';
// console.log(text);

const  text=`Md abdus shobhan
 dept. of computer science and Engineering
 (CSE)

`
console.log(text);

// const a=10
// const b=20
// const c=(a+b);
// const summary = 'sum is '+ a +" and "+ b +" is= " + c;

// console.log(summary);
const a=10;
const b=20;
const c=(a+b);
const summary=`
sum is ${a}  and ${b} is = ${c}

`;

// more arrow function in javaScript...
console.log(summary);

function add(first,second){

    return first+second;
}
const sum= add(2,4);

console.log(sum);

let myFunction = (a, b) => a * b;
let reuslt=myFunction(2,4);
console.log(reuslt);

let mySum = (a,b) => a+b;
let result=mySum(10,40);
console.log('sum is = '+ result);


let FullName= (first,last)=>first+' '+last;

let name=FullName('md. abdus','shobhan');
console.log(name);
// no parameter arrow function.....
const getPI=()=>3.14;
console.log(getPI);
// one parameter to double.....

const single=(a)=>a*5;
const res=single(1);
console.log(res);

// Multiline arrow function........

let Multiline=(a,b,c)=>{


    const firstSum=a+b;
    const secoundSum=b+c;
    const Multiplied=firstSum+secoundSum;
    const res=Multiline/2;
    return res;
}
let value= Multiline(2,3,4);
console.log(value);

const max=Math.max(3,4,5,6);
console.log('Max Number is:'+max);
// max element form array....
const array=[34,56,78,444];
const MaxNumber =Math.max(...array);
console.log(...array);
console.log('Largest Number is: '+ MaxNumber);

let number=[3,4,5,6];
let all_Number= [32,45,...number,4];
console.log(all_Number);
const su=Math.max(all_Number);
console.log(su);


// Object Array distructing..............
// Know Thyself
let a1, b1, rest;
[a1, b1] = [10, 20];

console.log(a1);
// Expected output: 10

console.log(b1);
// Expected output: 20

[a1, b1, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]



const arr = [1, 2, 3, 4];
const [a3, b3] = arr;
console.log(a3) // prints 1
console.log(b3) // prints 2

// Object and array distructuing
const fish={

    name:  'abdus_shobhan',
    address: 'Thakurgaon',
    color: 'Silver',
    phone: '017354874',
    price: 400,
    
}
// const color = fish.color;
// const phone=fish.price;
// console.log(phone);
// console.log(color);

// const {age,profession} = {name:'abdus',age:56,profession:'teacher'};
// console.log(age);
// console.log(profession);

// const {address}=fish;

// console.log(address);

// const {name4}={addrss:'Thakurgaon',name4:'abdus_shobhan'};
// console.log(name4);
const [first]=[3,4,5];
console.log('array is '+ first);


const arra=[3,4,5,6];

const maxnum=Math.max(...arra);
console.log('Maxmuam Number is '+maxnum);




