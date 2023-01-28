import '../styles/globals.css';
import P from 'prop-types';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
App.propTypes = {
  Component: P.element,
  pageProps: P.element,
};
