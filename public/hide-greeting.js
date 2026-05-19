(function () {
  var keywords = ["start a conversation", "Welcome", "Let\u2019s start", "Let's start"];
  var locked = new WeakSet();

  function applyRight(el) {
    el.style.setProperty("left",      "auto",  "important");
    el.style.setProperty("right",     "24px",  "important");
    el.style.setProperty("bottom",    "24px",  "important");
    el.style.setProperty("top",       "auto",  "important");
    el.style.setProperty("transform", "none",  "important");
    el.style.setProperty("position",  "fixed", "important");
    el.style.setProperty("opacity",   "1",     "important");
    el.style.setProperty("visibility","visible","important");
  }

  function isWidgetLauncher(el) {
    if (el === document.body || el.tagName === "HEADER" || el.tagName === "NAV") return false;
    var rect = el.getBoundingClientRect();
    var st   = window.getComputedStyle(el);
    return st.position === "fixed" &&
           rect.width > 0 && rect.width < 120 &&
           rect.height > 0 && rect.height < 120 &&
           rect.bottom > window.innerHeight - 200;
  }

  function lockElement(el) {
    if (locked.has(el)) return;
    // Hide instantly before paint, reposition, then reveal
    el.style.setProperty("opacity",    "0", "important");
    el.style.setProperty("visibility", "hidden", "important");
    requestAnimationFrame(function () {
      applyRight(el);
      locked.add(el);
      // Lock against widget's own repositioning
      var mo = new MutationObserver(function () { applyRight(el); });
      mo.observe(el, { attributes: true, attributeFilter: ["style"] });
    });
  }

  function findAndLock() {
    document.querySelectorAll("*").forEach(function (el) {
      if (isWidgetLauncher(el)) lockElement(el);
    });
  }

  function hideGreeting() {
    document.querySelectorAll("*").forEach(function (el) {
      var text = (el.innerText || el.textContent || "").trim();
      if (!text) return;
      var matched = keywords.some(function (k) { return text.includes(k); });
      if (!matched) return;
      var node = el;
      for (var i = 0; i < 8; i++) {
        if (!node || node === document.body) break;
        var st = window.getComputedStyle(node);
        if (st.position === "fixed" || st.position === "absolute") {
          var iconOnly = node.querySelector("svg") && (node.innerText || "").trim().length < 5;
          if (!iconOnly) { node.style.setProperty("display", "none", "important"); return; }
        }
        node = node.parentElement;
      }
    });
  }

  // Watch for widget being added to DOM — fires before paint
  var bodyObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        // Check the added node and all its descendants
        if (isWidgetLauncher(node)) lockElement(node);
        node.querySelectorAll && node.querySelectorAll("*").forEach(function (child) {
          if (isWidgetLauncher(child)) lockElement(child);
        });
      });
    });
    hideGreeting();
    findAndLock();
  });
  bodyObserver.observe(document.body, { childList: true, subtree: true });

  [300, 800, 2000, 5000, 60000].forEach(function (t) {
    setTimeout(function () { findAndLock(); hideGreeting(); }, t);
  });
})();
