const num = document.querySelector(".days-no"),
  button = document.querySelector("button"),
  reset = document.querySelector(".reset"),
  year = document.querySelector("#year"),
  week = document.querySelector("#week"),
  day = document.querySelector("#day");

button.addEventListener("click", () => {
  year.innerHTML = parseInt(num.value / 365);
  week.innerHTML = parseInt((num.value % 365) / 7);
  day.innerHTML = parseInt((num.value % 365) % 7);

  if (num.value < 0) {
    alert("Invalid Number");
    num.value = "";
    year.innerHTML = "0";
    week.innerHTML = "0";
    day.innerHTML = "0";
  }
  if (!num.value) {
    alert("Please enter a value.");
  }
});
reset.addEventListener("click", () => {
  num.value = "";
  year.innerHTML = "0";
  week.innerHTML = "0";
  day.innerHTML = "0";
});
