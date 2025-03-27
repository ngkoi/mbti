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
let resulth1 = document.querySelector(".result-dsp");
let resultctn = document.querySelector(".mbti-rs-ctn");
let desc = document.querySelector(".mbti-dsc");
let personality = document.querySelector(".mbti-rs-c");
let personalitystr = "";
let resultAnalyzing = 0;
let intjper =
  "INTJ là mẫu người sống nội tâm, yêu thích kiến thức và sáng tạo. Mẫu người này luôn muốn mọi thứ hoàn hảo, luôn tìm cách cải tiến hiện tại dựa trên những khả năng và cơ hội mới. Hiếm khi nào INTJ cảm thấy hài lòng nếu chưa tìm ra những lý giải logic đầy đủ cho một vấn đề nào đó. INTJ thích thú với việc nghiên cứu những hệ thống, lý thuyết, mô hình và sử dụng chúng để đưa ra những chiến lược. <br> <b> Công việc phù hợp </b> <br> Nhà khoa học <br> Kỹ sư <br> Giảng viên cao đẳng, đại học <br> Chuyên viên chiến lược <br> Quản lý doanh nghiệp <br> Thẩm phán <br> Nha sĩ <br> Bác sĩ <br> Nhà tâm lý học <br> Kỹ sư CNTT <br> Kỹ sư thiết kế <br> Luật sư <br> Nhà nghiên cứu  ";
let infjper =
  "INFJ là mẫu người nhiều kiến thức, sáng tạo, nhiều đam mê và nhạy cảm. Vì có khả năng đặc biệt trong việc thấu hiểu những người xung quanh, họ được nhìn nhận là mẫu người biết cách quan tâm và giỏi cư xử. Do đó, INFJ thường rất được lòng mọi người. <br> <b> Công việc phù hợp </b> <br> Nhà hoạt động tôn giáo <br> Nhà tâm lý học <br> Giáo viên <br> Thủ thư <br> Quản trị nhân sự <br> Nhiếp ảnh gia <br> Nhà văn <br> Nhà thơ <br> Nhạc sĩ/nghệ sĩ <br> Quan tòa, thẩm phán <br> Nhà nghiên cứu <br> Kiến trúc sư";
let istjper =
  "ISTJ là người độc lập, khép kín và có trách nhiệm. Họ ít khi nói trước nghĩ sau và rất cẩn trọng với những kinh nghiệm mới. Họ là người khép kín, cần nhiều thời gian để ai đó làm quen với mình và để mình chia sẻ những thông tin bản thân cho người kia. <br> <b>Công việc phù hợp:</b> <br> Đầu bếp <br> Nông dân <br> Cảnh sát - Công an <br> Bảo vệ <br> Bác sĩ <br> Nha sĩ <br> Giáo viên các môn thực hành: thể dục dụng cụ, dạy nghề <br> Lập trình viên CNTT <br> Luật sư <br> Thẩm phán";
let istpper =
  "ISTP là người có nhiều kỹ năng, giỏi tư duy logic, trầm lặng và tinh ý. Vì là người hướng nội và có khả năng tư duy logic tốt, ISTP có thể quan sát thấy rất nhiều thứ nhưng ít khi chia sẻ những thành quả này với ai. Mọi người thường nhìn nhận ISTP là người khép kín vì ngay cả bạn bè thân thiết và gia đình cũng ít khi biết được cảm xúc của mẫu người này. Vì tính cách không thích giao tiếp, ISTP thường không tham gia những hoạt động xã hội mà thường dành thời gian một mình hay với một vài người bạn thân. <br> <b> Công việc phù hợp </b> <br> Huấn luyện viên thể thao <br> Lập trình viên <br> Thám tử <br> Kỹ sư điện <br> Kỹ sư <br> Nhà kinh doanh <br> Nông dân <br> Thợ sửa máy <br> Đại diện bán hàng <br> Phi công <br> Cảnh sát <br> Lính cứu hỏa <br> Đầu bếp <br> Nhiếp ảnh gia <br> Chuyên viên marketing";
