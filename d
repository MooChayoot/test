var myPlayer = [];
var player_youtube = [];
var Youtube = {
  isApiReady: false,
  curId: "",
};
$(document).ready(function () {
  slike();
  prev();
  next();
  // activeVideo();
  swit();
  pvdoswit();
  pvdoyswit();
  swit2();
  popup();
});

function slike() {
  $(".img-show").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });
  $(".pvdo-show").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });
  $(".pvdoy-show").slick({
    infinite: false,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });
  $(".pvdo-show").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      let vPo = $("#test0" + currentSlide);
      let vID = $("#test0" + currentSlide).selector.substring(
        1,
        $("#test0" + currentSlide).selector.length
      );
      vPo.parent().find(".pvdo-pp").removeClass("opacity-play");
      vPo.parent().find(".pvdo-vdo-ch").css({ "z-index": 2 });
      vPo.parent().find(".pvdo-img-ch").css({ "z-index": 5 });
      vPo.parent().find("i").attr("id", 1);
      initVideoBanner("video-" + vID);
      myPlayer["video-" + vID].pause();
    }
  );
  $(".pvdoy-show").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      let sum = nextSlide - currentSlide;
      let newsum = sum.toString().replace("-", "");
      let vPo = $("#testy" + currentSlide);
      let vPo3 = $("#testy" + (currentSlide + 2));
      let vID = $("#testy" + currentSlide).selector.substring(
        1,
        $("#testy" + currentSlide).selector.length
      );
      let vID3 = $("#testy" + (currentSlide + 2)).selector.substring(
        1,
        $("#testy" + currentSlide).selector.length
      );
      if (player_youtube[vID] !== undefined) {
        if (sum === 1 || sum === -4) {
          vPo.parent().find(".pvdoy-pp").removeClass("opacity-play");
          vPo.parent().find(".pvdoy-vdo-ch").css({ "z-index": 2 });
          vPo.parent().find(".pvdoy-img-ch").css({ "z-index": 5 });
          vPo.parent().find("i").attr("id", 1);
          player_youtube[vID].pauseVideo();
        }
      }
      if (player_youtube[vID3] !== undefined) {
        if (sum === -1 || sum === 4) {
          vPo3.parent().find(".pvdoy-pp").removeClass("opacity-play");
          vPo3.parent().find(".pvdoy-vdo-ch").css({ "z-index": 2 });
          vPo3.parent().find(".pvdoy-img-ch").css({ "z-index": 5 });
          vPo3.parent().find("i").attr("id", 1);
          player_youtube[vID3].pauseVideo();
        }
      }
    }
  );
}

function prev() {
  $(".arrow.left").unbind("click");
  $(".arrow.left").click(function () {
    $(".img-show").slick("slickPrev");
    $(".pvdo-show").slick("slickPrev");
    $(".pvdoy-show").slick("slickPrev");
  });
}

function next() {
  $(".arrow.right").unbind("click");
  $(".arrow.right").click(function () {
    $(".img-show").slick("slickNext");
    $(".pvdo-show").slick("slickNext");
    $(".pvdoy-show").slick("slickNext");
  });
}

function activeVideo() {
  $("#play").unbind("click");
  $("#play").click(function () {
    let vId = $(this).parent().attr("id");
    initVideoBanner("video-" + vId);
    myPlayer["video-" + vId].play();
  });

  $("#pause").unbind("click");
  $("#pause").click(function () {
    let vId = $(this).parent().attr("id");
    myPlayer["video-" + vId].pause();
  });
}

function initVideoBanner(idx) {
  myPlayer[idx] = $("#" + idx).controlVideos("setEvent", {
    onplay: function () {
      console.log("onplay", "video");
    },
    onpause: function () {
      console.log("onpause", "video");
    },
    onended: function () {
      console.log("onended", "video");
    },
    oncanplay: function () {
      // myPlayer[idx].play();
    },
  });
}

function swit() {
  $(".pp").unbind("click");
  $(".pp").click(function () {
    let a = $(this).attr("id");
    if (a === "1") {
      $(".imgvdo-ch").css({ "z-index": 2 });
      $(".vdo-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");
      initVideoBanner("video-" + vId);
      myPlayer["video-" + vId].play();
      $(this).attr("id", 2);
      $(this).addClass("opacity-play");
    } else {
      $(".vdo-ch").css({ "z-index": 2 });
      $(".imgvdo-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");
      initVideoBanner("video-" + vId);
      myPlayer["video-" + vId].pause();
      $(this).attr("id", 1);
      $(this).removeClass("opacity-play");
    }
  });
}

function pvdoswit() {
  $(".pvdo-pp").unbind("click");
  $(".pvdo-pp").click(function () {
    let a = $(this).attr("id");
    if (a === "1") {
      $(this).parent().find(".pvdo-img-ch").css({ "z-index": 2 });
      $(this).parent().find(".pvdo-vdo-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");
      initVideoBanner("video-" + vId);
      myPlayer["video-" + vId].play();
      $(this).attr("id", 2);
      $(this).addClass("opacity-play");
    } else {
      $(this).parent().find(".pvdo-img-ch").css({ "z-index": 6 });
      $(this).parent().find(".pvdo-vdo-ch").css({ "z-index": 2 });
      let vId = $(this).parent().attr("id");
      initVideoBanner("video-" + vId);
      myPlayer["video-" + vId].pause();
      $(this).attr("id", 1);
      $(this).removeClass("opacity-play");
    }
  });
}

