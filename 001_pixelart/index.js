window.addEventListener("load", () => {
  // add pixels
  let pixels = document.querySelector(".pixels");
  for (let i = 0; i < 75; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixels.appendChild(pixel);
  }

  //color pixel
  let pixel = document.querySelectorAll(".pixel");

  for (let p = 0; p < pixel.length; p++) {
    ["click", "mouseover"].forEach((e) => {
      pixel[p].addEventListener(e, () => {
        pixel[p].style.background = "red";
        console.log("x");
      });
    });
  }
});

//columns x rows
//15 * 5 --> 75
