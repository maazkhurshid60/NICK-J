(function () {
  function hide() {
    var all = document.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var t = el.innerText || el.textContent || "";
      if (t.indexOf("start a conversation") !== -1 || t.indexOf("Welcome") !== -1) {
        el.style.setProperty("display", "none", "important");
      }
    }
  }
  hide();
  setInterval(hide, 500);
  var mo = new MutationObserver(hide);
  mo.observe(document.body, { childList: true, subtree: true });
})();
