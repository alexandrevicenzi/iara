$(document).ready(function(){

  function shareUrl(url, title, w, h) {
    window.open(url, "_blank").focus();
  }

  $(".twitter-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    shareUrl(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "Share on Twitter", 600, 300);
  });

  $(".linkedin-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    shareUrl(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "Share on LinkedIn", 600, 600);
  });

  $(".facebook-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    shareUrl(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "Share on Facebook", 550, 650);
  });

  $(".pinterest-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    shareUrl(`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${text}`, "Share on Pinterest", 600, 600);
  });

  $(".nav-scroller-left").click(function (e) {
    e.preventDefault();

    var pos = $(".nav-scroller > nav").scrollLeft();

    if (pos > 0) {
      $(".nav-scroller-right").removeAttr("disabled");
      $(".nav-scroller > nav").animate({scrollLeft: pos - 400}, 800);
    }

    var pos = $(".nav-scroller > nav").scrollLeft() - 400;

    if (pos <= 0) {
      $(".nav-scroller-left").attr("disabled", "true");
    }
  });

  $(".nav-scroller-right").click(function (e) {
    e.preventDefault();

    var pos = $(".nav-scroller > nav").scrollLeft();
    var maxScroll = $(".nav-scroller > nav")[0].scrollWidth - $('.nav-scroller')[0].scrollWidth;

    if (pos < maxScroll) {
      $(".nav-scroller-left").removeAttr("disabled");
      $(".nav-scroller > nav").animate({scrollLeft: pos + 400}, 800);
    }

    var pos = $(".nav-scroller > nav").scrollLeft() + 400;

    if (pos >= maxScroll) {
      $(".nav-scroller-right").attr("disabled", "true");
    }
  });

  $("#search-modal").on("shown.bs.modal", function () {
      // $("#textareaID").focus();
      $("input[name=search]", this).focus();
  });

  function checkCarousel() {
    if ($(".nav-scroller").length === 0) {
      return;
    }

    var diff = $(".nav-scroller > nav")[0].scrollWidth - $('.nav-scroller')[0].scrollWidth

    if (diff == 0) {
      $(".nav-scroller-left, .nav-scroller-right").hide();
    }
  }

  checkCarousel();
});
