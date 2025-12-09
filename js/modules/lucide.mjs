import { createElement, icons } from 'https://cdn.jsdelivr.net/npm/lucide@0.555.0/+esm';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const kebabToCamel = str => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const module = icon => createElement(icons[capitalize(kebabToCamel(icon))]).outerHTML;
export default module;