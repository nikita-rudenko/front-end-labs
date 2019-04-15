import template from './template.pug';
import { renderFragment } from '../../utils/render';

export function render(container) {
	renderFragment(container, template());
}
