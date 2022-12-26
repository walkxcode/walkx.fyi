---
---
(function() {
  document.addEventListener("DOMContentLoaded", (function(_this) {
    return function() {
      var collapsible;
      collapsible = document.querySelector(".collapsible");
      return document.querySelector(".collapse-button").addEventListener("click", function(event) {
        event.preventDefault();
        return collapsible.classList.toggle("show");
      });
    };
  })(this));

}).call(this);
