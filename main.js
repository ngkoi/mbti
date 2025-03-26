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
let resulth1 = document.querySelector(".result-dsp");
let resultctn = document.querySelector(".mbti-rs-ctn");
let desc = document.querySelector(".mbti-dsc");
let personality = document.querySelector(".mbti-rs-c");
let personalitystr = "";

let intjper =
  "INTJ là nhóm người có khả năng tư duy logic và chiến lược, họ thích làm việc một mình và thường tìm kiếm sự độc lập và sáng tạo.";
let infjper =
  "INFJ là nhóm người có khả năng nhìn xa trông rộng, họ thường xuyên tìm kiếm ý nghĩa và mục tiêu trong cuộc sống. Họ thích làm việc một mình và thường tìm kiếm sự cân bằng giữa sự yên tĩnh và sự hào nhoáng.";
let istjper =
  "ISTJ là nhóm người có khả năng tổ chức và quản lý tốt, họ thích làm việc theo kế hoạch và thích sự rõ ràng. Họ thích làm việc một mình và thường tìm kiếm sự ổn định và trách nhiệm.";
let istpper =
  "ISTP là nhóm người có khả năng sáng tạo và logic, họ thích làm việc một mình và thường tìm kiếm sự tự do và linh hoạt.";
let intpper =
  "INTP là nhóm người có khả năng tư duy logic và sáng tạo, họ thích làm việc một mình và thường tìm kiếm sự độc lập và sáng tạo.";
let isfpper =
  "ISFP là nhóm người có khả năng sáng tạo và cảm xúc, họ thích làm việc một mình và thường tìm kiếm sự tự do và linh hoạt.";
let infpper =
  "INFP là nhóm người có khả năng nhìn xa trông rộng và cảm xúc, họ thích làm việc một mình và thường tìm kiếm sự tự do và linh hoạt.";
let isfjper =
  "ISFJ là nhóm người có khả năng tổ chức và cảm xúc, họ thích làm việc với người khác và thường tìm kiếm sự ổn định và trách nhiệm.";
let entjper =
  "ENTJ là nhóm người có khả năng tổ chức và chiến lược, họ thích làm việc với người khác và thường tìm kiếm sự độc lập và sáng tạo.";
let estjper =
  "ESTJ là nhóm người có khả năng tổ chức và quản lý tốt, họ thích làm việc với người khác và thường tìm kiếm sự công bằng và trách nhiệm.";
let esfjper =
  "ESFJ là nhóm người có khả năng tổ chức và cảm xúc, họ thích làm việc với người khác và thường tìm kiếm sự ổn định và trách nhiệm.";
let enfpper =
  "ENFP là nhóm người sáng tạo và nhiệt huyết, họ thích giao tiếp và thích thách thức. Họ thích làm việc với người khác và thường tìm kiếm sự đa dạng và sáng tạo.";
let entpper =
  "ENTP là nhóm người có khả năng tư duy logic và sáng tạo, họ thích giao tiếp và thích thách thức. Họ thích làm việc với người khác và thường tìm kiếm sự đa dạng và sáng tạo.";
let estpper =
  "ESTP là nhóm người có khả năng sáng tạo và logic, họ thích giao tiếp và thích thách thức. Họ thích làm việc với người khác và thường tìm kiếm sự đa dạng và sáng tạo.";
let esfpper =
  "ESFP là nhóm người có khả năng sáng tạo và cảm xúc, họ thích giao tiếp và thích thách thức. Họ thích làm việc với người khác và thường tìm kiếm sự đa dạng và sáng tạo.";
let enfjper =
  "ENFJ là nhóm người có khả năng tổ chức và cảm xúc, họ thích giao tiếp và thích thách thức. Họ thích làm việc với người khác và thường tìm kiếm sự đa dạng và sáng tạo.";

let istjjobs = [
  "Kế toán - kiểm toán ",
  "Bác sĩ",
  "Luật sư",
  "Giáo viên",
  "Lập trình viên CNTT",
  "Nhân viên ngân hàng",
  "Cảnh sát - công an",
  "Quản trị kinh doanh",
  "Đầu bếp",
];
let isfjjobs = ["Y tá", "Nha sĩ", "Giáo viên", "Nhân viên ngân hàng"];
let infjjobs = [
  "Nhà văn",
  "Nhà báo",
  "Nhà thiết kế",
  "Nhà kinh doanh",
  "Nhạc sĩ, nghệ sĩ",
];
var snd = new Audio("mgay.mp3");

let _i = 0;
let _e = 0;

let _t = 0;
let _f = 0;

let _s = 0;
let _n = 0;

let _j = 0;
let _p = 0;

let clicked = 0;
let mbtirs = [];
lgbt.addEventListener("click", function () {
  if (clicked == 0) {
    clicked = 1;
    snd.play();
    eochibiti.style.display = "block";
    eochibiti.style.opacity = 1;
    setTimeout(() => {
      eochibiti.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      eochibiti.style.display = "none";
      eochibiti.style.opacity = 1;
      clicked = 0;
    }, 1500);
  }
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
  // Check answers
  if (_i + _e < 5) {
    alert("Trả lời chưa đủ câu hỏi.");
    return;
  }
  if (_t + _f < 5) {
    alert("Trả lời chưa đủ câu hỏi.");
    return;
  }
  if (_s + _n < 5) {
    alert("Trả lời chưa đủ câu hỏi.");
    return;
  }
  if (_j + _p < 5) {
    alert("Trả lời chưa đủ câu hỏi.");
    return;
  }

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
  personalitystr = mbtirs.join("").toLowerCase();
  console.log(personalitystr);
  console.log(`${personalitystr + "per"} `);
  switch (`${personalitystr + "per"}`) {
    case "intjper":
      desc.textContent = `${intjper}`;
      break;
    case "infjper":
      desc.textContent = `${infjper}`;
      break;
    case "istjper":
      desc.textContent = `${istjper}`;
      break;
    case "istpper":
      desc.textContent = `${istpper}`;
      break;
    case "intpper":
      desc.textContent = `${intpper}`;
      break;
    case "isfpper":
      desc.textContent = `${isfpper}`;
      break;
    case "infpper":
      desc.textContent = `${infpper}`;
      break;
    case "isfjper":
      desc.textContent = `${isfjper}`;
      break;
    case "entjper":
      desc.textContent = `${entjper}`;
      break;
    case "estjper":
      desc.textContent = `${estjper}`;
      break;
    case "esfjper":
      desc.textContent = `${esfjper}`;
      break;
    case "enfpper":
      desc.textContent = `${enfpper}`;
      break;
    case "entpper":
      desc.textContent = `${entpper}`;
      break;
    case "estpper":
      desc.textContent = `${estpper}`;
      break;
    case "esfpper":
      desc.textContent = `${esfpper}`;
      break;
    case "enfjper":
      desc.textContent = `${enfjper}`;
      break;
  }
  document.querySelector(".q-ctn").style.display = "none";
  resulth1.textContent = mbtirs.join("");
  resultctn.style.display = "block";
  resulth1.textContent = mbtirs.join("");
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
