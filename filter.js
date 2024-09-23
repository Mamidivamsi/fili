const filterbuttons=document.querySelectorAll(".filter_button button");
const filtercards=document.querySelectorAll(".filter_cards .card");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filtercards.forEach(card =>{
        card.classList.add("hide");
        
        
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
           card.classList.remove("hide");
       
       }
    } )

    
}

filterbuttons.forEach(button => button.addEventListener("click",filterCard));


