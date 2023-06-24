const fish={

    name:'abdus_shobhan',
    Address:'Thakurgaon',
    profession:'Teacher',
    phone:'01637762658',
    age:'23'
}
const address=fish.Address;
console.log(address);

const {roll}={name:'abdus_shobhan',roll:'400393'};

console.log(roll);

// array distructor.....

const [first,second] =[3,4,5,6];
console.log(first,second);

const Book= ['Bangla','English','Islam','Physics'];
const [king,loss]=Book;
console.log(king);

const add =(a,b,c)=>(a*5,b*5,c*4);

const result=add(1,2,3);
console.log(result);
let line=`I love Bangladesh.
          I Wanted To be a porgrammer.
          I Will be a DUETian InshAllah. 

`
console.log(line);

const defaue= (a,b=1)=>a+b;

// const d=defaue(3);

const f= defaue(2);



console.log(f);