var repage = false;
var toppage = 0;
var bottompage = 0;
$(document).ready(function () {
  emailInput();
  passInput();
  cfpassInput();
  changStatus();
  selectstatus();
  changSex();
  changlv();
  changSubject();
  inputbox();
  addeml();
  delElm();
  submit();
  showpage();
  scrollpage();
});
function scrollpage() {
  $(window).scroll(function () {
    if ($("#bm").offset().top <= bottompage) {
      $("#ss").fadeOut("slow");
    } else {
      $("#ss").fadeIn("slow");
    }
  });
}

function showpage() {
  if (repage === false) {
    let tp = $("#tp").first();
    let pagetop = tp.position();
    toppage = pagetop.top;
    let bm = $("#bm").first();
    let pagebottom = bm.position();
    bottompage = pagebottom.top;
    repage = true;
  }
}

function validateForm(val, typeVld, elm) {
  let checkValid = true;
  if (typeVld == "email") {
    let re = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld == "password") {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld == "comments") {
    let re = /^[a-zA-Z0-9\s,'-]*$/;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld == "phone") {
    let re = /^([0-9]{10})+$/;
    value = val.replace(/-/gi, "");
    if (!re.test(value)) {
      checkValid = false;
    }
  }
  if (typeVld == "color") {
    let re = /^([A-Z]|[a-z]|[\\]|[ ]|[\n]|[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]|[0-9])+$/;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld === "th-en") {
    let re = /^([A-Z]|[a-z]|[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์])+$/;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld == "num") {
    let re = /^([0-9])+$/;
    if (!re.test(val)) {
      checkValid = false;
    }
  }
  if (typeVld == "accept") {
    if (elm.checked != true) {
      checkValid = false;
    }
  }
  if (!checkValid) {
    addError(elm, val);
  }
  return checkValid;
}

function inputbox() {
  $(".inputbox.name").unbind("click");
  $(".inputbox.name").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".inputbox.name").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
    let elm = $(this);
    if (elm.val() === null || elm.val() === undefined || elm.val() === "") {
      elm.parent().find(".samp-all").removeClass("focus");
    }
  });

  $(".inputbox.oth-sub").unbind("click");
  $(".inputbox.oth-sub").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".inputbox.oth-sub").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
    let elm = $(this);
    if (elm.val() === null || elm.val() === undefined || elm.val() === "") {
      elm.parent().find(".samp-all").removeClass("focus");
    }
  });
  $(".inputbox.oth-lv").unbind("click");
  $(".inputbox.oth-lv").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".inputbox.oth-lv").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
    let elm = $(this);
    if (elm.val() === null || elm.val() === undefined || elm.val() === "") {
      elm.parent().find(".samp-all").removeClass("focus");
    }
  });

  $(".inputbox.age").unbind("click");
  $(".inputbox.age").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".inputbox.age").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
    let elm = $(this);
    if (elm.val() === null || elm.val() === undefined || elm.val() === "") {
      elm.parent().find(".samp-all").removeClass("focus");
    }
  });

  $(".inputbox.lname").unbind("click");
  $(".inputbox.lname").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".inputbox.lname").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
    let elm = $(this);
    if (elm.val() === null || elm.val() === undefined || elm.val() === "") {
      elm.parent().find(".samp-all").removeClass("focus");
    }
  });
}

function emailInput() {
  $(".email-input").unbind("click");
  $(".email-input").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".email-input").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").data("vld");
    let elm = $(this);
    validateForm(val, typeVld, elm);
  });
}

function passInput() {
  $(".pass-input").unbind("click");
  $(".pass-input").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });
  $(".pass-input").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").data("vld");
    let elm = $(this);
    let pass = $(this).val();
    let newpass = $(this)
      .parents("form")
      .find(".pass-form .cfpass-input")
      .val();
    validateForm(val, typeVld, elm);
    if (newpass !== null && newpass !== undefined && newpass !== "") {
      if (pass !== newpass) {
        let url = '<samp class="samp-err cf">รหัสผ่านของท่านไม่ตรงกัน</samp>';
        blurout($(this).parents("form").find(".pass-form .cfpass-input"));
        $(this)
          .parents("form")
          .find(".pass-form .cfpass-input")
          .parent()
          .append(url);
      } else {
        $(this).parents("form").find(".pass-form .samp-err.cf").remove();
        focusin($(this).parents("form").find(".pass-form .cfpass-input"));
      }
    }
  });
}

