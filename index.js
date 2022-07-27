let selected;
let val;

const rate=document.getElementById("select");
const submitButton=document.getElementById("submit");

const changeStyle=(event)=>{
    if(event.target.localName=='li'){
            if(selected!==undefined){
                selected.style.backgroundColor=''
                selected.style.color='';
            }
            if(selected!=event.target){
            event.target.style.backgroundColor='hsl(217, 12%, 63%)';
            event.target.style.color='white';
            selected=event.target;
            val=selected.innerText;
            }
            else{
                val=undefined;
                selected=undefined;
            }
        }
};

const submit=()=>{
    if(val!=undefined){
            let ratingContainer=document.getElementsByClassName("rating");
            ratingContainer[0].style.transform='translateY(-200%)';
            let thankyouContainer=document.getElementsByClassName("thankyou");
            thankyouContainer[0].style.transform='translateY(-105%)';
            let addrating=document.getElementById("add-rating");
            addrating.textContent=val;
        }
};


rate.addEventListener("click",event => { changeStyle(event); });
submitButton.addEventListener("click",()=> { submit(); });