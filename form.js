const form = document.querySelector("form");
const inputText = document.querySelector("input#text");
const ul = document.querySelector("ul"); 
const li= document.querySelector("li");



form.addEventListener("submit", function(event){

    event.preventDefault();
    const textValue= inputText.value;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(textValue));
    ul.appendChild(li);
//    ul.insertBefore(li, ul.firstElementChild);

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
  
   