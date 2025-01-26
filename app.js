// function addNumber(){
//     let numbers= askNumber();
//     let sum= parseFloat(numbers[0])+parseFloat(numbers[1]);
//     console.log(sum);

// }


// function askNumber(){
//     let number1=prompt("enter no one");
//     let number2=prompt("enter number 2");
//     return [number1,number2];
// }


// addNumber();


function changeColor(){
    let colors=askColor();
    let btn=document.querySelector("button");
    let div=document.querySelector("#div");
    let idx=0;
    btn.addEventListener("click",()=>{
        div.style.backgroundColor=colors[idx];
        idx=(idx+1)%colors.length;
        colors=[];
       
})


}

function askColor(){
    let colors=[];
    let noAsk=prompt("plese enter how many color you are after");
    for(let i=0;i<noAsk;i++){
        let color=prompt("enter color");
        colors.push(color);
    }
    return colors;
}


changeColor();