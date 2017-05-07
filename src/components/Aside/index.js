import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';

const noop = () => {};

class Aside extends Component {
	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);

		// Sync open flag for onclose / onopen callbacks
		this.isOpen = props.isOpen;
	}

	componentWillReceiveProps(nextProps) {
		this.isOpen = nextProps.isOpen;
	}

	onClose(e) {
		this.props.onClose(e);
		return typeof this.isOpen !== 'undefined' ? !this.isOpen : undefined;
	}

	onOpen(e) {
		this.props.onOpen(e);
		return this.isOpen;
	}

	onRef(ref) {
		this.ref = ref;
		if (this.ref && this.ref.spirit) {
			this.ref.spirit.onclose = this.onClose;
			this.ref.spirit.onclosed = this.props.onClosed;
			this.ref.spirit.onopen = this.onOpen;
			this.ref.spirit.onopened = this.props.onOpened;
		}
	}

	render() {
		const busyMessage = this.props.isLoading
			? this.props.loadingMessage
			: undefined;
		const asideProps = {
			'data-ts.title': this.props.title,
			'data-ts.open': this.props.isOpen,
			'data-ts.busy': busyMessage
		};
		return (
			<Portal isOpened>
				<aside data-ts="Aside" {...asideProps} ref={this.onRef}>
					<div data-ts="Panel">
						{this.props.children}
					</div>
				</aside>
			</Portal>
		);
	}
}

Aside.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	isLoading: PropTypes.bool,
	isOpen: PropTypes.bool,
	loadingMessage: PropTypes.string,
	onClose: PropTypes.func,
	onClosed: PropTypes.func,
	onOpen: PropTypes.func,
	onOpened: PropTypes.func,
	title: PropTypes.string
};

Aside.defaultProps = {
	children: null,
	isLoading: false,
	isOpen: undefined,
	loadingMessage: 'Loading...',
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop,
	title: 'Aside'
};

export default Aside;
