// break up with var....

//  no more use var
// let: it to reassign...
// constant: do not allow to  reassign...

const number=[3,4,5,6];
number.push(123);

// console.log(number);

for( var i= 0;i<=number.length;i++){
 

    let n=number[i];

    console.log(n);
}

function Add(a,b){
    if(b==undefined){
        b=0;
    }

    const sum=(a+b);
    return sum;
}
var result = Add(10);
console.log('Sum is: '+ result);

function FullName(first,last){

    FullName = first +' '+ last;

    return FullName;
}
const name= FullName('abdus','shobhan');
console.log(name);
