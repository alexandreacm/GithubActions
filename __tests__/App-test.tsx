// import 'react-native';
import React from 'react';
import App from '../App';

import renderer, {create} from 'react-test-renderer';
import {render} from '@testing-library/react-native';

describe('All tests', () => {
  const tree = create(<App />).toJSON();

  test('renders correctly snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly', () => {
    renderer.create(<App />);
  });

  test('renders correctly App component with @testing-library', () => {
    render(<App />);
  });
});
