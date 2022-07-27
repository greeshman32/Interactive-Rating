let selected;
let val='0';

const rate=document.getElementById("select");
const submitButton=document.getElementById("submit");

const changeStyle=(event)=>{
    if(event.target.localName=='li'){ //checks if the user has clicked on li or ul
            if(selected!==undefined){ // change the previosly selected rating to normal
                selected.style.backgroundColor=''
                selected.style.color='';
            }
            if(selected!=event.target){ //checks if the event is already selected 
            event.target.style.backgroundColor='hsl(217, 12%, 63%)';
            event.target.style.color='white';
            selected=event.target;
            val=selected.innerText;
            }
            else{ //this will unselect the event
                val='0';
                selected=undefined;
            }
        }
};

const submit=()=>{
            let ratingContainer=document.getElementsByClassName("rating");
            ratingContainer[0].style.transform='translateY(-200%)';

            let thankyouContainer=document.getElementsByClassName("thankyou"); 
            thankyouContainer[0].style.transform='translateY(-105%)';

            let addrating=document.getElementById("add-rating");
            addrating.textContent=val;
};


rate.addEventListener("click",event => { changeStyle(event); });
submitButton.addEventListener("click",()=> { submit(); });