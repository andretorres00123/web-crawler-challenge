import React from 'react';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Home } from '../pages/index';
import theme from '../styles/theme';

const props = {
  getAllNews: () => { },
};

const initialState = {
  news: {
    list: [],
  },
};

const mockStore = configureStore();
let store;

describe('Home page', () => {

  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('should match with the snapshot', () => {
    const tree = renderer.create(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home {...props} />
      </ThemeProvider>
    </Provider>).toJSON()
    expect(tree).toMatchSnapshot();
  });
});
