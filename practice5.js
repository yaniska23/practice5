function Toggle(){
    // alert('abc')
    const sidebar=document.getElementById("sidebar");
    console.log(sidebar.style.display)

    if(sidebar.style.transform==="translateX(0%)"){
        sidebar.style.transform='translateX(150%)'
    }else{
        sidebar.style.transform="translateX(0%)"
    }
}

// let index=0;
// let array=["Grow","Up","Your","Startups"];
// function Typewritereffect(){
//     if(index<Typewritereffect.length){
//     document.getElementById("Typewritereffect")
//     }
//     // alert('abc')
// let show=document.getElementById("Typewritereffect");
// show.innerHTML += array[index]+" ";
// index++;
// }
// setInterval(Typewritereffect,1000);


let i=0,text;
text="grow up your startups"

function typing(){
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
  }
}
setInterval(typing,200);

// typing();
function Model(){
  let value= document.getElementById("value");
 console.log(value.style.display)
 if(value.style.display==="flex"){
  value.style.display='none'
 }
 else{
  value.style.display='flex'

 }
}
setInterval(Model,500);