/*
 * Keyboard shortcuts - same pattern as airshop app
 * Cmd+B: toggle nav drawer | Cmd+K: open search
 * Message us links open Tawk chat when available
 */
(function () {
  /* Dev fallback: auto-refresh every 30s on localhost when livereload fails */
  if (/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(window.location.host)) {
    setInterval(function () { location.reload(); }, 30000);
  }

  function isTypingInTextField(target) {
    if (!target) return false;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return true;
    if (target instanceof HTMLElement && target.isContentEditable) return true;
    if (target instanceof Node && target.parentElement && target.parentElement.isContentEditable) return true;
    return false;
  }

  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
      if (isTypingInTextField(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      var drawer = document.getElementById("__drawer");
      if (drawer) drawer.checked = !drawer.checked;
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      e.stopPropagation();
      var search = document.getElementById("__search");
      if (search) {
        search.checked = true;
        requestAnimationFrame(function () {
          var input = document.querySelector(".md-search__input");
          if (input) input.focus();
        });
      }
      return;
    }
  }

  window.addEventListener("keydown", handleKeyDown, true);

  /* Message us: open Tawk chat if loaded, else follow link */
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest(".js-message-us");
    if (!link) return;
    if (typeof Tawk_API !== "undefined" && Tawk_API.maximize) {
      e.preventDefault();
      Tawk_API.maximize();
    }
  });

  /* Fix permalink hrefs: use clean path + anchor (no .md), so copy-link gives shareable URL */
  function fixPermalinkHrefs() {
    var path = (location.pathname || "/").replace(/\.md\/?$/, "").replace(/\/?$/, "") || "/";
    document.querySelectorAll("a.headerlink").forEach(function (a) {
      var h = a.getAttribute("href");
      if (h && h.charAt(0) === "#") {
        a.setAttribute("href", path + h);
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixPermalinkHrefs);
  } else {
    fixPermalinkHrefs();
  }
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(fixPermalinkHrefs);
  }
})();
