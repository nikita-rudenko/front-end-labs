import template from "raw-loader!./template.html";
import { renderFragment } from "../../utils/render";
import $ from "jquery";

export function render(container) {
  renderFragment(container, template);
  $("#load-advanced").on("click", () => {
    import(/* webpackChunkName: "advanced" */"./advanced").then(script => {
      $("#adv-content-box").html(script.render());
      script.events();
    });
  });
}

export function destroy() {
  $("#load-advanced").off("click");
}
