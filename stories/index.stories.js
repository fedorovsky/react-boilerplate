import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../src/components/HelloWorld';

storiesOf('Components', module)
  .add('css grid', () => (
    <HelloWorld />
  ));