function cfpassInput() {
  $(".cfpass-input").unbind("click");
  $(".cfpass-input").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".cfpass-input").blur(function () {
    let pass = $(this).parents("form").find(".pass-form .pass-input").val();
    let newpass = $(this).val();
    let val = $(this).parent().find("input").val();
    let elm = $(this);
    if (
      pass !== newpass ||
      newpass === "" ||
      newpass === undefined ||
      newpass === null
    ) {
      addError(elm, val);
    } else {
      $(this).parent().find(".samp-err.cf").remove();
      focusin($(this).parent().find(".cfpass-input"));
    }
  });
}

function addError(elm, val) {
  blurout(elm);
  let url = RenderSamp(elm, val);
  elm.parent().append(url);
}

function RenderSamp(elm, val) {
  if (val === null || val === undefined || val === "") {
    let html = "";
    elm.parent().find(".samp-all").removeClass("focus");
    if (elm.data("vld") === "email") {
      html += '<samp class="samp-err">กรุณากรอกอีเมล</samp>';
    }
    if (elm.data("vld") === "password") {
      html += '<samp class="samp-err">กรุณากรอกรหัสผ่าน</samp>';
    }
    if (elm.data("vld") === "cfpass") {
      html += '<samp class="samp-err">กรุณากรอกยืนยันรหัสผ่าน</samp>';
    }
    if (elm.data("vld") === "name") {
      html += '<samp class="samp-err">กรุณากรอกชื่อ</samp>';
    }
    if (elm.data("vld") === "lname") {
      html += '<samp class="samp-err">กรุณากรอกนามสกุล</samp>';
    }
    if (elm.data("vld") === "age") {
      html += '<samp class="samp-err">กรุณากรอกอายุ</samp>';
    }
    if (elm.data("vld") === "othlv") {
      html += '<samp class="samp-err">กรุณากรอกระดับที่สอนอื่น ๆ</samp>';
    }
    if (elm.data("vld") === "othsubject") {
      html += '<samp class="samp-err">กรุณากรอกวิชาที่สอนอื่น ๆ</samp>';
    }
    if (elm.data("vld") === "status") {
      html += '<samp class="samp-err">กรุณาเลือกสถานภาพ</samp>';
    }
    if (elm.data("vld") === "sex") {
      html += '<samp class="samp-err">กรุณาเลือกเพศ</samp>';
    }
    if (elm.data("vld") === "lv") {
      html += '<samp class="samp-err">กรุณาเลือกระดับชั้นที่สอน</samp>';
    }
    if (elm.data("vld") === "subject") {
      html += '<samp class="samp-err">กรุณาเลือกวิชาที่สอน</samp>';
    }
    return html;
  } else {
    let html = "";
    if (elm.attr("name") === "mail") {
      html += '<samp class="samp-err">อีเมลไม่ถูกต้อง</samp>';
    }
    if (elm.attr("name") === "password") {
      html +=
        '<samp class="samp-err">รหัสผ่านต้องมีตัวอักษรอย่างน้อย 8 ตัวอักษร ประกอบไปด้วย A-Z, a-z, 0-9</samp>';
    }
    if (elm.attr("name") === "cfpass") {
      html += '<samp class="samp-err cf">รหัสผ่านของท่านไม่ตรงกัน</samp>';
    }

    return html;
  }
}

function focusin(elm) {
  elm.parent().css("border-color", "#ddd");
  elm.parent().parent().css("border-color", "#ddd");
  elm.parent().find(".samp-all").css("color", "#777");
}

function blurout(elm) {
  elm.parent().css("border-color", "red");
  elm.parent().parent().css("border-color", "red");
  elm.parent().find(".samp-all").css("color", "red");
}

