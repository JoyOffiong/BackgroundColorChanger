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
  codeModal.style.display = "block";
};

//close CODE
const hidecodemodal = () => {
  codeModal.style.display = "none";
};

//Inside the code  block
// const textWrap = document.querySelector(".text");
// let codeWrap = document.createElement(div);
// codeWrap.innerHTML = color.map((color) => {
//   const { col1, col2 } = color;
//   return `<p> backgroundGradient: ${col1}</p>
//   <p> background: -webkit-linear-gradient(to right, ${col1}, ${col2});</p>
//   <p> background: linear-gradient(to right, ${col1}, ${col2});</p>
//   `;
// });

// textWrap.appendChild(codeWrap);


gradientShow.addEventListener("click", gradient); //showGradientModal
showCode.addEventListener("click", codemodal); //showCodeModal
closeBtn.addEventListener("click", hidemodal); //hideGradientModel
