import React, {Component, PropTypes} from 'react';
import Portal from 'react-portal';
const noop = () => {};

class Aside extends Component {
	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);

		// Sync open flag for onclose / onopen callbacks
		this.isOpen = props.isOpen;
	}

	componentWillReceiveProps(nextProps) {
		this.isOpen = nextProps.isOpen;
		if (!this.ref || !this.ref.spirit) {
			const ref = this.ref || {};
			console.log(this.ref);
			console.log(ref.spirit);
			return;
		}

		if (this.props.isOpen !== nextProps.isOpen) {
			if (nextProps.isOpen === true) {
				this.ref.spirit.open();
			} else if (nextProps.isOpen === false) {
				this.ref.spirit.close();
			}
		}
	}

	onRef(ref) {
		console.log('onRef');
		this.ref = ref;

		if (ref) {
			if (!ref.spirit) {
				console.log('waiting spirit');
				return setTimeout(() => this.onRef(ref), 1);
			}
			ref.spirit.onclose = e => {
				console.log(!this.isOpen)
				this.props.onClose(e);
				return !this.isOpen;
			};
			ref.spirit.onclosed = this.props.onClosed;
			ref.spirit.onopen = e => {
				console.log(this.isOpen)
				this.props.onOpen(e);
				return this.isOpen;
			};
			ref.spirit.onopened = this.props.onOpened;
		}
	}

	render() {
		const busyMessage = this.props.isLoading ? this.props.loadingMessage : undefined;
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
	children: PropTypes.any,
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
	loadingMessage: 'Loading...',
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop
};

export default Aside;
