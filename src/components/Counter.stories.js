import React from 'react';
import { action } from '@storybook/addon-actions';
import Counter from './Counter';

export default {
  component: Counter,
  title: 'Counter',
};

export const Default = () => (
  <Counter />
);