function changStatus() {
  $(".se-status").unbind("click");
  $(".se-status").click(function () {
    $(this).parents(".box-select.status").addClass("att");
    $(this).parents(".box-select.status").find("i").addClass("moveicon");
    focusin($(this));
    $(this).parent().parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });
  $(document).on("click", function (e) {
    let elmBoxSelect = $(".box-select.status");
    if (!elmBoxSelect.is(e.target) && elmBoxSelect.has(e.target).length === 0) {
      if (elmBoxSelect.hasClass("att")) {
        elmBoxSelect.removeClass("att");
        elmBoxSelect.find("i").removeClass("moveicon");
        if (
          elmBoxSelect.parents("body").find(".status-input").val() === "" ||
          elmBoxSelect.parents("body").find(".status-input").val() === null ||
          elmBoxSelect.parents("body").find(".status-input").val() === undefined
        ) {
          elmBoxSelect.parent().find(".samp-all").removeClass("focus");
        }
      }
    }
  });
}

function changlv() {
  $(".se-lv").unbind("click");
  $(".se-lv").click(function () {
    $(this).parents("body").find(".att i").removeClass("moveicon");
    $(this).parents("body").find(".att").removeClass("att");
    $(this).parents(".box-select.lv").addClass("att");
    $(this).parents(".box-select.lv").find("i").addClass("moveicon");
    focusin($(this));
    $(this).parent().parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });
  $(document).on("click", function (e) {
    let elmBoxSelect = $(".box-select.lv");
    if (!elmBoxSelect.is(e.target) && elmBoxSelect.has(e.target).length === 0) {
      if (elmBoxSelect.hasClass("att")) {
        elmBoxSelect.removeClass("att");
        elmBoxSelect.find("i").removeClass("moveicon");
        if (
          elmBoxSelect.parents("body").find(".lv-input").val() === "" ||
          elmBoxSelect.parents("body").find(".lv-input").val() === null ||
          elmBoxSelect.parents("body").find(".lv-input").val() === undefined
        ) {
          elmBoxSelect.parent().find(".samp-all").removeClass("focus");
        }
      }
    }
  });
}

function changSubject() {
  $(".se-subject").unbind("click");
  $(".se-subject").click(function () {
    $(this).parents(".box-select.subject").addClass("att");
    $(this).parents(".box-select.subject").find("i").addClass("moveicon");
    focusin($(this));
    $(this).parent().parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });
  $(document).on("click", function (e) {
    let elmBoxSelect = $(".box-select.subject");
    if (!elmBoxSelect.is(e.target) && elmBoxSelect.has(e.target).length === 0) {
      if (elmBoxSelect.hasClass("att")) {
        elmBoxSelect.removeClass("att");
        elmBoxSelect.find("i").removeClass("moveicon");
        if (
          elmBoxSelect.parents("body").find(".subject-input").val() === "" ||
          elmBoxSelect.parents("body").find(".subject-input").val() === null ||
          elmBoxSelect.parents("body").find(".subject-input").val() ===
            undefined
        ) {
          elmBoxSelect.parent().find(".samp-all").removeClass("focus");
        }
      }
    }
  });
}

function changSex() {
  $(".se-sex").unbind("click");
  $(".se-sex").click(function () {
    $(this).parents(".box-select.sex").addClass("att");
    $(this).parents(".box-select ").find("i").addClass("moveicon");
    focusin($(this));
    $(this).parent().parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });
  $(document).on("click", function (e) {
    let elmBoxSelect = $(".box-select.sex");
    if (!elmBoxSelect.is(e.target) && elmBoxSelect.has(e.target).length === 0) {
      if (elmBoxSelect.hasClass("att")) {
        elmBoxSelect.removeClass("att");
        elmBoxSelect.find("i").removeClass("moveicon");
        if (
          elmBoxSelect.parents("body").find(".sex-input").val() === "" ||
          elmBoxSelect.parents("body").find(".sex-input").val() === null ||
          elmBoxSelect.parents("body").find(".sex-input").val() === undefined
        ) {
          elmBoxSelect.parent().find(".samp-all").removeClass("focus");
        }
      }
    }
  });
}

