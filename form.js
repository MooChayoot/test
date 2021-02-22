$(document).ready(function () {
  emailInput();
  passInput();
  cfpassInput();
  changStatus();
  selectstatus();
});
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

function emailInput() {
  $(".email-input").unbind("click");
  $(".email-input").focus(function () {
    focusin($(this));
    $(this).parent().find(".samp-all").addClass("focus");
    $(this).parent().find(".samp-err").remove();
  });

  $(".email-input").blur(function () {
    let val = $(this).parent().find("input").val();
    let typeVld = $(this).parent().find("input").attr("type");
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
    let typeVld = $(this).parent().find("input").attr("type");
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
    if (elm.attr("name") === "mail") {
      html += '<samp class="samp-err">กรุณากรอกอีเมล</samp>';
    }
    if (elm.attr("name") === "pass") {
      html += '<samp class="samp-err">กรุณากรอกรหัสผ่าน</samp>';
    }
    if (elm.attr("name") === "cfpass") {
      html += '<samp class="samp-err">กรุณากรอกยืนยันรหัสผ่าน</samp>';
    }
    return html;
  } else {
    let html = "";
    if (elm.attr("name") === "mail") {
      html += '<samp class="samp-err">อีเมลไม่ถูกต้อง</samp>';
    }
    if (elm.attr("name") === "pass") {
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
  elm.parent().find(".samp-all").css("color", "#777");
}

function blurout(elm) {
  elm.parent().css("border-color", "red");
  elm.parent().find(".samp-all").css("color", "red");
}

function changStatus() {
  $(".nav-input").unbind("click");
  $(".nav-input").click(function () {
    $(this).parents(".box-select").addClass("att");
    $(this).parents(".box-select ").find("i").addClass("moveicon");
    // $(this).parents(".box-select ").find("i").css({
    //     "-webkit-transform": "rotate(135deg)",
    //             "-moz-transform": "rotate(135deg)",
    //             "-ms-transform": "rotate(135deg)",
    //             "-o-transform": "rotate(135deg)",
    //             "transform": "rotate(135deg)"
    // });
    // $(this).find(".samp-all").addClass("focus");
  });
  $(document).on("click", function (e) {
    let elmBoxSelect = $(".box-select");
    if (!elmBoxSelect.is(e.target) && elmBoxSelect.has(e.target).length === 0) {
      if (elmBoxSelect.hasClass("att")) {
        elmBoxSelect.removeClass("att");
        elmBoxSelect.find("i").removeClass("moveicon");
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
    $(this).parents(".box-select ").find("i").removeClass("moveicon");
  });
}
