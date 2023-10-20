#Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solutions

```javascript
console.log("amit")
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project 2 solution

```javascript
const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // checks
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the results
    if(bmi > 0 && bmi <= 18.6){
        results.innerHTML = `Your BMI is ${bmi} which means underweight.`;
    }else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi} - Normal Range</span>`;
    }else{
        results.innerHTML = `<span>${bmi} You are OverWeight</span>`
    }
  }
});
```

## project 3 solution

```javascript
const clock = document.getElementById("clock");

// 1000ms = 1s
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
