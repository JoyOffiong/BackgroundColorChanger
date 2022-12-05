

//LOADER
window.addEventListener('load', ()=>{
  const loader = document.querySelector('.loader');

  const body = document.querySelector('.body-wrapper');
     body.style.display="none"

     setTimeout(() => {
      loader.classList.add("loader-hidden");
      body.style.display="block"

      
      showColor(color[0].col1, color[0].col2 );
      showColor(color[0].colname)
    }, 
    3000);

})


let color = [
  { col1: "#780206", col2: "#061161", colname:"beautiful"},
  { col1: "#FBD3E9", col2: "#BB377D", colname:"girlypink"},
  { col1: "#00d2ff", col2: "#3a7bd5", colname: "oceanblue" },
  { col1: "#f2709c", col2: "#ff9472", colname: "peachyPink" },
  { col1: "#a73737", col2: "#7a2828",colname: "browny"},
  { col1: "#4b6cb7", col2: "#182848", colname: "bluewy" },
  { col1: "#C04848", col2: "#480048",  colname: "blackish" },
  { col1: "#5f2c82", col2: "#49a09d", colname: "darkblak" },
  { col1: "#232526", col2: "#414345",  colname: "bluewy"},
  { col1: "#5C258D", col2: "#4389A2",  colname: "girlblue" },
  { col1: "#4776E6", col2: "#8E54E9",  colname: "bluewy" },
];

let prev = document.getElementById("prev");
let nex = document.getElementById("next");
let text =document.querySelector(".colors");
const body = document.querySelector('.body');

const showColor = (col1, col2) => {
  let gradient1 = "linear-gradient(to left" + ", " + col1 + ", " + col2 + ")";
 body.style.backgroundImage = gradient1;
  text.innerHTML =  `${color[count].colname}`

  console.log(col1, col2, colname);
};

let count = 0;
const next = () => {
  if (count == color.length - 1) {
    count = 0;
    showColor(color[count].col1, color[count].col2);
    text.innerHTML=`${color[count].colname}`
  } else {
    count++;
    showColor(color[count].col1, color[count].col2); 
    text.innerHTML=`${color[count].colname}`

  }
  console.log(count);
};

const previous = () => {
  if (count > 0) {
    count--;
    showColor(color[count].col1, color[count].col2);
    text.innerHTML=`${color[count].colname}`
  } else {
    count = color.length - 1;
    showColor(color[count].col1, color[count].col2);
    text.innerHTML=`${color[count].colname}`
  }
};


prev.addEventListener("click", previous);
nex.addEventListener("click", next);




