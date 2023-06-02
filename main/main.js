let elForm = document.querySelector(".js_form");
let elList = document.querySelector(".list");
let elBtn = document.querySelector(".button_submit");
let elInput_B = document.querySelector(".input_b");
let elInput_T = document.querySelector(".input_t");
let elInput_F = document.querySelector(".input_f");
let elInput_E = document.querySelector(".input_E");
let elInput_R = document.querySelector(".input_r");
let elInput_C1 = document.querySelector(".input_c1");
let elInput_C2 = document.querySelector(".input_c2");

//t_(т.р.)
function tTp(f, t) {
  return (5.88 * f * 10 ** ((7.45 * t) / (235 + t)) - 2).toFixed(4);
}

// P_(в.п.)
function pvp(f, E, t) {
  return (f * E * 10 ** ((7.45 * t) / (235 + t))).toFixed(4);
}

// d
function d(P, V) {
  return ((0.6621 * P) / (V - P)).toFixed(4);
}

// i
function i(C1, t, d, C2, r) {
  return (C1 * t + d * (C2 * t + r)).toFixed(4);
}

function t(num) {
  return (16.8 * Math.log(num) - 164.5).toFixed(4);
}

function func(tt0, PV, dd, ii, tt) {
  let newItim = document.createElement("li");
  let newT0 = document.createElement("p");
  let newPVP = document.createElement("p");
  let newDd = document.createElement("p");
  let newIi = document.createElement("p");
  let newTt = document.createElement("p");

  newT0.textContent = `ttp ${tt0}`;
  newPVP.textContent = `pv ${PV}`;
  newDd.textContent = `d ${dd}`;
  newIi.textContent = `i ${ii}`;
  newTt.textContent = `tmt ${tt}`;

  newItim.appendChild(newT0);
  newItim.appendChild(newPVP);
  newItim.appendChild(newDd);
  newItim.appendChild(newIi);
  newItim.appendChild(newTt);

  elList.appendChild(newItim);
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elList.innerHTML = "";

  elInputVal_B = elInput_B.value.trim();

  elInputVal_T = +elInput_T.value.trim();
  elInputVal_F = +elInput_F.value.trim();
  elInputVal_E = +elInput_E.value.trim();
  elInputVal_R = +elInput_R.value.trim();
  elInputVal_C1 = +elInput_C1.value.trim();
  elInputVal_C2 = +elInput_C2.value.trim();
  console.log(tTp(elInputVal_F, elInputVal_T));
  let ttp = tTp(elInputVal_F, elInputVal_T);
  let PVP = pvp(elInputVal_F, elInputVal_E, elInputVal_T);
  let ddd = d(PVP, elInputVal_B);
  let iii = i(elInputVal_C1, elInputVal_T, ddd, elInputVal_C2, elInputVal_R);
  let ttt = t(iii);

  func(ttp, PVP, ddd, iii, ttt);
});
