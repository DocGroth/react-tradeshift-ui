import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => <menu data-ts="Menu">{children}</menu>;

Menu.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

Menu.defaultProps = {
	children: null
};

export default Menu;
