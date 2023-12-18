const form = document.querySelector("form");
const inputText = document.querySelector("input#text");
const ul = document.querySelector("ul"); 
const li= document.querySelector("li");
const button = document.querySelector("btn-remove");




form.addEventListener("submit", function(event){

    event.preventDefault();
    const textValue= inputText.value;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(textValue));
    ul.appendChild(li);
//    ul.insertBefore(li, ul.firstElementChild);


const btnRemove = document.createElement("button");
 btnRemove.textContent="Remove";
li.appendChild(btnRemove);


 btnRemove.style.background="#bb1111";
  btnRemove.style.width="80px";
  btnRemove.style.height="40px";
  btnRemove.style.color="white";
 btnRemove.style.marginLeft="200px";


 ul.addEventListener("click",(event) => {

 
  if( event.target.nodeName === "BUTTON"){
   const button = event.target;
  
  if(button.textContent === "Remove"){

      ul.remove(li);
    
   }
 }


});



  inputText.value = "";



const radios = document.querySelectorAll("input[type=radio]");

let place;

radios.forEach (radio  => {

  if (radio.checked){

    place = radio.value;
  }


  if(place === "first"){

    ul.insertBefore(li, ul.firstElementChild);
   }
   else{
    ul.appendChild(li);
   }
  

});
 
});

ul.addEventListener("click",(event)=> {
  
    event.target.classList.toggle("backgrund");
   });
  
  
   ul.addEventListener("contextmenu",(event)=> {
     event.preventDefault();
  
    if( event.target.nodeName === "LI"){
  
      event.target.remove();
    }
  
   });
  
   