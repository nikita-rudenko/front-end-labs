import template from "raw-loader!./template.html";
import { renderFragment } from "../../utils/render";

export function render(container) {
  renderFragment(container, template);
}