function pvdoyswit() {
  $(".pvdoy-pp").unbind("click");
  $(".pvdoy-pp").click(function () {
    let a = $(this).attr("id");
    if (a === "1") {
      $(this).parent().find(".pvdoy-img-ch").css({ "z-index": 2 });
      $(this).parent().find(".pvdoy-vdo-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");
      let ifram = $(this).parent().find("iframe").attr("id");
      $(this).attr("id", 2);
      $(this).addClass("opacity-play");
      actionVideoYoutube("#" + vId, "play", "#" + ifram);
    } else {
      $(this).parent().find(".pvdoy-img-ch").css({ "z-index": 6 });
      $(this).parent().find(".pvdoy-vdo-ch").css({ "z-index": 2 });
      let vId = $(this).parent().attr("id");
      let ifram = $(this).parent().find("iframe").attr("id");
      $(this).attr("id", 1);
      $(this).removeClass("opacity-play");
      actionVideoYoutube("#" + vId, "pause", "#" + ifram);
    }
  });
}

function swit2() {
  $(".ppy").unbind("click");
  $(".ppy").click(function () {
    let a = $(this).attr("id");
    if (a === "1") {
      $(".imgvdoy-ch").css({ "z-index": 2 });
      $(".vdoy-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");

      let ifram = $(this).parent().find("iframe").attr("id");
      $(this).attr("id", 2);
      $(this).addClass("opacity-play");
      actionVideoYoutube("#" + vId, "play", "#" + ifram);
    } else {
      $(".vdoy-ch").css({ "z-index": 2 });
      $(".imgvdoy-ch").css({ "z-index": 6 });
      let vId = $(this).parent().attr("id");
      let ifram = $(this).parent().find("iframe").attr("id");
      $(this).attr("id", 1);
      $(this).removeClass("opacity-play");
      actionVideoYoutube("#" + vId, "pause", "#" + ifram);
    }
  });
}

function apiLoadedplay(id) {
  YT.ready(function () {
    Youtube.isApiReady = true;
    var id = Youtube.curId;
    player_youtube[id] = new YT.Player(id, {
      events: {
        onReady: function () {
          player_youtube[id].playVideo();
        },
        onStateChange: function (event) {
          if (event.data === 0) {
            console.log("youtube end");
          } else if (event.data === 1) {
            console.log("youtube start");
          }
        },
      },
    });
  });
}

function loadScript(id, src, callback) {
  var loaded = false;
  var tag = document.createElement("script");
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  tag.onload = function () {
    if (!loaded) {
      loaded = true;
      callback();
    }
  };
  tag.onreadystatechange = function () {
    if (
      !loaded &&
      (this.readyState === "complete" || this.readyState === "loaded")
    ) {
      loaded = true;
      callback();
    }
  };
  tag.id = id;
  tag.src = src;
}

function onYouTube_IframeAPIReady(id, action) {
  var id = id.replace("#", "");
  Youtube.curId = id;
  if ($("#call-youtube-iframe").length == 0) {
    loadScript(
      "call-youtube-iframe",
      "https://www.youtube.com/iframe_api",
      apiLoadedplay
    );
  } else {
    apiLoadedplay();
  }
}

function setElmSrc(elm) {
  if (elm.attr("src") == "" || elm.attr("src") === undefined) {
    elm.attr("src", elm.data("src"));
    elm.removeAttr("data-src");
  }
}

function actionVideoYoutube(elm, action, ifram) {
  setElmSrc($(elm + " iframe"));
  var id = ifram.replace("#", "");
  if (player_youtube[id] != undefined) {
    if (action === "play") {
      player_youtube[id].playVideo();
    } else {
      player_youtube[id].pauseVideo();
    }
  } else {
    onYouTube_IframeAPIReady(ifram, action);
  }
}

function popup() {
  $(".ppypop").unbind("click");
  $(".ppypop").click(function () {
    let linksrc = $(this).parent().find(".popvdoy-ch").data("src");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".popup-main")
      .css({ visibility: "visible" });
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".popup-main .wrap-modal-box .vdoypopup-ch")
      .data("src", linksrc);
    let vId = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".popup-main .wrap-modal-box")
      .attr("id");
    let ifram = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".popup-main .wrap-modal-box .vdoypopup-ch")
      .attr("id");
    actionVideoYoutube("#" + vId, "play", "#" + ifram);
  });
}

function pvdoyswit() {
  $(".ppypopup").unbind("click");
  $(".ppypopup").click(function () {
    console.log(2);
    let vId = $(this).parent().parent().attr("id");
    let ifram = $(this).parent().parent().find("iframe").attr("id");
    actionVideoYoutube("#" + vId, "pause", "#" + ifram);
    $(this).parent().parent().parent().css({ visibility: "hidden" });
    return false;
  });
}
