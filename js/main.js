const inputValue = document.getElementById("inputConverter");
const btn = document.querySelector(".converter");
const container = document.querySelector(".container");

function cent(cents) {
  return (cents = cents >= 0.01 ? Math.floor(cents * 100) : null);
}

function nickel(nickels) {
  return (nickels =
    cent(inputValue.value) >= 5 ? Math.floor(cent(inputValue.value) * 0.2) : 0);
}

function dime(dimes) {
  return (dimes =
    cent(inputValue.value) >= 10
      ? Math.floor(cent(inputValue.value) * 0.1)
      : 0);
}

function quarter(quarters) {
  let result =
    cent(inputValue.value) >= 25 ? Math.floor(cent(inputValue.value) * 0.1) : 0;
  return Math.floor((quarters = result * 0.4));
}

btn.addEventListener("click", function () {
  console.log(true);
  if (inputValue.value == "") {
    return (container.innerHTML = `<label style="color: red" >Please enter a value</label>`);
  } else if (inputValue.value < 0.01) {
    return (container.innerHTML = `<label style="color: red" >Value cannot be less than 0.01</label>`);
  }
  let lists = `
       <p>Penny (&#162;1) <span>${cent(inputValue.value)}</span></p>
       <p>Nickel (&#162;5) <span>${nickel()}</span></p>
       <p>Dime (&#162;10) <span>${dime()}</span></p>
       <p>Quarter (&#162;25) <span>${quarter()}</span></p>
    `;
  container.innerHTML = lists;
});
