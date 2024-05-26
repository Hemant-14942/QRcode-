
const qrtext = document.getElementById("qrtext");
const qrimg = document.getElementById("qrimg");
const btn= document.getElementById("btn");
console.log(qrtext,qrimg,btn);

btn.addEventListener('click',()=>{

    const inputValue = qrtext.value;
    console.log(inputValue);

    if(!inputValue){
        alert("please enter a valid URL")
        return;
    }else{
        qrimg.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inputValue;
    }
});
