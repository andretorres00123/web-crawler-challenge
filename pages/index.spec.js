import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './index';

const props = {
  getAllNews: () => {},
};

describe('Home page', () => {
   test('should renders the home page', () => {
      const tree = renderer.create(<Home {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    });
});
