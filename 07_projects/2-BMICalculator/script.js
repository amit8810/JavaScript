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
