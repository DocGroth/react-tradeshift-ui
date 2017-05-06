import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);
addDecorator(withKnobs);

setOptions({
	name: 'React-tradeshift-ui',
	url: 'https://ui.tradeshift.com',
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: true,
	sortStoriesByKind: false
});

configure(function loadStories() {
	require('../src/stories');
}, module);
