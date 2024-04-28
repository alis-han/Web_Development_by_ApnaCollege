[2,4,6,8,10].every((el)=> el%2==0); //true
[24,6,1].every((el)=> el%2==0); //false

// Ques_2
let num=[1,2,3,1,-1,5,7,-9,-19];
let result=num.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(result);