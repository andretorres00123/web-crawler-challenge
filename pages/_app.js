import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from '../i18n'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
};

export default appWithTranslation(MyApp);