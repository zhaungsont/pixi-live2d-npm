import _ from 'lodash';
import './test.scss';
function component() {
	const element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack', 'gg'], ' ');

	return element;
}

document.body.appendChild(component());
