import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import Aside from '../components/Aside';

const stories = storiesOf('Aside', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.addWithInfo(
	'Basic use',
	// `Hello info`,
	() => (
		<Aside
			title={text('title', 'Aside demo')}
			isOpen={boolean('isOpen', true)}
			loadingMessage={text('loadingMessage', 'Loading...')}
			isLoading={boolean('isLoading', false)}
			onOpen={action('onOpen')}
			onOpened={action('onOpened')}
			onClose={action('onClose')}
			onClosed={action('onClosed')}
		>
			{text('Label', 'Hello Button')}
		</Aside>
	),
	{ inline: true }
);

// Knobs for React props
stories.addWithInfo(
	'Basic use 2',
	// `Hello info`,
	() => (
		<Aside
			title={text('title', 'Aside demo')}
			isOpen={boolean('isOpen', true)}
			loadingMessage={text('loadingMessage', 'Loading...')}
			isLoading={boolean('isLoading', false)}
			onOpen={action('onOpen')}
			onOpened={action('onOpened')}
			onClose={action('onClose')}
			onClosed={action('onClosed')}
		>
			{text('Label', 'Hello Button')}
		</Aside>
	),
	{ inline: true }
);
