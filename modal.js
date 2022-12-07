

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
const codemodalContent = () => {
  // Inside the code  block
const textWrap = document.querySelector(".text2");

//color[count]

let snippet =(color)=>{
let count = localStorage.getItem('count')
console.log(count)
const { col1, col2 } = color[count];

return `<div>
<pre id="diaper">
    {
      <code> <span class="snipKey">backgroundGradient</span><span class="snipMiddle">:</span> <span class="snipValue">${col1}<span><span class="snipMiddle">;</span></code>
      <code> <span class="snipKey">background</span><span class="snipMiddle">: -webkit-linear-gradient(to right,</span> <span class="snipValue">${col1}, ${col2})<span><span class="snipMiddle">;</span></code>
      <code> <span class="snipKey">background</span><span class="snipMiddle">: linear-gradient(to right,</span> <span class="snipValue">${col1}, ${col2})<span><span class="snipMiddle">;</span></code>
    }
</pre>
</div>
`;
}

let codede = () => {
  textWrap.innerHTML= snippet(color)
}

codede()
};

const codemodal = () => {
  codemodalContent()
  codeModal.style.display = "block";
}

//close CODE
const hidecodemodal = () => {
  const textWrap = document.querySelector(".text2")
  textWrap.innerHTML = ""
  codeModal.style.display = "none";
};





gradientShow.addEventListener("click", gradient); //showGradientModal
showCode.addEventListener("click", codemodal); //showCodeModal
closeBtn.addEventListener("click", hidemodal); //hideGradientModel