let intpper =
  "INTP là người độc lập, tò mò và sáng tạo. INTP cần nhiều thời gian riêng để suy nghĩ về các chủ đề mà mình quan tâm. Do đặc tính hướng nội, thường mất nhiều thời gian để INTP làm quen với ai đó mới và để người đó biết được nhiều điều về INTP. Mẫu người này thường chơi chung với một nhóm bạn thân và ít khi ra ngoài phát triển những mối quan hệ xã hội. <br> <b> Công việc phù hợp </b> <br> Nhà khoa học <br> Nhiếp ảnh gia <br> Kỹ sư <br> Nhà toán học <br> Sử gia <br> Nhà sáng chế <br> Triết gia <br> Giáo sư <br> Lập trình viên <br> Nhà kinh tế <br> Thẩm phán <br> Nhà nghiên cứu";
let isfpper =
  "ISFP là mẫu người tinh ý, chu đáo và tử tế. Với những người không quen, ISFP có thể trông lạnh lùng và khép kín nhưng thực tế trong họ chứa đựng rất nhiều những cảm nhận sâu sắc. ISFP đa phần chỉ chia sẻ tâm tư tình cảm của mình với những người đã thân quen. Họ rất ân cần, chu đáo và thường đóng vai trò hỗ trợ rất tốt cho bạn bè và những người thân của mình. Dù mang đặc tính hướng nội, ISFP không hoàn toàn xa lánh những hoạt động xã hội. Tuy nhiên sau những hoạt động đó, ISFP cần một khoảng thời gian một mình để “nạp lại năng lượng”. <br> <b> Công việc phù hợp </b> <br> Nghệ sĩ <br> Nhạc sĩ <br> Họa sĩ <br> Giáo viên <br> Nhà tâm lý <br> Bác sĩ nhi khoa <br> Nhà thiết kế <br> Y tá <br> Nhà văn <br> Vũ công <br> Đầu bếp <br> Biên tập viên ";
let infpper =
  "INFP là mẫu người rất đặc biệt và rất hiếm. Do đặc tính hướng nội, INFP có vẻ khép kín và trầm lặng. Mẫu người này chỉ chia sẻ nhiều với những người đã quen thân. Thường sẽ mất nhiều thời gian để INFP tin tưởng và trở nên cởi mở với ai đó, nhưng một khi đã quen biết thì INFP thường là người bạn trung thành, tận tâm và rất tình cảm. <br> <b> Công việc phù hợp </b> <br> Nhà văn <br> Nhà hoạt động xã hội <br> Nhạc sĩ <br> Nhà tâm lý học <br> Giáo viên <br> Nhiếp ảnh gia <br> Nhà báo <br> Nhà nghiên cứu <br> Nhà thiết kế <br> Doanh nhân";
let isfjper =
  "ISFJ là mẫu người trầm lặng, có trách nhiệm và rất quan tâm đến cảm xúc của những người xung quanh. Mẫu người này trông có vẻ rất khép kín và lạnh lùng nhưng khi đã quen rồi thì họ rất quan tâm và trung thành với bạn. Vì đặc tính hướng nội trong tính cách của mình, ISFJ rất e dè khi tham gia những hoạt động xã hội mới, đồng thời cũng không hăng hái trong việc thử nghiệm những ý tưởng mới. <br> <b>Công việc phù hợp</b>: <br> Diễn viên <br> Huấn luyện viên <br> Nhà văn <br> Nhà tâm lý học <br> Kế toán - kiểm toán <br> Biên tập viên";
let entjper =
  "ENTJ là một nhà lãnh đạo bẩm sinh, mẫu người logic, quyết đoán, tự tin, giàu nhiệt huyết và có đầu óc tổ chức. Các nhà lãnh đạo thể hiện khá rõ tính cách đặc thù này. ENTJ rất tự tin vào bản thân và thẳng thắn phát biểu những ý kiến cá nhân. Họ có cái nhìn riêng và thường thành công trong việc thuyết phục người khác tin vào quan điểm cá nhân của mình. <br> <br> Công việc phù hợp </b> <br> Giám đốc doanh nghiệp <br> Thẩm phán <br> Nhà kinh doanh <br> Nhà khoa học <br> Luật sư <br> Nhân viên ngân hàng <br> Chính trị gia <br> Nhà khoa học";
