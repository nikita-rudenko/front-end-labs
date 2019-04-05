import template from "raw-loader!./template.html";
import { renderFragment } from "../../utils/render";
import $ from "jquery";

export function render(container) {
  renderFragment(container, template);
  $("#click-me").on("click", () => {
    alert("button clicked");
  });
}

export function destroy() {
  $("#click-me").off("click");
}
