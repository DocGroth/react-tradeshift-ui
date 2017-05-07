import React from 'react';
import { shallow } from 'enzyme';

import Aside from './';

describe('Aside', () => {
	it('renders with default props', () => {
		const wrapper = shallow(<Aside />);
		expect(wrapper).toMatchSnapshot();
	});

	describe('spirit interaction', () => {
		it('respects isOpen in controlled mode', () => {
			const wrapper = shallow(<Aside isOpen />);

			// Mock the spirit:
			const spirit = {};
			wrapper.instance().onRef({ spirit });
			expect(spirit.onclose()).toEqual(false);

			// Set callback to close the aside
			wrapper.setProps({
				onClose() {
					wrapper.setProps({ isOpen: false });
				}
			});
			expect(spirit.onclose()).toEqual(true);
		});
	});
});
