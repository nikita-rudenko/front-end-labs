import template from "raw-loader!./template.html";
import $ from "jquery";

export function render() {
  return template;
}

export function events() {
  $(".advanced-wrapper").on("click", "[data-mytoggle]", function(e) {
    e.preventDefault();
    const target = $(this).data("mytoggle");
    $(target).fadeToggle();
  });
}