function selectstatus() {
  $(".nav-select li").unbind("click");
  $(".nav-select li").click(function () {
    let data = $(this).data("value");
    $(this).parents(".box-select").find(".samp-all").addClass("focus");
    $(this).parents(".box-select").find("input").attr("value", data);
    $(this).parents(".box-select").find(".nav-input").text(data);
    $(this).parents(".box-select").removeClass("att");
    $(this).parents(".box-select").find("i").removeClass("moveicon");
    $(this).parents(".box-select").find(".liclass").removeClass("liclass");
    $(this).addClass("liclass");
    if (data === "อื่น ๆ") {
      $(this)
        .parents(".box.lvmargin")
        .parent()
        .find(".other-teach")
        .addClass("other-open");
    } else {
      $(this)
        .parents(".box.lvmargin")
        .parent()
        .find(".other-teach")
        .removeClass("other-open");
        $(this)
        .parents(".box.lvmargin")
        .parent()
        .find(".samp-err").remove();
        focusin($(this)
        .parents(".box.lvmargin")
        .parent()
        .find("input"))
        
    }
  });
}

function addeml() {
  $(".btn-add-class").unbind("click");
  $(".btn-add-class").click(function () {
    let position = "." + $(this).data("bx");
    let url =
      '<div class="class-itm"> <button class="btn-remove-class fogus" type="button"> <i class="icon-cross"></i> </button> <div class="teach-class-group"> <div class="box lvmargin"> <div class="box-select lv"> <i class="icon-cross positionicon"></i> <input class="lv-input" type="hidden" name="status" data-vld="lv" value="" /> <div class="nav-input sty-inp se-lv"></div> <div class="nav-select"> <span class="lb_group fh_med" >โปรดระบุระดับชั้นที่สอน</span > <ul class="lvl1"> <li class="" data-value="ปฐมวัย"> <span>ปฐมวัย</span> </li> <li class="" data-value="ประถมศึกษาตอนต้นปีที่ 1"> <span>ประถมศึกษาตอนต้นปีที่ 1</span> </li> <li class="" data-value="ประถมศึกษาตอนต้นปีที่ 2"> <span>ประถมศึกษาตอนต้นปีที่ 2</span> </li> <li class="" data-value="ประถมศึกษาตอนต้นปีที่ 3"> <span>ประถมศึกษาตอนต้นปีที่ 3</span> </li> <li class="" data-value="ประถมศึกษาตอนปลายปีที่ 4"> <span>ประถมศึกษาตอนปลายปีที่ 4</span> </li> <li class="" data-value="ประถมศึกษาตอนปลายปีที่ 5"> <span>ประถมศึกษาตอนปลายปีที่ 5</span> </li> <li class="" data-value="ประถมศึกษาตอนปลายปีที่ 6"> <span>ประถมศึกษาตอนปลายปีที่ 6</span> </li> <li class="" data-value="อื่น ๆ"> <span>อื่น ๆ</span> </li> </ul> </div> <span class="samp-all">ระดับชั้นที่สอน</span> </div> </div> <div class="other-teach"> <div class="box-inp has-dt valid"> <input class="inputbox fogus oth oth-lv" type="text" name="other_teach_class[]" data-vld="othlv" /><span class="samp-all">อื่นๆ</span ><span class="sty-err"></span> </div> </div> </div> <div class="teach-subject-group"> <div class="box lvmargin"> <div class="box-select subject"> <i class="icon-cross positionicon"></i> <input class="subject-input" type="hidden" name="status" data-vld="subject" value="" /> <div class="nav-input sty-inp se-subject"></div> <div class="nav-select"> <span class="lb_group fh_med" >โปรดระบุวิชาที่สอน</span > <ul class="lvl1"> <li class="" data-value="คณิตศาสตร์"> <span>คณิตศาสตร์</span> </li> <li class="" data-value="วิทยาศาสตร์"> <span>วิทยาศาสตร์</span> </li> <li class="" data-value="ภาษาไทย"> <span>ภาษาไทย</span> </li> <li class="" data-value="ภาษาอังกฤษ"> <span>ภาษาอังกฤษ</span> </li> <li class="" data-value="การงานอาชีพ"> <span>การงานอาชีพ</span> </li> <li class="" data-value="สังคมศึกษา"> <span>สังคมศึกษา</span> </li> <li class="" data-value="สุขศึกษา"> <span>สุขศึกษา</span> </li> <li class="" data-value="พละศึกษา"> <span>พละศึกษา</span> </li> <li class="" data-value="ศิลปะ"> <span>ศิลปะ</span> </li> <li class="" data-value="อื่น ๆ"> <span>อื่น ๆ</span> </li> </ul> </div> <span class="samp-all">วิชาที่สอน</span> </div> </div> <div class="other-teach"> <div class="box-inp"> <input class="inputbox fogus oth oth-sub" type="text" name="other_teach_subject[]" data-vld="othsubject" /> <span class="samp-all">อื่นๆ</span> <span class="sty-err"></span> </div> </div> </div> </div>';
    $(this).parent().find(position).append(url);
    changlv();
    changSubject();
    selectstatus();
    inputbox();
  });
}