let estjper =
  "ESTJ là mẫu người logic, thực tế và quyết đoán. Vì yêu thích đa dạng các lĩnh vực, mẫu người này có thể làm rất nhiều công việc khác nhau. Đặc tính nổi bật chính của ESTJ là tính thực tế và logic. ESTJ có thể nhanh chóng phát hiện ra những lỗi trong lập luận hay sự thiếu hiệu quả trong tư duy của những người xung quanh. Bên cạnh đó, tính cách của ESTJ lại thẳng thắn, do đó đôi khi khiến người xung quanh cảm thấy không thoải mái. <br> <b>Công việc phù hợp:</b> <br> Cảnh sát <br> Giáo viên <br> Nhà văn <br> Kỹ sư <br> Bán hàng <br> Nhà nghiên cứu <br> Giám đốc doanh nghiệp <br> Kế toán - kiểm toán";
let esfjper =
  "ESFJ là một người nhiệt tình, thân thiện và thích giao tiếp. Vì đặc tính hướng ngoại rõ ràng của mình, ESFJ rất thích giao tiếp và có nhiều bạn bè. ESFJ cảm thấy thoải mái và có xu hướng nói ra những suy nghĩ và cảm xúc của mình với bạn bè và gia đình. ESFJ đồng cảm và quan tâm đến những người xung quanh, vì thế mẫu người này thường tình nguyện giúp đỡ mọi người. <br> <b> Công việc phù hợp </b> <br> Y tá <br> Giáo viên <br> Kế toán <br> Nhân viên hành chính <br> Lễ tân <br> Trông trẻ <br> Thư ký <br> Quản trị nhân sự";
let enfpper =
  "ENFP là người đa tài nên có thể đạt được thành công trong bất kỳ lĩnh vực nào, miễn sao họ thật sự yêu thích lĩnh vực đó. Tuy nhiên, vì giỏi và yêu thích quá nhiều lĩnh vực khác nhau nên đôi khi ENFP có xu hướng bỏ ngang công việc khi không còn cảm thấy “cái hay” của công việc đó nữa. <br> <b> Công việc phù hợp </b> <br> Nhà tâm lý học <br> Nhà kinh doanh <br> Diễn viên <br> Lập trình viên <br> Nhà khoa học <br> Nhà báo <br> Chính trị gia <br> Kỹ sư <br> Nghệ sĩ <br> Luật sư <br> Nhà nghiên cứu";
let entpper =
  "ENTP là mẫu người cởi mở, sáng tạo, tự tin, logic và ngẫu hứng. Vì là tuýp người hướng ngoại điển hình và yêu thích giao tiếp kết bạn, mẫu người này rất dễ gần, do đó có rất nhiều bạn bè và người quen. ENTP thích trở thành tâm điểm chú ý của mọi người và thường khiến những người xung quanh cảm thấy thú vị bằng sự thông minh và dí dỏm của mình. <br> <b> Công việc phù hợp </b> <br> Diễn viên <br> Kỹ sư <br> Nhà kinh doanh <br> Nhà báo <br> Thẩm phán <br> Nhạc sĩ <br> Chuyên viên marketing <br> Nhà văn <br> Nhà khoa học <br> Nhà tâm lý học <br> Chính trị gia";
let estpper =
  "ESTP là mẫu người có tính cách mạo hiểm, cởi mở, thân thiện và logic. Là mẫu người hướng ngoại, ESTP rất yêu thích tiếp xúc với mọi người và khá cuốn hút trong phong cách giao tiếp của mình. Vì thế, ESTP thường có rất nhiều bạn bè. <br> <b> Công việc phù hợp </b> <br> Kiếm toán viên <br> Diễn viên hài <br> Chuyên viên marketing <br> Nhân viên bán hàng <br> Thợ thủ công <br> Kỹ sư <br> Nhà kinh doanh <br> Thợ mộc <br> Cảnh sát <br> Phi công <br> Nhân viên an ninh <br> Lái xe <br> Phóng viên ";
