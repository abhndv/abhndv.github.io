function showComingSoon() {
  var x = document.getElementById("comingSoon");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

$(() => {
  $(document).on("click", (e) => {
    let el = $(e.target);
    let nav = $(".menu"),
      btn = $(".menu-sm input");
    if (el.parents(".menu-sm").length < 1) {
      nav.removeClass("menu-popup");
      btn.prop("checked", false);
    } else {
      if (btn.prop("checked")) nav.addClass("menu-popup");
      else nav.removeClass("menu-popup");
    }
    console.log(el);
  });

  $("#cForm").trigger("reset");

  const maxScroll = $(".section-container").prop("scrollHeight") - $(window).height();
  showScrollProgress(maxScroll);
  $(".section-container").on("scroll", () => showScrollProgress(maxScroll));

  $("#cForm").on("submit", (e) => {
    e.preventDefault();
    sendMessage();
  });
});

const showScrollProgress = (maxScroll) => {
  const percentage = ($(".section-container").scrollTop() / maxScroll) * 100;
  $(".nav-scroll").css("height", percentage + "%");
};

const sendMessage = () => {
  let data = $("#cForm").serialize();
  console.log(data);

  const url = "https://abhndv.herokuapp.com";

  $.ajax({
    type: "POST",
    url: url + "/send",
    data: data,
    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      let obj = err?.responseJSON;
      console.log(obj);
    },
  });
};
