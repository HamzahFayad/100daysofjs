//variables
let cols = document.getElementById("cols");
let rows = document.getElementById("rows");

// let count = 1;

let currentCol = document.getElementById("colorpicker").value;

window.addEventListener("load", () => {
  // add pixels
  let pixels = document.querySelector(".pixels");
  //console.log(cols.value, rows.value);
  for (let i = 0; i < 360; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixels.appendChild(pixel);

    // pixel.innerHTML = count;
    // count++;
  }

  //helper function: color pixel
  const changeColor = (el, col) => {
    el.style.background = col;
  };

  //set color picker value
  let inputColor = document.getElementById("colorpicker");
  inputColor.addEventListener("change", (e) => {
    currentCol = e.target.value;
    console.log(currentCol);
  });

  //Event Listeners to color grid pixels
  let pixel = document.querySelectorAll(".pixel");

  for (let p = 0; p < pixel.length; p++) {
    pixel[p].addEventListener("click", () => {
      changeColor(pixel[p], currentCol);
      pixel[p].classList.add("colored");
      // if (pixel[p].classList.contains("colored") && currentCol !== "#ffffff") {
      //   pixel[p].style.pointerEvents = "none";
      // }
    });
    pixel[p].addEventListener("mousedown", () => {
      changeColor(pixel[p], currentCol);
    });
    pixel[p].addEventListener("mouseover", (e) => {
      if (e.buttons === 1) {
        //pixel[p].style.background = "red";
        changeColor(pixel[p], currentCol);
      }
    });
  }

  // for (let p = 0; p < pixel.length; p++) {
  //   ["click", "mouseover"].forEach((e) => {
  //     pixel[p].addEventListener(e, () => {
  //       if (e.buttons === 1) {
  //         pixel[p].style.background = "red";
  //         console.log("x");
  //       }
  //     });
  //   });
  // }
});

//columns x rows
//15 * 5 --> 75
