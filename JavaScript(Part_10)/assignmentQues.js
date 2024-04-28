// Ques2
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
});

// Ques3
let h2=document.querySelector("h2");
let input=document.querySelector("input");
input.addEventListener("input",function(){
    h2.innerText=this.value;
});