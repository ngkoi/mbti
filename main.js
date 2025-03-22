// let text = document.querySelector(".subtitle");
// let a = 1;
// console.log(text.textContent);

// function textShuffle() {
//   text.style.opacity = 0;
//   setTimeout(() => {
//     text.textContent = "Định hướng nghề nghiệp tương lai";
//     text.style.opacity = 1;
//   }, 1000);

//   setTimeout(function () {
//     text.style.opacity = 0;
//   }, 5000);

//   setTimeout(() => {
//     text.textContent = "Khám phá tính cách bản thân";
//     text.style.opacity = 1;
//   }, 6000);
// }

// setInterval(textShuffle, 5000);
// while (a > 0) {
//   console.log("Hello World");
//   sleep(1000);
// }
let btncfm = document.querySelector(".btn-cfm");
let ovlblur = document.querySelector(".overlay-blur");
let ovl = document.querySelector(".ovl");
let qA = document.querySelectorAll(".q-a");
let rs = document.querySelector(".result");
let lgbt = document.querySelector("#lgbt");
let eochibiti = document.querySelector(".eochibiti");
var snd = new Audio("mgay.mp3");

let _i = 0;
let _e = 0;

let _t = 0;
let _f = 0;

let _s = 0;
let _n = 0;

let _j = 0;
let _p = 0;

let mbtirs = [];
lgbt.addEventListener("click", function () {
  snd.play();
  eochibiti.style.display = "block";
  eochibiti.style.opacity = 1;
  setTimeout(() => {
    eochibiti.style.opacity = 0;
  }, 500);
  setTimeout(() => {
    eochibiti.style.display = "none";
    eochibiti.style.opacity = 1;
  }, 1500);
});

rs.addEventListener("click", function () {
  _i = 0;
  _e = 0;
  let i = 0;
  // IE
  while (i <= 9) {
    if (qA[i].style.backgroundColor == "rgb(77, 189, 73)" && i % 2 == 0) {
      _e += 1;
      i += 2;
    } else if (
      qA[i].style.backgroundColor == "rgb(77, 189, 73)" &&
      i % 2 != 0
    ) {
      _i += 1;
      i += 1;
    } else {
      i += 1;
    }
  }

  // TF
  while (i <= 19) {
    if (qA[i].style.backgroundColor == "rgb(77, 189, 73)" && i % 2 == 0) {
      _t += 1;
      i += 2;
    } else if (
      qA[i].style.backgroundColor == "rgb(77, 189, 73)" &&
      i % 2 != 0
    ) {
      _f += 1;
      i += 1;
    } else {
      i += 1;
    }
  }
  // SN
  while (i <= 29) {
    if (qA[i].style.backgroundColor == "rgb(77, 189, 73)" && i % 2 == 0) {
      _s += 1;
      i += 2;
    } else if (
      qA[i].style.backgroundColor == "rgb(77, 189, 73)" &&
      i % 2 != 0
    ) {
      _n += 1;
      i += 1;
    } else {
      i += 1;
    }
  }
  // JP
  while (i <= 39) {
    if (qA[i].style.backgroundColor == "rgb(77, 189, 73)" && i % 2 == 0) {
      _j += 1;
      i += 2;
    } else if (
      qA[i].style.backgroundColor == "rgb(77, 189, 73)" &&
      i % 2 != 0
    ) {
      _p += 1;
      i += 1;
    } else {
      i += 1;
    }
  }
  console.log("I:", _i);
  console.log("E:", _e);
  console.log("T:", _t);
  console.log("F:", _f);
  console.log("S:", _s);
  console.log("N:", _n);
  console.log("J:", _j);
  console.log("P:", _p);
  if (_i > _e) {
    mbtirs.push("I");
  } else {
    mbtirs.push("E");
  }

  if (_s > _n) {
    mbtirs.push("S");
  } else {
    mbtirs.push("N");
  }

  if (_t > _f) {
    mbtirs.push("T");
  } else {
    mbtirs.push("F");
  }

  if (_j > _p) {
    mbtirs.push("J");
  } else {
    mbtirs.push("P");
  }
  console.log(mbtirs);
  console.log("Your MBTI: ", mbtirs.join(""));

  _i = 0;
  _e = 0;

  _t = 0;
  _f = 0;

  _s = 0;
  _n = 0;

  _j = 0;
  _p = 0;

  mbtirs = [];
});

btncfm.addEventListener("click", function () {
  console.log("clicked");
  ovlblur.style.backgroundColor = "rgba(0, 0, 0, 0)";
  ovlblur.style["backdrop-filter"] = "blur(0px)";
  ovl.style.display = "none";
  setTimeout(() => {
    ovlblur.style.display = "none";
  }, 500);
});
function setSeletec(num) {
  if (num % 2 == 0) {
    qA[num].style.backgroundColor = "rgb(77, 189, 73)";
    qA[num].style.color = "rgb(255, 255, 255)";

    qA[num + 1].style.backgroundColor = "rgb(255, 255, 255)";
    qA[num + 1].style.color = "rgb(0, 0, 0)";
  } else {
    qA[num].style.backgroundColor = "rgb(77, 189, 73)";
    qA[num].style.color = "rgb(255, 255, 255)";

    qA[num - 1].style.backgroundColor = "rgb(255, 255, 255)";
    qA[num - 1].style.color = "rgb(0, 0, 0)";
  }
}
for (let i = 0; i < qA.length; i++) {
  qA[i].addEventListener("click", function () {
    setSeletec(i);
  });
}
