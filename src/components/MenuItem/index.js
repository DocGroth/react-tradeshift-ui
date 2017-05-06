import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MenuItem = ({ children, checked, disabled }) => (
	<li className={cx({ 'ts-checked': checked })}>
		<button disabled={disabled}>
			{children}
			{checked ? <i className="ts-icon-checked" /> : null}
		</button>
	</li>
);

MenuItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	checked: PropTypes.bool,
	disabled: PropTypes.bool
};

MenuItem.defaultProps = {
	children: null,
	checked: false,
	disabled: false
};

export default MenuItem;
