let elSiteForm = document.querySelector(".form");
let elSiteNameInput = document.querySelector(".name");
let elSiteFirstNameInput = document.querySelector(".first-name");
let elSiteOld = document.querySelector(".old");
let elSiteStudyInput = document.querySelector(".study");
let elSiteListInput = document.querySelector(".list");
let elAllInput = document.querySelector("input");
let elBtnReset = document.querySelector(".btn-reset")

let elSiteNameInputValue = elSiteNameInput.value;
let elAllInputValue = elAllInput.value;

let contactArr = [];

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let person = {
    name: elSiteNameInput.value,
    Surname: elSiteFirstNameInput.value,
    age: elSiteOld.value,
    study: elSiteStudyInput.value
  };

  contactArr.push(person);
  elSiteListInput.innerHTML = "";
  for (let i = 0; i < contactArr.length; i++) {
    let elTextName = document.createElement("p");
    let elTextSurName = document.createElement("p");
    let elTextOldName = document.createElement("p");
    let elTextStudy = document.createElement("p");

    elTextName.style.fontSize = "25px"
    elTextSurName.style.fontSize = "25px"
    elTextOldName.style.fontSize = "25px"
    elTextStudy.style.fontSize = "25px"


    elTextName.textContent = `Foydalanuvchi ismi, ${contactArr[i].name}`;
    elTextSurName.textContent = `Foydalanuvchi familiyasi, ${contactArr[i].Surname}`;
    elTextOldName.textContent = `Foydalanuvchi yoshi, ${contactArr[i].age}`;
    elTextStudy.textContent = `Foydalanuvchi o'qishi, ${contactArr[i].study}`;
    elSiteListInput.append(elTextName, elTextSurName, elTextOldName, elTextStudy);


    if (isNaN(elSiteOld.value)) {
      alert("siz yoshingizda son kiritishingiz kerak")
      elTextOldName.textContent = ""
    }
  }
  console.log(person);
  console.log(contactArr);

  elSiteNameInput.value = "";
  elSiteFirstNameInput.value = "";
  elSiteOld.value = "";
  elSiteStudyInput.value = "";
});

elBtnReset.addEventListener("click", function(){


})