let esfpper =
  "ESFP là mẫu người cởi mở, tinh ý và thân thiện. Mẫu người này đặc biệt tò mò và cởi mở, nên họ thích tiếp xúc với nhiều người khác nhau để có những trải nghiệm mới trong cuộc sống. Là người hay nói và vui vẻ, ESFP thường khiến nơi mình có mặt luôn tươi vui và khiến những người xung quanh cảm thấy thoải mái. Vì thế ESFP có rất nhiều bạn bè và thường tận hưởng niềm vui cuộc sống với những người bạn này. <br> <b> Công việc phù hợp </b> <br> Nghệ sĩ <br> Bán hàng <br> Nhà thiết kế thời trang/nội thất <br> Nhiếp ảnh gia <br> Nhạc sĩ <br> Diễn viên hài <br> Chuyên viên marketing <br> Nhà sản xuất phim <br> HDV du lịch";
let enfjper =
  "ENFJ là kiểu người cởi mở, nhiệt tình và thích giao tiếp. Mẫu người này dễ dàng kết bạn với những người khác và thường được nhiều người biết đến vì sự nhiệt tình và tính cách vui vẻ của mình. ENFJ quan tâm đến gia đình và bạn bè, thể hiện những tình cảm của mình ra bên ngoài thông qua các hành động và lời nói. <br> <b> Công việc phù hợp </b> <br> Tư vấn viên <br> Giáo viên <br> Giám đốc <br> Chính trị gia <br> Kế toán - kiểm toán <br> Kỹ sư <br> Nhạc sĩ <br> Bán hàng <br> Giám đốc <br> Nhà văn <br> Chuyên viên quan hệ công chúng (PR)";

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

rs.addEventListener("click", function () {
  if (resultAnalyzing == 0) {
    resultAnalyzing = 1;
    rs.textContent = "Đang phân tích";
    setTimeout(() => {
      rs.textContent = "Xem kết quả";
      resultAnalyzing = 0;
    }, 1000);
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
      alert("Trả lời chưa đủ câu hỏi. <br> test");
      resultAnalyzing = 0;
      return;
    }
    if (_t + _f < 5) {
      alert("Trả lời chưa đủ câu hỏi.");
      resultAnalyzing = 1;
      return;
    }
    if (_s + _n < 5) {
      alert("Trả lời chưa đủ câu hỏi.");
      resultAnalyzing = 0;
      return;
    }
    if (_j + _p < 5) {
      alert("Trả lời chưa đủ câu hỏi.");
      resultAnalyzing = 0;
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
        desc.innerHTML = `${intjper}`;
        break;
      case "infjper":
        desc.innerHTML = `${infjper}`;
        break;
      case "istjper":
        desc.innerHTML = `${istjper}`;
        break;
      case "istpper":
        desc.innerHTML = `${istpper}`;
        break;
      case "intpper":
        desc.innerHTML = `${intpper}`;
        break;
      case "isfpper":
        desc.innerHTML = `${isfpper}`;
        break;
      case "infpper":
        desc.innerHTML = `${infpper}`;
        break;
      case "isfjper":
        desc.innerHTML = `${isfjper}`;
        break;
      case "entjper":
        desc.innerHTML = `${entjper}`;
        break;
      case "estjper":
        desc.innerHTML = `${estjper}`;
        break;
      case "esfjper":
        desc.innerHTML = `${esfjper}`;
        break;
      case "enfpper":
        desc.innerHTML = `${enfpper}`;
        break;
      case "entpper":
        desc.innerHTML = `${entpper}`;
        break;
      case "estpper":
        desc.innerHTML = `${estpper}`;
        break;
      case "esfpper":
        desc.innerHTML = `${esfpper}`;
        break;
      case "enfjper":
        desc.innerHTML = `${enfjper}`;
        break;
    }
    // document.querySelector(".q-ctn").style.display = "none";
    resulth1.textContent = `Nhóm tính cách MBTI của bạn là: ${mbtirs.join("")}`;
    resultctn.style.display = "block";
    resultctn.scrollIntoView();
    _i = 0;
    _e = 0;

    _t = 0;
    _f = 0;

    _s = 0;
    _n = 0;

    _j = 0;
    _p = 0;

    mbtirs = [];
  }
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
