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

  /* Custom styled tooltips - replace native title with AirShop-styled tooltip */
  (function initCustomTooltips() {
    var tooltipEl = null;
    var currentTarget = null;
    var showTimer = null;
    var hideTimer = null;
    var showDelay = 120;

    function createTooltip() {
      if (tooltipEl) return tooltipEl;
      tooltipEl = document.createElement("div");
      tooltipEl.className = "airshop-tooltip";
      tooltipEl.setAttribute("role", "tooltip");
      tooltipEl.setAttribute("aria-hidden", "true");
      document.body.appendChild(tooltipEl);
      return tooltipEl;
    }

    function showTooltip(target, text) {
      if (!text || !text.trim()) return;
      var el = createTooltip();
      el.textContent = text;
      el.setAttribute("aria-hidden", "false");
      el.classList.add("airshop-tooltip--visible");
      var rect = target.getBoundingClientRect();
      el.style.left = rect.left + rect.width / 2 + "px";
      el.style.top = rect.top + "px";
    }

    function hideTooltip() {
      if (!tooltipEl) return;
      tooltipEl.classList.remove("airshop-tooltip--visible");
      tooltipEl.setAttribute("aria-hidden", "true");
    }

    document.addEventListener("mouseover", function (e) {
      var target = e.target.closest && e.target.closest("[title]");
      if (!target || target.closest(".airshop-tooltip")) return;
      if (target === currentTarget) return;
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      if (currentTarget) {
        var t = currentTarget.getAttribute("data-airshop-tooltip");
        if (t) currentTarget.setAttribute("title", t);
        currentTarget.removeAttribute("data-airshop-tooltip");
        currentTarget = null;
        hideTooltip();
      }
      currentTarget = target;
      var text = target.getAttribute("title");
      showTimer = setTimeout(function () {
        showTimer = null;
        target.setAttribute("data-airshop-tooltip", text);
        target.removeAttribute("title");
        showTooltip(target, text);
      }, showDelay);
    }, true);

    document.addEventListener("mouseout", function (e) {
      var target = e.target.closest && e.target.closest("[data-airshop-tooltip]");
      var related = e.relatedTarget;
      if (!target) return;
      if (related && target.contains(related)) return;
      if (related && related.closest && related.closest(".airshop-tooltip")) return;
      if (showTimer) {
        clearTimeout(showTimer);
        showTimer = null;
      }
      currentTarget = null;
      hideTimer = setTimeout(function () {
        hideTooltip();
        var text = target.getAttribute("data-airshop-tooltip");
        if (text) target.setAttribute("title", text);
        target.removeAttribute("data-airshop-tooltip");
        hideTimer = null;
      }, 80);
    }, true);
  })();

  /* Admonition icon tooltips: overlay span over icon area with title for custom tooltip */
  var ADMONITION_TYPES = ["note", "info", "abstract", "success", "question", "warning", "danger", "failure", "bug"];
  function addAdmonitionTooltips() {
    document.querySelectorAll(".md-typeset .admonition").forEach(function (el) {
      var titleEl = el.querySelector(".admonition-title");
      if (!titleEl || titleEl.querySelector(".admonition-icon-tooltip")) return;
      var type = null;
      for (var i = 0; i < ADMONITION_TYPES.length; i++) {
        if (el.classList.contains(ADMONITION_TYPES[i])) {
          type = ADMONITION_TYPES[i].toUpperCase();
          break;
        }
      }
      if (!type) return;
      var span = document.createElement("span");
      span.className = "admonition-icon-tooltip";
      span.setAttribute("title", type);
      span.setAttribute("aria-label", type);
      titleEl.insertBefore(span, titleEl.firstChild);
    });
  }
  function runWhenReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }
  runWhenReady(addAdmonitionTooltips);
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(addAdmonitionTooltips);
  }
})();
