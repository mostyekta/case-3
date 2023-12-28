const form = document.querySelector("form");
const inputText = document.querySelector("input#text");
const ul = document.querySelector("ul");
const div = document.querySelector("div");

const button = document.querySelector("btnRemove");


const url = document.createElement("URL");

form.addEventListener("submit", function (event) {

  event.preventDefault();
  const textValue = inputText.value;

  const li = document.createElement("LI");
  li.appendChild(document.createTextNode(textValue));
  li.classList.add("liAncer");

  const a = document.createElement("a");
  const linkText = document.getElementById("link");
  a.innerText = "https://" + linkText.value;
  a.href = linkText;
  a.target = "_blank";
  a.classList.add("aLink");

  a.appendChild(url);
  li.appendChild(a);
  ul.appendChild(li);



  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  li.appendChild(btnRemove);
  btnRemove.classList.add("buttonRemove");



  btnRemove.addEventListener("click", function () {
    li.remove();
  });


  inputText.value = "";
  linkText.value = "";


  const radios = document.querySelectorAll("input[type=radio]");

  let place;

  radios.forEach(radio => {

    if (radio.checked) {

      place = radio.value;
    }


    if (place === "first") {

      ul.insertBefore(li, ul.firstElementChild);
    }
    else {
      ul.appendChild(li);
    }


  });

});

ul.addEventListener("click", (event) => {

  event.target.classList.toggle("backgrund");
});



