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