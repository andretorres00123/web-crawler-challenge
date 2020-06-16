import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';

describe('Home page', () => {
   test('should renders the home page', () => {
      const tree = renderer.create(<Index />).toJSON()
      expect(tree).toMatchSnapshot()
    });
});
