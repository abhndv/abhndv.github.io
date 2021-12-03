function showComingSoon() {
  var x = document.getElementById("comingSoon");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
