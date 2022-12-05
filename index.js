




window.addEventListener('load', ()=>{
  const loader = document.querySelector('.loader');

  const body = document.querySelector('.body-wrapper');
     body.style.display="none"

     setTimeout(() => {
      loader.classList.add("loader-hidden");
      body.style.display="block"

      
      showColor(color[0].col1, color[0].col2);
    }, 
    3000);

})

let color = [
  { col1: "#780206", col2: "#061161", colname:"beautiful"},
  { col1: "#FBD3E9", col2: "#BB377D" },
  { col1: "#00d2ff", col2: "#3a7bd5" },
  { col1: "#f2709c", col2: "#ff9472" },
  { col1: "#a73737", col2: "#7a2828" },
  { col1: "#4b6cb7", col2: "#182848" },
  { col1: "#C04848", col2: "#480048" },
  { col1: "#5f2c82", col2: "#49a09d" },
  { col1: "#232526", col2: "#414345" },
  { col1: "#5C258D", col2: "#4389A2" },
  { col1: "#4776E6", col2: "#8E54E9" },
];

let prev = document.getElementById("prev");
let nex = document.getElementById("next");
let text =document.querySelector(".colors")
const body = document.querySelector('.body');

const showColor = (col1, col2,) => {
  let gradient1 = "linear-gradient(to left" + ", " + col1 + ", " + col2 + ")";
 body.style.backgroundImage = gradient1;
  text.innerHTML =  ` Gradients are:${col1}, ${col2}`
  alert(colname)
  console.log(col1, col2);
};


let count = 0;
const next = () => {
  if (count == color.length - 1) {
    count = 0;
    showColor(color[count].col1, color[count].col2);
  } else {
    count++;
    showColor(color[count].col1, color[count].col2);
  }
  console.log(count);
};

const previous = () => {
  if (count > 0) {
    count--;
    showColor(color[count].col1, color[count].col2);
  } else {
    count = color.length - 1;
    showColor(color[count].col1, color[count].col2);
  }
};

prev.addEventListener("click", previous);
nex.addEventListener("click", next);
