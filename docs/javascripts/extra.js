/*
 * Keyboard shortcuts - same pattern as airshop app
 * Cmd+B: toggle nav drawer | Cmd+K: open search
 */
(function () {
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
})();
