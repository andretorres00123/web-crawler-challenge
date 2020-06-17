import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import { appWithTranslation } from '../i18n';
import { makeStore } from '../statemanagement/store';
import theme from '../styles/theme';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default compose(
  withRedux(makeStore),
  appWithTranslation,
)(MyApp);
