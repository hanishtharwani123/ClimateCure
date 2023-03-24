let calculate = document.getElementById("calc");
calculate.addEventListener("click", () => {
  let popup = document.createElement("div");
  popup.classList.add("popup");

  let htmlData = `
  <div class="overlay">
          <div class="content">
              <div class="bax">
                  <div class="can">
                      <span class="your">Your Crabon Footprint is </span>
                      <span id="val"></span>
                  </div>
                  <span class="tag">Reduce Your Carbon Footprint and Contribute to a Greener Planet Today!</span>
                  <div class="cbtn">
                      <button class="close" id="close">Close</button>
                  </div>
              </div>
          </div>
      </div>`;

  popup.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(popup);

  let close = document.getElementById("close");
  close.addEventListener("click", () => {
    popup.remove();
  });
});

const footprint_calc = () => {
  let input1 = parseFloat(document.getElementById("input-value1").value);
  let input2 = parseFloat(document.getElementById("input-value2").value);
  let input3 = parseFloat(document.getElementById("input-value3").value);
  let input4 = parseFloat(document.getElementById("input-value4").value);
  let input5 = parseFloat(document.getElementById("input-value5").value);
  let input6 = parseFloat(document.getElementById("input-value6").value);

  let Electricity_factor = 0.82;
  let fuel_factor = 2.5;
  let lpg_factor = 2.983;
  let food_factor = 2.5;
  let waste_factor = 0.75;

  input1 = isNaN(input1) ? 0 : input1;
  input2 = isNaN(input2) ? 0 : input2;
  input3 = isNaN(input3) ? 0 : input3;
  input4 = isNaN(input4) ? 0 : input4;
  input5 = isNaN(input5) ? 0 : input5;
  input6 = isNaN(input6) ? 0 : input6;

  let carbon_footprint =
    [
      input1 * Electricity_factor +
        input2 * fuel_factor +
        input3 * lpg_factor +
        input4 * food_factor +
        input5 * waste_factor +
        input6,
    ] / 1000;
  console.log(carbon_footprint);

  let result = document.getElementById("val");
  result.innerHTML = `${carbon_footprint.toFixed(2)}`;
};