function delElm() {
  $(".btn-remove-class").unbind("click");
  $(".btn-remove-class").click(function () {
    $(this).parent().remove();
  });
}

function submit() {
  $(".box-btn").unbind("click");
  $(".box-btn").click(function () {
    let email = $(this).parents("form").find(".email-input");
    let pass = $(this).parents("form").find(".pass-input");
    let cfpass = $(this).parents("form").find(".cfpass-input");
    let status = $(this).parents("form").find(".status-input");
    let name = $(this).parents("form").find(".name");
    let lname = $(this).parents("form").find(".lname");
    let age = $(this).parents("form").find(".age");
    let sex = $(this).parents("form").find(".sex-input");
    let lv = $(this).parents("form").find(".lv-input");
    let subject = $(this).parents("form").find(".subject-input");
    let err = true;
    if (
      email.val() === "" ||
      email.val() === null ||
      email.val() === undefined
    ) {
      err = false;
      addError(email, email.val());
    }
    if (pass.val() === "" || pass.val() === null || pass.val() === undefined) {
      err = false;
      addError(pass, pass.val());
    }
    if (
      cfpass.val() === "" ||
      cfpass.val() === null ||
      cfpass.val() === undefined
    ) {
      err = false;
      addError(cfpass, cfpass.val());
    }
    if (
      status.val() === "" ||
      status.val() === null ||
      status.val() === undefined
    ) {
      err = false;
      addError(status, status.val());
    }
    if (name.val() === "" || name.val() === null || name.val() === undefined) {
      err = false;
      addError(name, name.val());
    }
    if (
      lname.val() === "" ||
      lname.val() === null ||
      lname.val() === undefined
    ) {
      err = false;
      addError(lname, lname.val());
    }

    if (age.val() === "" || age.val() === null || age.val() === undefined) {
      err = false;
      addError(age, age.val());
    }
    if (sex.val() === "" || sex.val() === null || sex.val() === undefined) {
      err = false;
      addError(sex, sex.val());
    }

    if (lv.length > 0) {
      lv.each(function (id) {
        if (
          $(this).val() === "" ||
          $(this).val() === null ||
          $(this).val() === undefined
        ) {
          err = false;
          addError($(this), $(this).val());
        }
        if ($(this).val() === "อื่น ๆ") {
          let othlv = $(this).parents("form").find(".oth-lv");
          othlv.each(function (index) {
            if (
              $(this).val() === "" ||
              $(this).val() === null ||
              $(this).val() === undefined
            ) {
              if ($(this).val() === "" && id === index) {
                err = false;
                addError($(this), $(this).val());
              }
            }
          });
        }
      });
    }

    if (subject.length > 0) {
      subject.each(function (id) {
        if (
          $(this).val() === "" ||
          $(this).val() === null ||
          $(this).val() === undefined
        ) {
          err = false;
          addError($(this), $(this).val());
        }
        if ($(this).val() === "อื่น ๆ") {
          let othsub = $(this).parents("form").find(".oth-sub");
          othsub.each(function (index) {
            if (
              $(this).val() === "" ||
              $(this).val() === null ||
              $(this).val() === undefined
            ) {
              if ($(this).val() === "" && id === index) {
                err = false;
                addError($(this), $(this).val());
              }
            }
          });
        }
      });
    }
    if ($("#accept").prop("checked") === false) {
      err = false;
      alert("ยอมรับเงื่อนไขการใช้และนโยบายคุ้มครองข้อมูลส่วนบุคคล ด้วยยย");
    }
    if (err === true) {
      let data = $("#register").serialize();
      $.ajax({
        url: "ajj.php",
        data: data,
        type: "POST",
        dataType: "json",
        beforeSend: function () {},
        success: function (results) {
          console.log(results);
        },
        error: function (xhr) {},
        complete: function () {},
      });
    }
  });
}
