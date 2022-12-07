

//open modal
let addGradient = document.querySelector(".modal");
let gradientShow = document.querySelector(".showGradient");

const gradient = () => {
  addGradient.style.display = "block";
};

//close modal
let closeBtn = document.getElementById("closeButton");
const hidemodal = () => {
  addGradient.style.display = "none";
};

//openCodeModal
let showCode = document.querySelector(".show-Code");
let codeModal = document.querySelector(".code-modal");
const codemodal = () => {
  // Inside the code  block
const textWrap = document.querySelector(".text2");
let codeWrap = document.createElement('div');

//color[count]

let snippet =(color)=>{
let count = localStorage.getItem('count')
console.log(count)
const { col1, col2 } = color[count];

return `<p> backgroundGradient: ${col1}</p>
<p> background: -webkit-linear-gradient(to right, ${col1}, ${col2});</p>
<p> background: linear-gradient(to right, ${col1}, ${col2});</p>
`;
}

let codede = () => {
  codeWrap.innerHTML= snippet(color)
}

codede()
console.log(codeWrap)
textWrap.appendChild(codeWrap);
  codeModal.style.display = "block";
};

//close CODE
const hidecodemodal = () => {
  const textWrap = document.querySelector(".text2")
  textWrap.innerHTML = ""
  codeModal.style.display = "none";
};




gradientShow.addEventListener("click", gradient); //showGradientModal
showCode.addEventListener("click", codemodal); //showCodeModal
closeBtn.addEventListener("click", hidemodal); //hideGradientModel





