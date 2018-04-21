import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import StoryParallax1 from './StoryParallax1';
import StoryParallax2 from './StoryParallax2';
import StoryParallax3 from './StoryParallax3';

storiesOf('UI/Parallax', module)
  .add('Basic example', () => <StoryParallax1 />)
  .add('Card', () => <StoryParallax2 />)
  .add('With margin', () => <StoryParallax3 />);
